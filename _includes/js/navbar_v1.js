/* script v1: classList only supported ie10 +
/* open/toggle small nav */
function navToggle() {
    document.getElementById("navdropdown").classList.toggle("show");
}
/* open/toggle jump years */
function yearsToggle() {
    document.getElementById("yearsnav").classList.toggle("show");
}
/* new all collections toggle */
function collectionsToggle() {
    document.getElementById("collectionsnav").classList.toggle("show");
}

/* add onclick functions to the elements */
/* open + close all collections nav */
document.getElementById("opencollections").addEventListener("click",collectionsToggle);
document.getElementById("closecollections").addEventListener("click",collectionsToggle);
/* open + close years nav */
document.getElementById("openyears").addEventListener("click",yearsToggle);
document.getElementById("closeyears").addEventListener("click",yearsToggle);
/* open + close small nav box */
document.getElementById("navopen").addEventListener("click",navToggle);