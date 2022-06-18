var box1;
function setup() {
  createCanvas(400,400);

 box1=createSprite(200,200,10,10);
}

function draw() 
{
  background("yellow");
  console.log("harshita");

  if(keyIsDown(RIGHT_ARROW)){
    box1.position.x=box1.position.x+1;
  }
  if(keyIsDown(LEFT_ARROW)){
    box1.position.x=box1.position.x-1;
  }
  if(keyIsDown(UP_ARROW)){
    box1.position.y=box1.position.y-1;
  }
  if(keyIsDown(DOWN_ARROW)){
    box1.position.y=box1.position.y+1;
  }

  drawSprites();
}




