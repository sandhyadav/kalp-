var Square ,squareImage;
var blocker, blockerImage;
var score = 0;
var ranNum = 0; 
var sqNum = 0;

function preload(){
    squareImage = loadImage("Character.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    
    Square = createSprite(windowWidth/2,windowHeight-100,100,100);
    Square.addImage(squareImage);
    Square.scale  = 1;

   spawnBlocker();
   randomnumber=createSprite(windowWidth/2,windowHeight-100,100,100);
   randomnumber.visible=false;

} 

function draw() {

    background("white");

    Square.x = World.mouseX;
    sqNum.x = World.SquareX;
    sqNum.y = World.SquareY;

    if (World.frameCount % 160 == 0){
        spawnBlocker()
    }

    
    
    
    if (Square.isTouching(blocker)){
        blocker.velocityY = 0;
        
        if(World.frameCount% 10 == 0){
            score = score + 1;
            blocker.destroy()
            
            
        }
    }


    
    fill("black");
    textSize(17.5);
    text("Score:" + score,5,25);
    text(ranNum,100,100)
    fill("black");
    textSize(17.5);
    text (sqNum ,World.squareX ,200)
 drawSprites();


}

function spawnBlocker(){
    blocker = createSprite(Math.round(random(50,windowWidth-50)),windowHeight-710,100,100);
   
    blocker.scale  = 1;
    blocker.velocityY=6;
    if(blocker.y > windowHeight + 100){
        blocker.destroy();
    }
}