const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload() {
  bg = loadImage("bg.jpg");
  boyImage = loadImage("boy.png");
}

function setup() {
  createCanvas(1000, 450);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(200, 340);
  boy.addImage(boyImage);
  boy.scale = 0.07;
  //Create the Bodies Here.
  stone1 = new stone(70, 340, 50, 50);

  mango1 = new mango(900, 100, 40, 40);
  mango2 = new mango(800, 50, 40, 40);
  mango3 = new mango(700, 100, 40, 40);
  mango4 = new mango(750, 150, 40, 40);
  mango5 = new mango(860, 50, 40, 40);
  mango6 = new mango(950, 150, 40, 40);
  mango7 = new mango(850, 150, 40, 40);
  mango8 = new mango(750, 200, 40, 40);
  mango9 = new mango(700, 130, 40, 40);
  mango10 = new mango(900, 150, 40, 40);

  ground1 = new ground(400, 380, 1600, 10);
  tree1 = new tree(800, 200);

  Chain = new chain(stone1.body, { x: 170, y: 300 });

  Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background(bg);

  ground1.display();
  tree1.display();

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

  stone1.display();
  Chain.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
  drawSprites();
  textSize(25)
  text("Press space for another change",0,30)
}

function mouseDragged() {
  Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  Chain.fly();
}

function detectCollision(lstone, lmango) {
  mPos = lmango.body.position;
  sPos = lstone.body.position;

  var distance = dist(sPos.x, sPos.y, mPos.x, mPos.y);
  if (distance <= lmango.width + lstone.width) {
	Matter.Body.setStatic(lmango.body, false);
}

}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, { x: 70, y: 340 });
    Chain = new chain(stone1.body, { x: 170, y: 300 });
  }
}
