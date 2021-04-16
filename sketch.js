
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var rubber;
var stone;
var iron;
var ground;
var hammer;


function setup() {
	createCanvas(1000,570);
	engine = Engine.create();
	world = engine.world;

     rubber = new Rubber(500,300)
	   stone = new Stone(280,400);
	   iron = new Iron(100,200)
     ground =new Ground(500,568)
     hammer = new Hammer(100,100)
	

	//Create the Bodies Here.
  
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine)

  stone.display();
  rubber.display();
  iron.display();
  ground.display();
  hammer.display();

 
}



