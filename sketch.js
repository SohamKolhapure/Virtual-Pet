//Create variables here
var dog, happyDog,database,foodS,foodStock, dogImg, happyDogImg;

function preload()
{
  //load images here
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.3

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  

  drawSprites();
  //add styles here

}



