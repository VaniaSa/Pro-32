const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

var bgimage, bg;

var score = 0

function preload(){
  defaultbg= loadImage("bg.png")
  getbgimage();
}

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  //BlockBlue7 = new Box(320, 182, 20, 20);

  //second level
  BlockBlue0 = new Box(201, 172, 20, 20);

  BlockPink2 = new BoxPink(220, 172, 20, 20);

  BlockPink3 = new BoxPink(240, 172, 20, 20);

  BlockPink4 = new BoxPink(260, 172, 20, 20);

  //BlockPink5 = new BoxPink(280, 2, 20, 20);

  //BlockPink6 = new BoxPink(300, 2, 20, 20);

  //BlockPink7 = new BoxPink(320, 2, 20, 20);

  BlockPink8 = new BoxPink(240, 162, 20, 20);
  //third level
  BlockBlue8  = new Box(202, 182, 20, 20);

  BlockBlue9  = new Box(220, 182, 20, 20);

  BlockBlue10 = new Box(240, 182, 20, 20);

  BlockBlue11 = new Box(260, 182, 20, 20);

  BlockBlue12 = new Box(280, 182, 20, 20);

  //BlockBlue13 = new Box(300, 182, 20, 20);

  //BlockBlue14 = new Box(320, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  ground_2 = new Ground(0,380,800,30);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  if(bgimage){
  background(bgimage);
  }
  else{
    background(defaultbg);
  }
  ground1.display();

  ground_2.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue0.display();

  BlockPink2.display();

  BlockPink3.display();

  BlockPink4.display();

  BlockPink8.display();

  BlockBlue8.display();

  BlockBlue9.display();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  polygon_1.display();

  BlockBlue1.score();

  BlockBlue2.score();

  BlockBlue3.score();

  BlockBlue4.score();

  BlockBlue5.score();

  BlockBlue6.score();

  BlockBlue0.score();

  BlockPink2.score();

  BlockPink3.score();

  BlockPink4.score();

  BlockPink8.score();

  BlockBlue8.score();

  BlockBlue9.score();

  BlockBlue10.score();

  BlockBlue11.score();

  BlockBlue12.score();

  text("SCORE: "+score,700, 40);

  keyPressed();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    SlingShot.attach(polygon1)
  }
}

async function getbgimage()
{
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var resjson = await response.json();
console.log(resjson);
console.log(resjson.datetime);

var datetime = resjson.datetime;
var hour = datetime.slice(11,13);
console.log(hour);
if(hour>=06 && hour<=19)
{
  //daytime
  bg = "bg.png";
}
else
{
  //nighttime
  bg = "bg2.jpg";
}
 bgimage = loadImage(bg)
}