/* all collections toggle */
function collectionsToggle() {
    document.getElementById("collectionsnav").style.display = ( document.getElementById("collectionsnav").style.display == "block") ? "none" : "block";
}
/* open + close all collections nav */
document.getElementById("opencollections").onclick = function() { collectionsToggle(); };
document.getElementById("closecollections").onclick = function () { collectionsToggle(); };
