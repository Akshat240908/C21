var fixedRect,movingRect; 

function setup() { 

  createCanvas(1200,800); 

  fixedRect=createSprite(400,200,60,80); 
  fixedRect.shapeColor="green"; 
  fixedRect.velocityX = 5;

  movingRect=createSprite(600,200,40,60); 
  movingRect.shapeColor="green"; 
  movingRect.velocityX = -5;
} 
  
  function draw() { 
    background(255,255,255) 

    BounceOff(movingRect,fixedRect);
     

   
  
    drawSprites(); 
  }

  function BounceOff(Squareobject,Funnyobject){
    if(Squareobject.x-Funnyobject.x<Funnyobject.width/2+Squareobject.width/2 
      &&Funnyobject.x-Squareobject.x<Funnyobject.width/2+Squareobject.width/2) {
        Squareobject.velocityX = Squareobject.velocityX * (-1);
        Funnyobject.velocityX = Funnyobject.velocityX * (-1);
      } 
    if(Squareobject.y-Funnyobject.y<Funnyobject.width/2+Squareobject.width/2 
      &&Funnyobject.y-Squareobject.y<Funnyobject.width/2+Squareobject.width/2){ 
        Squareobject.velocityY = Squareobject.velocityY * (-1);
        Funnyobject.velocityY = Funnyobject.velocityY * (-1);
    
  
  }
}