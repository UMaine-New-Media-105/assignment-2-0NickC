function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //test at 0,0
  addPincer(0, 0, 1);
  //experimenting with various placements and sizes
  addPincer(100, 150, 1.5)
  addPincer(250, 100, 0.5)
  
}

function addPincer(x, y, size){
  push();
  //using translate and scale to change the size and placement of the shape
  translate(x, y);
  scale(size);
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
