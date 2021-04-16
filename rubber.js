class Rubber{

    constructor(x,y){

      var options = {

      'restitution':0.3,
      'friction':5,
      'density' :0.1
     
     
     }

     this.body = Bodies.circle(x,y,20,options);
     this.r = 25;
     
     
     World.add(world,this.body);

    }
     

    display(){
        var pos = this.body.position
        var angle = this.body.angle
       
        push();
        ellipseMode(RADIUS)
        fill("darkblue")
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
        pop();

    }

}