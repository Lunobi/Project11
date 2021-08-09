var path, runner;
var pathimg, runnerimg;
var leftboundary, rightboundary;
var i;


function preload(){
  pathimg = loadImage("path.png");
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400, 400);

  path = createSprite(200, 200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(180,340,30,30);
  runner.scale=0.08;
  runner.addAnimation("RunningMan",runnerimg);

  leftboundary = createSprite(0, 0, 100, 800);
  leftboundary.visible = false;

  rightboundary = createSprite(410, 0, 100, 800);
  rightboundary.visible = false;
}

function draw(){
  background("white");
  path.velocityY = 4;

  runner.x=World.mouseX;

  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftboundary);
  runner.collide(rightboundary);
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}