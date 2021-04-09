//Namespacing 

const Engine =Matter.Engine;   // Universe
const World =Matter.World;     // Globe
const Bodies = Matter.Bodies;  // Objects

var engine,world,ground;

var box;

function setup() {
  createCanvas(400,400);

 // box=createSprite(50,100,20,30);

 engine=Engine.create();
 world=engine.world;

 var options={

  isStatic: true
 }

 ground = Bodies.rectangle(200,390,400,20,options);
 World.add(world,ground);

console.log(ground);
console.log(ground.position.x);
console.log(ground.position.y);

// ball-> ellipse



}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  fill ("brown");
  rectMode (CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  //drawSprites();
}