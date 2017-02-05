var grid = document.getElementById("grid");
var allHighlights = [];
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
/* create highlight grid */
function makeGrid(array) {
  var i;
  shuffle(array);
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.lastChild);
  }
  grid.innerHTML = "<div class=\"gutter-sizer\"></div>";
  var item;
  for (i = 0; i < 12; i++) {
      item = "<div onclick=\"yearClick(this)\" class=\"grid-item grid-" + array[i].size + "\"><div class=\"highlight\"><img class=\"himg\" src=\"http://www.lib.uidaho.edu/digital/argonaut/images/highlights/" + array[i].filename +"\" ><a href=\"http://digital.lib.uidaho.edu/cdm/ref/collection/argonaut/id/" + array[i].refID + "\" target=\"_blank\" class=\"reveal\" title=\"view item\">" + array[i].title + "</a></div></div>";
      grid.innerHTML += item;
  }
  /* initialize Packery, metafizzy, http://packery.metafizzy.co/ */
  var pckry = new Packery( grid, {
    itemSelector: ".grid-item",
    gutter: ".gutter-sizer",
    percentPosition: true
  });
  /* wait for images to load before running layout imagesLoaded, desandro, http://imagesloaded.desandro.com/ */
  imagesLoaded( grid ).on( "progress", function() {
    pckry.layout();
  });
}
/* get highlights JSON file */
function parseHighlights(xhttp) {
  var allObjects = JSON.parse(xhttp.responseText);
  allHighlights = allObjects.highlights;
  makeGrid(allHighlights);
}
function loadHighlights(url) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      parseHighlights(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
/* click event for highlights */
function yearClick(elmnt){
    var title = elmnt.querySelector(".reveal");
    var himage = elmnt.querySelector(".himg");
    elmnt.style.border = (elmnt.style.border === "2px solid rgb(120, 154, 161)") ? "none" : "2px solid rgb(120, 154, 161)";
    title.style.display = (title.style.display === "block") ? "none" : "block";
    himage.style.opacity = (himage.style.opacity === "0.4") ? "1" : "0.4";
}

loadHighlights("js/highlights.json");
/* add refresh button */
document.getElementById("i-refresh").onclick = function () {
  makeGrid(allHighlights);
};
