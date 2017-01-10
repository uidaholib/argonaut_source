/* js for argonaut random news highlights 
requires js/packery.pkgd.min.js and js/imagesloaded.pkgd.min.js */
/* click event for highlights */
function yearClick(elmnt){
    var title = elmnt.querySelector(".reveal");
    var imagediv = elmnt.querySelector(".highlight");
    var himage = elmnt.querySelector(".himg");
    
    elmnt.style.border = (elmnt.style.border == "4px solid rgb(120, 154, 161)") ? "none" : "4px solid rgb(120, 154, 161)";
    title.style.display =(title.style.display == "block") ? "none" : "block";
    himage.style.opacity = (himage.style.opacity == "0.4") ? "1" : "0.4";
}
/* Fisher-Yates shuffle https://bost.ocks.org/mike/shuffle/ */
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
/* toggle visiblity of news highlights to display */
function toggleHighlights(array) {
  array.forEach(function(el){el.classList.remove("show");});
  for (var i = 0; i < 12; ++i) {
    var item = array[i]; 
    item.classList.toggle("show");
  };
}

/* get items and shuffle */ 
/* make this a function, call on doc load and on refresh button */
var items = document.getElementsByClassName("grid-item");
var items_array = Array.prototype.slice.call(items); 

/*
shuffle(items_array);
toggleHighlights(items_array); */

/* initialize packery 
Packery, metafizzy, http://packery.metafizzy.co/ */
var grid = document.querySelector('.grid');
var pckry = new Packery( grid, {
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
    percentPosition: true
});
/* wait for images to load before running layout 
imagesLoaded, desandro, http://imagesloaded.desandro.com/ */
/*
imagesLoaded( grid ).on( 'progress', function() {
  pckry.layout();
}); */ 
/* document.onload.reshuffle();*/

/* add refresh button */
document.getElementById("i-refresh").onclick = function () { 
  shuffle(items_array);
  toggleHighlights(items_array);
  pckry.layout();
  };

  /* new */
function yearsToggle() {
    document.getElementById("yearsnav").style.display = ( document.getElementById("yearsnav").style.display == "block") ? "none" : "block";
}

function loadDoc() {
  var highlights = new XMLHttpRequest();
  highlights.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "argo_highlights.xml", true);
  xhttp.send();
}