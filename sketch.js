var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  gameObject1=createSprite(700,645,30,30);
  gameObject1.shapeColor="green"
  //gameObject1.setVelocity(5,5);
  gameObject2=createSprite(120,80,30,30);
  gameObject2.shapeColor="green"
  //gameObject2.setVelocity(5,5);
  gameObject3=createSprite(142,222,30,30);
  gameObject3.shapeColor="green"
  //gameObject3.setVelocity(5,5);
  gameObject4=createSprite(370,200,30,30);
  gameObject4.shapeColor="green"
  //gameObject4.setVelocity(5,5);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameObject1)) {
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

bounceOff(movingRect,fixedRect);

  drawSprites();
}