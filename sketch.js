
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1= new Mango(340,340);
	mango2= new Mango(810,260);
	mango3= new Mango(810,349);
	mango4= new Mango(860,240);
	mango5= new Mango(810,340);
	mango6= new Mango(880,280);
	mango7= new Mango(510,610);
    mango8= new Mango(880,220);
	ground= new Ground(600,790,1200,25);
	stone=new Stone(200,50);
    boy1 = new Boy(stone.body,{x:240, y:570});
    
    m1=new Tree(mango1.body,{x:810, y:480});
    m2=new Tree(mango2.body,{x:830, y:440});
    m3=new Tree(mango3.body,{x:590, y:510});
    m4=new Tree(mango4.body,{x:640, y:560});
    m5=new Tree(mango5.body,{x:690, y:530});
    m6=new Tree(mango6.body,{x:750, y:460});
    m7=new Tree(mango7.body,{x:780, y:410});
    m8=new Tree(mango8.body,{x:730, y:540});

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background("white");

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  ground.display();

  boy1.display();

  stone.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();



  drawSprites();

	
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy1.fly();
}

function keyPressed(){

if(keyCode===32){
    boy1.attach(stone.body);
}

}

function detectCollision1(stone,mango1){

    mango1Pos=mango1.body.position
    stonePos=stone.body.position

    var distance=dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y)

    if(distance<=mango1Pos.x-stonePos.x<mango1Pos.width/2+stonePos.width/2&&
        mango1Pos.y-stonePos.y<mango1Pos.height/2+stonePos.height/2&&
        stonePos.x-mango1Pos.x <mango1Pos.width/2+stonePos.width/2&&
        stonePos.y-mango1Pos.y<mango1Pos.height/2+stonePos.height/2
        )
        {
            Matter.body,setStatic(mango1.body,false)
        }
    

}

function detectCollision4(stone,mango4){

    mango4Pos=mango4.body.position
    stone4Pos=stone.body.position

    var distance2=dist(stone.body.position.x,stone.body.position.y,mango4.body.position.x,mango4.body.position.y)

    if(distance<=mango4Pos.x-stone4Pos.x<mango4Pos.width/2+stone4Pos.width/2&&
        mango4Pos.y-stone4Pos.y<mango4Pos.height/2+stone4Pos.height/2&&
        stone4Pos.x-mango4Pos.x <mango4Pos.width/2+stone4Pos.width/2&&
        stone4Pos.y-mango4Pos.y<mango4Pos.height/2+stone4Pos.height/2
        )
        {
            Matter.body,setStatic(mango1.body,false)
        }
    

}