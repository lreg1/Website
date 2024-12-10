var elem = document.getElementById("thing")
var orig = elem.outerHTML
var words = elem.innerHTML
window.addEventListener('scroll', function() {if (window.scrollY >= elem.parentElement.offsetTop + 50) {change()} else {unChange()}} );
function change() {
  elem.outerHTML = "<ul id='stuff'>" + words + "</ul>"
  elem = document.getElementById("stuff")
  console.log("Said hi");
}
function unChange() {
  elem.outerHTML = orig
  elem = document.getElementById("thing")
  // elem.outerHTML = "<p id='thing'></p>"
  console.log("Unsaid hi");
}
