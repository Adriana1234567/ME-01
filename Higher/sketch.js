var berry, berryImage, acorn, acornImg;

function preload()
{
  berryImage = loadImage("berry.png");
  acornImage = loadImage("acorn.png");
}

function setup() 
{
  createCanvas(500,700);
 
  //create the sprites
  berry = createSprite(200,200);
  berry.addImage("image", berryImage);
  berry.scale = 0.3;

  acorn = createSprite(350,200);
  acorn.addImage("image2", acornImage);
  acorn.scale = 0.3;

  //To make a picture transparent upload the image into the website removebg.com 
}

function draw() 
{
  background(51);
  
  drawSprites();
  
}
