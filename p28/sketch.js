const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stone, chain;
var boy;
var ground;
var tree;
var m1, m2, m3, m4, m5;
var m6, m7, m8, m9, m10;

function preload(){
    boy = loadImage("sprites/boy.png");
}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    tree = new Tree();
    stone = new Stone(300,500,30);
    ground = new Ground();
    chain = new Slingshot(stone.body, {x:190,y:390});
    m1 = new Mango(820,120);
    m2 = new Mango(920,100);
    m3 = new Mango(620,220);
    m4 = new Mango(720,200);
    m5 = new Mango(820,210);
    m6 = new Mango(920,190);
    m7 = new Mango(1020,180);
    m8 = new Mango(1120,190);
    m9 = new Mango(770,270);
    m10 = new Mango(970,270);
}

function draw(){
    background(200);
    Engine.update(engine);
    ground.display();
    tree.display();
    image(boy, 150, 280, 200,400);
    chain.display();
    stone.display();

    m1.display();
    m2.display();
    m3.display();
    m4.display();
    m5.display();
    m6.display();
    m7.display();
    m8.display();
    m9.display();
    m10.display();

    detectCollision(stone, m1);
    detectCollision(stone, m2);
    detectCollision(stone, m3);
    detectCollision(stone, m4);
    detectCollision(stone, m5);
    detectCollision(stone, m6);
    detectCollision(stone, m7);
    detectCollision(stone, m8);
    detectCollision(stone, m9);
    detectCollision(stone, m10);
    
}

function detectCollision(stone, mango){
    var pointA = stone.body.position;
    var pointB = mango.body.position;
    var distance = dist(pointA.x, pointA.y, pointB.x, pointB.y);
    var radius_dist = stone.radius/2 + mango.radius/2;
    //console.log(distance, radius_dist);
    if(distance<=radius_dist){
        console.log("inside");
        Body.setStatic(mango.body, false);
    }
}

function mouseDragged(){
    Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    Body.setPosition(stone.body, {x:300, y:300});
    chain.attach(stone.body);
}