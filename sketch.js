const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var backgroundImg,platform;
var slingShot;
var polygon_img;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  box1 = new box(300,275,30,40);
  console.log(box1);
  box2 = new box(330,275,30,40);
  box3 = new box(360,275,30,40);
  box4 = new box(390,275,30,40);
  box5 = new box(420,275,30,40);
  box6 = new box(450,275,30,40);
  box7 = new box(480,275,30,40);
  //level two
  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10 = new box(390,235,30,40);
  box11 = new box(420,235,30,40);
  box12 = new box(450,235,30,40);
  //level three
  box13 = new box(360,195,30,40);
  box14 = new box(390,195,30,40);
  box15 = new box(420,195,30,40);
  //top
  box16 = new box(390,155,30,40);

  //set 2 for second stand
  //level one
  boxes1 = new box(640,175,30,40);
  boxes2 = new box(670,175,30,40);
  boxes3 = new box(700,175,30,40);
  boxes4 = new box(730,175,30,40);
  boxes5 = new box(760,175,30,40);
  //level two
  boxes6 = new (670,135,30,40);
  boxes7 = new box(700,135,30,40);
  boxes8 = new box(730,135,30,40);
  //top
  boxes9 = new box(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(35);
        fill("white");
        text("SCORE:" + score, 750,40);
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the boxes",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink");

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");

  box13.display();
  box14.display();
  box15.display();
  fill("grey");

  box16.display();
  fill("skyblue");

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  fill("turquoise");

  boxes6.display();
  boxes7.display();
  boxes8.display();
  fill("pink");

  boxes9.display();
  fill("gold");

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  boxes1.score();
  boxes2.score();
  boxes3.score();
  boxes4.score();
  boxes5.score();
  boxes6.score();
  boxes7.score();
  boxes8.score();
  boxes9.score();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13); 

  if(hour >= 06 && hour <= 18){
      bg = "sprites/bg1.png";
  }
  else {
      bg = "sprites/bg2.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}