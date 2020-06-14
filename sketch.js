var car;
var carImg;
var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;
var gameOver,restart;
var form;
var ground;
var bullet;
var score;
var canvs, backgroundImg;
var button;
var obstacleGroup,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;



function preload(){
   backgroundImg = loadImage("sprites/track.jpg");
   carImg = loadImage("sprites/car.png");
   obstacle1 = loadImage("sprites/obstacle1.png");
   obstacle2 = loadImage("sprites/obstacle2.png");
   obstacle3 = loadImage("sprites/obstacle3.png");
   
   
   // ground = loadImage("track.png");
   
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    track = createSprite(windowWidth/2,windowHeight/2,50,50);
    track.addImage("track",backgroundImg)
    image(backgroundImg, 0,-windowHeight*4,windowWidth, windowHeight*5);
    track.velocityY = -4;
    form = new Form();

    car = createSprite(windowWidth/2,windowHeight/2,50,50);
    car.addImage("car",carImg,10,10);
    car.scale = 0.1
    //car.debug = true;
    car.setCollider("circle",0,0,400)

   


    //gameOver = createSprite(windowWidth/2,windowHeight/2,100,100);
    //gameOver.visible = false;
    //restart = createSprite(windowWidth/2,windowHeight/4,100,100);
    //restart.visible = false;
    


    obstacleGroup = new Group();
    
   // button = createButton('Click To Play');
    //button.position(windowWidth/2,windowHeight/2,20,20);
   // button.mousePressed(gameState === PLAY);

}
function draw(){
    background(101,101,101);
    text("Score:"+ score,windowWidth/1,windowHeight/2)
    
    if(track.y < 0){
        track.y = track.height/2
    }
   if(gameState === SERVE){
        form = new Form();
        form.display();
        gameState = 1;
    }
   
  else if(gameState === PLAY){
       
       score = score + Math.round(getFrameRate()/60);
      car.x = mouseX;
      //createBullet(player.x);
      spawnObstacle();
      if(obstacleGroup.isTouching(car)){
       gameState = END;
       textSize(20);
       text("YOU LOSE",windowWidth/2,windowHeight/2)
      }
    }
    else if(gameState === END){
      
     }

  drawSprites();
}
function spawnObstacle(){
    if(frameCount % 50 === 0){
        var obstacle = createSprite(windowWidth/2,100,10,10);
        //obstacle.debug = true;
        obstacle.velocityY = 4;

        obstacle.x = random(400,windowWidth-400);
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1 : obstacle.addImage("obstacle",obstacle1);
            break;
            case 2 : obstacle.addImage("obstacle",obstacle2);
            break;
            case 3 : obstacle.addImage("obstacle",obstacle3);
            break;
            default : break;
        }
        obstacle.scale = 0.1;
        console.log(obstacle.y);
        obstacle.setCollider("circle",0,0,400);
        car.depth = obstacle.depth;
        car.depth = car.depth + 1;

        
        obstacleGroup.add(obstacle);
        //obstacle.lifetime = 300;
    }
    
}