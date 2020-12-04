const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball= new paper(650,150,5,options)
	 ground1 = new ground(0,0,800,25,options)
	 dustbin1= new dustbin (455,650,260,20,options)
	 dustbin2= new dustbin (330,600,20,100,options)
	 dustbin3 = new dustbin (570,600,20,100,options)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:85})
	}
}




