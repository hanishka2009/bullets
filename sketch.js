
var bullet;
var wall;

var speed,weight,thickness
function setup() {
  createCanvas(1600,400);  
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(30,120, 40, 5);
 bullet.shapeColor=color(255,255,255);
 
}

function draw() {
 background(0);
 bullet.velocityX=20;
thickness=random(22,83);
  wall=createSprite(1200,180,thickness,200);
  wall.shapeColor=color(80,80,80);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.7*weight*speed*speed/(thickness*thickness)
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
  
}
function hasCollided (Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>wallLeftEdge){
return true;
  }
  else{
    return false;
  }
}