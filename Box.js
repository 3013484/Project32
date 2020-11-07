class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
          super.display();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      function score(){
        if(this.visibility < 0 && this.visibility >= 105){
          score++;
        }
      }
}