
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1=new Bob(340,400,40);
	bob2=new Bob(380,400,40);
	bob3=new Bob(420,400,40);
	bob4=new Bob(460,400,40);
	bob5=new Bob(500,400,40);

rope1=new Rope(bob1.body,{x:340,y:100});
rope2=new Rope(bob2.body,{x:380,y:100});
rope3=new Rope(bob3.body,{x:420,y:100});
rope4=new Rope(bob4.body,{x:460,y:100});
rope5=new Rope(bob5.body,{x:500,y:100});
var options={
  isStatic:true
}
roof=Bodies.rectangle(420,100,100,20,options);  
	Engine.run(engine);
  
} 


function draw() {
  rectMode(CENTER);
  background(180,230,180);
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rect(roof.position.x,roof.position.y,300,20)
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155});
	}
}



