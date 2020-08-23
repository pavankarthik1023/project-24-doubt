
var paper,ground;
var border2,border2,border3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		ground = new Ground(350,400,900,200);
		border1 = new Bucket(525,250,40,100);
		border2 = new Bucket(625,250,40,100);
		border3 = new Bucket(575,320,125,40);
		paper = new Paper(200,250,2);
		
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
if(keyCode===32)
{
	paper.velocityY=7;
	paper.velocityY=paper.velocityY-0.5;
}

  drawSprites();
  ground.display();
  border1.display();
  border2.display();
  border3.display();
  paper.display(); 

}


