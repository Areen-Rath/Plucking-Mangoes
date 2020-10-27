const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var sling;
var boyImage, stoneImage, treeImage, mangoImage;
var ground;
var stone, tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

function preload(){
	
	boyImage = loadImage("Plucking Mangoes/boy.png");

}

function setup(){

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground();

	stone = new Stone(50, 540, 50, 50);

	sling = new Slingshot(stone.body, {x: 90, y: 540});

	tree = new Tree(550, 450);

	mango1 = new Mango(450, 400, 60);
	mango2 = new Mango(500, 350, 40);
	mango3 = new Mango(600, 300, 50);
	mango4 = new Mango(460, 325, 60);
	mango5 = new Mango(550, 375, 50);
	mango6 = new Mango(695, 390, 40);
	mango7 = new Mango(540, 300, 50);
	mango8 = new Mango(520, 250, 60);
	mango9 = new Mango(630, 400, 50);
	mango10 = new Mango(680, 320, 60);

	Engine.run(engine);
  
}


function draw(){

	background(211, 211, 211);

	textSize(20);
	fill("green");
	text("Press space to get a second chance to play!", 50, 50);
	
	imageMode(CENTER);
	image(boyImage, 150, 610, 200, 300);
  
	ground.display();

	tree.display();
	
	stone.display();

	sling.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);

}

function mouseDragged(){

	stone.body.position.x = mouseX;
	stone.body.position.y = mouseY;

}

function mouseReleased(){

	sling.fly();

}

function keyPressed(){

	if(keyCode === 32){
		sling.attach(stone.body);
	}

}

function detectCollision(object1, object2){

	object1Pos = object1.body.position;
	object2Pos = object2.body.position;

	if(object1Pos.x - object2Pos.x < object1.width/2 + object2.radius/2 &&
	   object2Pos.x - object1Pos.x < object1.width/2 + object2.radius/2 &&
	   object1Pos.y - object2Pos.y < object1.height/2 + object2.radius/2 &&
	   object2Pos.y - object1Pos.y < object1.height/2 + object2.radius/2){
		   Matter.Body.setStatic(object2.body, false);
	   }

}