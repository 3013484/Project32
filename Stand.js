class Stand{
  constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
}


/*class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/polygon.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
      }
    }
  }*/
  