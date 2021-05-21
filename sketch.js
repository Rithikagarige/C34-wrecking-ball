const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,160,70,70);
    box3=new Box(700,240,70,70);
    box4=new Box(810,240,70,70);
    box5= new Box(810,160,70,70);
    box6=new Box(900,240,70,70);
    box7=new Box(900,320,70,70);
    box8=new Box(900,160,70,70);
    box9=new Box(810,90,70,70);
    box10=new Box(810,320,70,70);
    box11=new Box(900,90,70,70);
    box12=new Box(700,90,70,70);
    
    ball=new Ball(200,200,40);
    ground = new Ground(600,height,1200,20);
    rope=new SlingShot(ball.body,{x:600,y:50});
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ground.display();
    ball.display();
    rope.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}