function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  addPincer();
}

function addPincer(){
  push();
  //translate to move shape out of the corner
  translate(175,150);
  //the shape itself
  noFill();
  beginShape();
  vertex(0,0);
  vertex(0,50);
  vertex(30,50);
  vertex(30,0);
  vertex(50, 70);
  vertex(15, 100);
  vertex(-20, 70);
  vertex(0,0);
  endShape();
  pop();
}
