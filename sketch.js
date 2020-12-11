var back1IMG,back2IMG,back3IMG;
var dolphins

function preload(){
back1IMG = loadImage("images/back1.jpg")
back2IMG = loadImage("images/back2.jpg")
back3IMG = loadImage("images/back3.jpg")
}

function setup(){
  createCanvas(800, 800);
  background(back1IMG); 
  fill("yellow");
  textSize(20);
  text("press space to start", 310, 320);
}

function draw(){

  drawSprites();
  
}   

function keyPressed(){
  if(keyCode === 32){
    background(back2IMG);
    text("all bad people are", 310, 320);
    text("polluting water and", 310, 340);
    text("ocean god is angry", 310, 360);
    text("with them help ocean", 310, 380);
    text("god to take revenge", 310, 400);
    fill("blue");
    text("press E to start level 1", 310, 500);
    fill("green");
    text("Story", 310, 300);
  }
  
}

