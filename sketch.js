const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;


var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var angle=60;

var ground;
var fan,fan1,fan2,fan3;
var ball;

function preload(){
//find the bug in the below code
	//dustbinImg = addImage("dustbin.png");
	//paperImg = addImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}
	var ground_option={
		isStatic: true
	};
	ground = Bodies.rectangle(0,400,400,20,gr)
	World.add(world,ground);
	btn2 = createImag('up.png');
	btn2 = position(20,30);
	btn2 = size(50,50);
	btn2 = mouseClicked(vForce);
	fan = new ground(50,370,50,30);
	fan1 =new ground(150,370,50,30);
	fan2 = new ground(250,370,50,30); 
	fan3 = new ground(350,370,50,30);


	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);
	Engine.update(engine);
	ellipse(ball.position.x,ball.position.y,20);
	rect(ground.position.x,ground.position.y,750,20);
	fan.show();
	fan1.show();
	fan2.show();
	fan3.show();

	Engine.update(engine);



	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(1185, 570, 200,200);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
