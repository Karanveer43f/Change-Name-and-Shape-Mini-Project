// ------------For color--------------------
let outerCir = document.getElementById("outerCircle");
let colorChange = document.getElementById("btnColor");
let colors = ["aqua", "bisque", "red", "orange"];

let myNum = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

colorChange.addEventListener("click", function () {
  // outerCir.style.backgroundColor = colors[];
  outerCir.style.backgroundColor = colors[myNum(0, 3)];
});

// --------------------------For Shape----------------------------------------

let myShapes = document.getElementsByClassName("shape");
let shapeChange = document.getElementById("btnShape");
let myNum2 = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (i = 0; i < 4; i++) {
  myShapes[i].style.display = "none";
}

let currShape = document.getElementById("currentShape");

shapeChange.addEventListener("click", function () {
  const styles = window.getComputedStyle(myShapes[myNum2(0, 3)]);

  let cssText = styles.cssText;

  if (!cssText) {
    cssText = Array.from(styles).reduce((str, property) => {
      return `${str}${property}:${styles.getPropertyValue(property)};`;
    }, "");
  }

  currShape.style.cssText = cssText;
  currShape.style.display = 'block';

});
