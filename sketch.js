function setup() {
  createCanvas(600,600);
  background("rgb(103,103,228)"); 
}



function draw() {
  stroke("white");
  strokeWeight(5);
  fill("black");
  if(mouseIsPressed){
  rect(mouseX, mouseY,20,30);
  }
}
