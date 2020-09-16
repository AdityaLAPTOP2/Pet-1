//Create variables here
var dog, happyDog, database, foodS, foodStock=0;
function preload()
{
  var a = loadImage("images/dogImg.png")
  var b = loadImage("images/dogImg1.png")
  var c = loadImage("images/l.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  
  database=firebase.database();
  var dog=createSprite(180,200,20,60);
foodStock=database.ref('food');
foodStock.on("value",readStock)


}


function draw() {  
  background("white");
if(keyWentDown(UP_ARROW)){
 foodS=foodS-1;
}
  drawSprites();
  //add styles here
  textSize(35);
  fill("black");
  text("wow"+foodS,400,400)
drawSprites();
  
}
function readStock(data){
  foodS=data.val();


}

