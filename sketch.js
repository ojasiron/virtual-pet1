var dog , happyDog,  database ,foodS,foodStock;
function preload()
{
  dog1=loadImage("images/Dog.png");
  happyDog= loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
    database = firebase.database();
   dog = createSprite(250,250);
  dog.addImage(dog1);
  dog.scale = 0.6;
  
    foodStack=database.ref('food');
    foodStack.on("value",readStock);
  
  
}

function readStock(data){
    foodS = data.val()
}
function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here
  fill("black");
  text(foodS,250,50);
  if(keyDown(UP_ARROW)&&foodS>0){
console.log("keyDown")
dog.addImage(happyDog)
foodS--;
database.ref('/').update({
    food:foodS
})
  }
  
}



