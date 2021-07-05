var garden,rabbit;
var gardenImg,rabbitImg;
var apple,carrot,boomb;
var appleImg,carrotImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  carrotImg = loadImage("carrot.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,220);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
apple = createSprite(180,10,15,15);
apple.velocityY=5;
apple.addImage(appleImg);
apple.scale=0.2;
apple2 = createSprite(250,10,15,15);
apple2.velocityY=5;
apple2.addImage(appleImg);
apple2.scale=0.2;
carrot = createSprite(80,10,10,10);
carrot.addImage(carrotImg);
carrot.velocityY=5;
carrot.scale=0.1;
carrot2 = createSprite(50,1,10,10);
carrot2.addImage(carrotImg);
carrot2.velocityY=1;
carrot2.scale=0.1;

}


function draw() {
  background(0);
  if(keyDown(RIGHT)){
    rabbit.velocityX=9;
  }
  if(keyDown(LEFT)){
    rabbit.velocityX=-9;
  }
  if(rabbit.isTouching(apple))
{apple.x=180;
  apple.y=10;
}

if(rabbit.isTouching(carrot))
{carrot.x=80;
  carrot.y=10;
}

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}