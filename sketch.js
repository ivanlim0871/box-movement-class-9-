var box


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40)
}

function draw() 
{
  background(30);

  if (keyDown("right")){
   box.position.x = box.position.x+3
}
 if (keyDown("left")){
box.position.x  = box.position.x -3
 }

 if (keyDown("up")){
  box.position.y  = box.position.y -3
   }

   if (keyDown("down")){
    box.position.y  = box.position.y +3
     }
drawSprites()
}




