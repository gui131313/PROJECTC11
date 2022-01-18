var path;
var runner;
var path2;
var runner2;
function preload(){

  //imagens pré-carregadas
  path=loadImage("path.png");
  runner=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  //sprite do path
  path2=createSprite(200,200);
  path2.addImage(path);
  path2.velocityY=4;
  //sprite do runner
  runner2=createSprite(100,100,30,30);
  runner2.addAnimation("correndo",runner);
  runner2.scale=0.05;
}

function draw() {
  background(0);
  if(path2.y>400){
    path2.y=height/2;
  }
  drawSprites();
}
