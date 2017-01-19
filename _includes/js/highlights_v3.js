/* get highlights JSON file */
loadHighlights("http://127.0.0.1:4000/digital/argonaut/js/test.json");
function loadHighlights(url) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      makeGrid(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};
/* JSON looks like: { "highlights" : [ {% for highlight in highlights %}{% assign issue = site.data.argonaut | where: "refID",highlight.refID %}{% assign year = issue | map: "title" %}{ "refID" : "{{ highlight.refID }}", "size" : "{{ highlight.size }}", "filename" : "{{ highlight.filename }}", "title" : "{{ year }}" }{% if forloop.last == false %}, {% endif %}{% endfor %} ]} */

/* cool ES6 template string way */
function test2(xhttp) {
var myObj = JSON.parse(xhttp.responseText);
shuffle(myObj.highlights);
var some = myObj.highlights.slice(0,12);
const markup = `
${some.map(highlight =>
`<div onclick="yearClick(this)" class="grid-item grid-${highlight.size}">
    <div class="highlight">
        <img class="himg" src="http://www.lib.uidaho.edu/digital/argonaut/images/highlights/${highlight.filename}" >
        <a href="http://digital.lib.uidaho.edu/cdm/ref/collection/argonaut/id/${highlight.refID}" target="_blank" class="reveal" title="view item">${highlight.title}</a>
    </div>
</div>`
).join(' ')}
`; 
document.getElementById("demo").innerHTML = markup;
};
/* uglier more compatible way */
function makeGrid(xhttp) {
  var i;
  var myObj = JSON.parse(xhttp.responseText);
  shuffle(myObj.highlights);
  var x = document.getElementById("grid");
  for (i = 0; i < 12; i++) {
      var item = "<div onclick=\"yearClick(this)\" class=\"grid-item grid-" + myObj.highlights[i].size + "\"> <div class=\"highlight\"><img class=\"himg\" src=\"http://www.lib.uidaho.edu/digital/argonaut/images/highlights/" + myObj.highlights[i].filename +"\" ><a href=\"http://digital.lib.uidaho.edu/cdm/ref/collection/argonaut/id/" + myObj.highlights[i].refID + "\" target=\"_blank\" class=\"reveal\" title=\"view item\">" + myObj.highlights[i].title + "</a></div></div>";
      x.innerHTML += item;
  };
};

var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);

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
};
/*
var x = document.getElementById("grid");
element.appendChild()
element.removeChild()
var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
list.removeChild(list.childNodes[0]); */