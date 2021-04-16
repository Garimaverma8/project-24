class Hammer {

 constructor(x,y){
   var options = {
    'density' : 100,
    'friction': 100,
    'restitution':200 
    
   };

    this.body = Bodies.rectangle(x,y,50,50,options)
    this.width = 100
    this.height = 30

    World.add(world,this.body)

 };


 display(){

    var pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(3)
    stroke("white")
    fill("yellow")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();

    }


}