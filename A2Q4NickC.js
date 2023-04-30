function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  //the brand new flag for the new country... The NEVERLANDS! Inspired by the flags for the Netherlands and Cote D'ivoire
  stroke("black");
  addCollum(0, 0, 1, "orange");
  addCollum(400, 0, 1, "seagreen");
  addRow(0, 0, 1, "red");
  addRow(0, 300, 1, "royalblue");
  noStroke();
  addRow(0, 150, 1, "white");
  addCollum(200, 0, 1, "white");

}
//function made to place the rows
function addRow(x, y, size, color) {
  push();
  translate(x, y);
  scale(size);
  fill(color);
  rect(0, 0, 600, 100);
  pop();
}
//function made to place the collums
function addCollum(x, y, size, color) {
  push();
  translate(x, y);
  scale(size);
  fill(color);
  rect(0, 0, 200, 400);
  pop();
}
