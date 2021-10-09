var iss,spacecraft,bg;
var issimg,sc1img,sc2img,sc3img,sc4img;
var hasDocked=false;

function preload(){
bg = loadImage("spacebg.jpg") 
issimg = loadImage("iss.png")
sc1img = loadImage("spacecraft1.png") 
sc2img = loadImage("spacecraft2.png") 
sc3img = loadImage("spacecraft3.png") 
sc4img = loadImage("spacecraft4.png") 
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  spacecraft = createSprite(250,250);
  spacecraft.addImage(sc1img)
  spacecraft.scale=0.2;

  iss = createSprite(300,100);
  iss.addImage(issimg)
  iss.scale=0.5;

 
}

function draw() {
  background(bg); 
  spacecraft.addImage(sc1img)
  if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1)

  if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(sc3img)
  spacecraft.x=spacecraft.x-2  
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(sc4img)
    spacecraft.x=spacecraft.x+2  
    }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(sc2img)
    spacecraft.x=spacecraft.x+2  
     }

  }
  if(spacecraft.y <= (iss.y+180)&& spacecraft.x <=(iss.x-10)){
  hasDocked= true
  textSize(25)
  fill ("white")
  text("Docking sucessful !",200,300)

  }
  drawSprites();
}