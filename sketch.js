var car,wall;

var speed,weight;



var deformation;





function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1100,200,60,height/2)
  speed = random(55,90)
weight = random(400,1500)

//fill("red");
//text("Deformation = "+deformation,600,200);

}



function draw() 
{
  background("black");  

 
car.velocityX=speed;
 
  if(wall.x-car.x < car.width/2+wall.width/2)
    {
      car.velocityX = 0;
      car.x=1050;
      
      var deformation = (0.5 * weight * speed * speed)/22500;

      if(deformation > 100) {
        car.shapeColor=color("green");
      }
  
      if(deformation < 100 && deformation > 180){
        car.shapeColor=color("yellow");
      }
  
      if(deformation < 180){
        car.shapeColor("red");
      }
      
    }

    
  drawSprites();
}