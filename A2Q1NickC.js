function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  topRow();
  secondRow();
  thirdRow();
  forthRow();
  bottomRow();
  
}

function topRow(){
  fill("black")
  stroke("white")
  rect (0,0,80,80)
  rect (320,0,80,80)
  fill("purple")
  rect (80,0,80,80)
  rect (160,0,80,80)
  rect (240,0,80,80)
}

function secondRow(){
  fill("black")
  stroke("white")
  rect (0,80,80,80)
  rect (320,80,80,80)
  rect (80,80,80,80)
  fill("purple")
  rect (160,80,80,80)
  rect (240,80,80,80)
}

function thirdRow(){
  fill("black")
  stroke("white")
  rect (0,160,80,80)
  rect (320,160,80,80)
  rect (160,160,80,80)
  fill("purple")
  rect (80,160,80,80)
  rect (240,160,80,80)
}

function forthRow(){
  fill("black")
  stroke("white")
  rect (0,240,80,80)
  rect (320,240,80,80)
  rect (240,240,80,80)
  fill("purple")
  rect (80,240,80,80)
  rect (160,240,80,80)
}

function bottomRow(){
  fill("black")
  stroke("white")
  rect (0,320,80,80)
  rect (320,320,80,80)
  fill("purple")
  rect (80,320,80,80)
  rect (160,320,80,80)
  rect (240,320,80,80)
}
