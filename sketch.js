var gameState = "START"
var alienPos
var rightBtn,leftBtn,shootBtn
var rightImg,leftImg,shootImg
var player
var Pstartx,Pstarty, Pangle=0, Pincrement=5, Pradius=150;
var Astartx,Astarty, Aangle=0, Aincrement=5, Aradius=200; 
var planet,planetImg
var bg 
var startbtn
var bullet,bulletGroup,bulletImg
var player,playerImg
var alien,alienImg
var edges;

var form
var resetBtn
function preload(){
rightImg = loadImage("assets/right.png")
leftImg = loadImage("assets/left.png")
shootImg = loadImage("assets/shootBtn.png")
    planetImg = loadImage("assets/plant.gif")
    playerImg = loadImage("assets/space_ship0.png")
    bg = loadImage("assets/spaceBG0.png")
    alienImg = loadImage("assets/alien_ship0.png")
   bulletImg = loadImage("assets/bullet.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)
    
  form = new Form()
  form.display()
    planet = createImg("assets/plant.gif")
    planet.position(width/2-80,height/2-80)
    planet.size (150,150)
    
  //  form = new Form()
 
bulletGroup = new Group()
    player = createSprite(width/2,height/2+200)
    player.addImage(playerImg)
    player.scale = 0.4
    player.visible = false 

  
    //startbtn.mousePressed(gameState = "PLAY")

    alien = createSprite(width/2,80)
    alien.addImage(alienImg)
    alien.scale = 0.3
    alien.visible = false

     


    Pstartx=width/2;
     Pstarty=height/2;
    Astartx=width/2;
     Astarty=height/2;
    edges = createEdgeSprites()
}


function draw(){
background(bg)

if (gameState=="START"){


}

if (gameState == "PLAY"){
      
        player.bounceOff(edges)
        player.visible = true
        alien.visible = true
        //player movement
   Pmovement()
      //alien movement
Amovement()


  Ashoot()

      if(keyDown("space") || mousePressedOver(shootBtn))
      {
        Pshoot(Pangle,player)
      }
    
      if(earthCollide()){
        gameState="END"
        gameOver()
        }
}


drawSprites();
}
function Ashoot(angle,sprite){
  if(World.frameCount%200===0){
  var Abullet = createSprite(sprite.x,sprite.y,10,10)
  Abullet.addImage(bulletImg)
   var newAngle = angle; 
    console.log(newAngle)
   newAngle = newAngle *(3.14/180)
  var velocity = p5.Vector.fromAngle(newAngle);
  velocity.mult(0.5);
  var x = velocity.x*(180/3.14);
  var y = velocity.y* (180/3.14);
  Abullet.setVelocity(x,y);
  console.log(velocity)
  }
  }
function Pshoot(angle,sprite){
  
  var Pbullet = createSprite(sprite.x,sprite.y,10,10)
  Pbullet.addImage(bulletImg)
   var newAngle = angle; 
    console.log(newAngle)
   newAngle = newAngle *(3.14/180)
  var velocity = p5.Vector.fromAngle(newAngle);
  velocity.mult(0.5);
  var x = velocity.x*(180/3.14);
  var y = velocity.y* (180/3.14);
  Pbullet.setVelocity(x,y);
  console.log(velocity)
  
  }



function earthCollide()
{
  if(planet!=null)
        {
         var d = dist(planet.position.x,planet.position.y,bullet.x,bullet.y);
          if(d<=80)
            {
              
               bullet.remove()
               return true; 
            }
            else{
              return false;
            }
         }
}
 function Pmovement(){
  if(keyDown("left") || mousePressedOver(leftBtn)){
      Pangle=Pangle-Pincrement;
      player.x=Pstartx+Pradius*Math.cos(Pangle * Math.PI/180);
      player.y=Pstarty+Pradius*Math.sin(Pangle * Math.PI/180);
    player.rotation=90+Pangle;
    }
    if(keyDown("right"  ) || mousePressedOver(rightBtn)){
      Pangle=Pangle+Pincrement;
      player.x=Pstartx+Pradius*Math.cos(Pangle * Math.PI/180);
      player.y=Pstarty+Pradius*Math.sin(Pangle * Math.PI/180);
    player.rotation=90+Pangle;
    }
}
function Amovement(){
  Aangle=Aangle-3;
  alien.x=Astartx+350*Math.cos(Aangle * Math.PI/180);
  alien.y=Astarty+250*Math.sin(Aangle * Math.PI/180);
  alien.rotation=90+Aangle;
}


function gameOver(){
swal({
  title: `Game Over!!!`,
  text: "Thanks for playing!!",
  imageUrl:
    "https://toppng.com/uploads/preview/lisa-simpson-loser-11562887825yktmx9edpp.png",
  imageSize: "150x150",
  confirmButtonText: "Play Again"
})

}
function gameWin(){
  swal({
    title: `You Won`,
    text: "Thanks for playing!!",
    imageUrl:
      "https://www.seekpng.com/png/full/169-1699685_transparent-well-done-png.png",
    imageSize: "150x150",
    confirmButtonText: "Play Again"
  })
}