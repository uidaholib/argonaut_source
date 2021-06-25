{% assign highlights = site.data.argonaut_highlights %}
/* add highlights */
var highlights = [ {% for highlight in highlights %}
  { "cdmid":"{{ highlight.cdmid }}", "size":"{{ highlight.size }}", "date":"{{ highlight.date }}", "alt":"{{ highlight.alt }}", "file":"{{ highlight.filename }}" }{% if forloop.last == false %}, {% endif %}{% endfor %} 
];

var grid = document.getElementById("grid");

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
  grid.innerHTML = "<div class='gutter-sizer'></div>";
  var item;
  // cdmid,size,alt,file
  for (i = 0; i < 12; i++) {
      item = "<div onclick='yearClick(this)' class='grid-item grid-" + array[i].size + "'><div class='highlight'><img class='himg' src='{{ site.objects }}/highlights_new/" + array[i].file +"' alt='" + array[i].alt + "'><a href='https://digital.lib.uidaho.edu/cdm/ref/collection/argonaut/id/" + array[i].cdmid + "' target='_blank' class='reveal' title='view item'>" + array[i].date + "</a></div></div>";
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

/* click event for highlights */
function yearClick(elmnt){
    var title = elmnt.querySelector(".reveal");
    var himage = elmnt.querySelector(".himg");
    elmnt.style.border = (elmnt.style.border === "2px solid rgb(120, 154, 161)") ? "none" : "2px solid rgb(120, 154, 161)";
    title.style.display = (title.style.display === "block") ? "none" : "block";
    himage.style.opacity = (himage.style.opacity === "0.4") ? "1" : "0.4";
}

/* add highlights to page */
makeGrid(highlights);

/* add refresh button */
document.getElementById("i-refresh").onclick = function () {
  makeGrid(highlights);
};
