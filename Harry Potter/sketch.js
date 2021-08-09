var bg;
var ground;
var ron, ronImage,ron1,ron2;
var chessImg1,chessImg2,chessImg3;





function preload(){
bg = loadImage("background.jpg");
ronImage = loadImage("Ron.PNG");
ron1 = loadImage("ron1.png");
chessImg1 = loadImage("Chess1.png")
}

function setup() {
    createCanvas(800,400);
    
    ground = createSprite(400, 400, 1200, 20);
    ground.shapeColor= ("black");
    ground.x = ground.width /2;
    ground.velocityX = -4;

    ron = createSprite(25,345);
    ron.addImage(ron1);
    ron.scale = 2;
    
  }
  
  function draw() {
    background(bg); 
//spawnChess(); 
    drawSprites();
  }

  function spawnChess(){
    if (frameCount %60 === 0){
    var chess = createSprite(50,345);
    chess.addImage(chessImg1);
}
  }