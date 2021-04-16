class Iron {

 constructor(x,y){
      var options = {
       'restitution' : 0.8,
       'friction':9,
        'density':30
      };
    
      this.body = Bodies.rectangle(x,y,100,20,options)

      this.width = 70
      this.height = 70
       World.add(world,this.body)

}
 display(){

  var pos = this.body.position
  var angle = this.body.angle
  rectMode(CENTER)
  push();
  fill("black")
  rect(this.body.position.x,this.body.position.y,this.width,this.height)
  pop();

 }




}