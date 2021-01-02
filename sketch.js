
var movingRect;
var object1;
var object2;
var object3; 
var object4;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 300, 25,25);
 movingRect.shapeColor="black";
 object1 = createSprite(100,300,66,66);
 object1.shapeColor="blue";
 object2 = createSprite(200,300,66,66);
 object2.shapeColor="orange";
 object3 = createSprite(300,300,66,66);
 object3.shapeColor="purple";
 object4 = createSprite(400,300,66,66);
 object4.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 

if(isTouching(movingRect,object1,object2,object3,object4)){
  object1.shapeColor="blue";
  movingRect.shapeColor="blue";
  object2.shapeColor="orange";
  movingRect.shapeColor="orange";
  object3.shapeColor="purple";
  movingRect.shapeColor="purple";
  object4.shapeColor="green";
  movingRect.shapeColor="green";
}
  else{
    object1.shapeColor="blue";
    movingRect.shapeColor="black";
    object2.shapeColor="orange";
    movingRect.shapeColor="black";
    object3.shapeColor="purple";
    movingRect.shapeColor="black";
    object4.shapeColor="green";
    movingRect.shapeColor="black";

  }
  
  movingRect.collide(object1);
  movingRect.collide(object2);
  movingRect.collide(object3);
  movingRect.collide(object4);
 
   
  drawSprites();
}
function isTouching
(o1,movingRect){
  if(o1.x-movingRect.x<movingRect.width/2+o1.width/2&&
    o1.y-movingRect.y<movingRect.height/2+o1.height/2&&
    movingRect.x-o1.x<o1.width/2+movingRect.width/2&&
   movingRect.y-o1.y<o1.height/2+movingRect.height/2)
  {
   return true;
  }
  else{
    return false;
   
  }
}