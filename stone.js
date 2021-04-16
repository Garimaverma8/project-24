class Stone{

constructor(x,y){
  var options = {

   'restitution': 0.9,
   'friction': 5,
   'density': 0.1

   };

   this.body = Bodies.rectangle(x,y,20,20,options);

   this.width = 45
   this.height = 35
    World.add(world,this.body);

  }

 
  
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    rectMode(CENTER)
    push();
    fill("darkred")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
  }
  
 
}