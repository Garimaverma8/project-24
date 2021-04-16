class Ground{
  
  constructor(x,y){
  var options = {
         isStatic: true, 
      };

        this.body = Bodies.rectangle(x,y,1000,10,options)
        this.width = 1000
        this.height = 5

     World.add(world,this.body)

    }
  display(){
  
      var pos = this.body.position
      rectMode(CENTER)
      push();
      fill("brown")
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      pop();
   }



}