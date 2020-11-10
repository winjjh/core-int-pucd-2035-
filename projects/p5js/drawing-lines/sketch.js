/*
 * @name Continous Lines
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(1000, 1000);
  background(100, 200, 200);
}



function draw() {
  stroke(200, 100, 150);
  strokeWeight(5);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
