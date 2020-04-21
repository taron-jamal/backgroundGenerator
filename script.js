
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



// Previous code before implementing the DRY principle.

// color1.addEventListener("input", function() {
//   body.style.background =
//   "linear-gradient(to right, "
//   + color1.value
//   + ", "
//   + color2.value
//   + ")";
// })
//
// color2.addEventListener("input", function() {
//   body.style.background =
//   "linear-gradient(to right, "
//   + color1.value
//   + ", "
//   + color2.value
//   + ")";
// })



// New code implementing the DRY principle.

function setGradient() {
  body.style.background =
  "linear-gradient(to right, "
  + color1.value
  + ", "
  + color2.value
  + ")";

  // Update current gradient.
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
