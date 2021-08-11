
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var box1,box2,box3;

var trashImg, paperImg;

// function preload() {
	// 
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new PAPER(100,620);
  ground = new WALL(400,645,width,20);

  box1 = new WALL(650,625,120,20);
  box2 = new WALL(700,580,20,140);
  box3 = new WALL(600,580,20,140);

	Engine.run(engine);
  
}


function draw() {
  background(255);

  noStroke();
  fill(155,0,155);
  rect(0,650,width,50);


  
  paper.display();
  box3.display(123,123,123);
  box1.display(123,123,123);
  box2.display(123,123,123);
  ground.display(155,0,155);
  


  drawSprites();
}

function keyPressed() {

  if (keyCode === UP_ARROW){

    Body.applyForce(paper.bdy, paper.bdy.position,{x: 7, y:-6});

  }

}



