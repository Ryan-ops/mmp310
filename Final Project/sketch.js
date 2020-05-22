
let
music;
var dax;
var bgImage;
var houseImage;
var park;
var player;
var trees = [];
var mapX = 0;
var mapY = 0;

function preload(){
//    music = loadSound('Chad_Crouch_-_Org.mp3');
  
    dax = loadImage('daxter1.png');
    houseImage = loadImage('n5.gif');
	parkImage = loadImage('n2.gif');
    bgImage = loadImage('n1.gif');
   
    
}

var currentSetting = "home";

function setup() {
    createCanvas(windowWidth, windowHeight);
    music = loadSound('Chad_Crouch_-_Org.mp3');

    imageMode(CENTER);
  player = new Player(1000, -100);

  
  trees.push(new Tree(100, 100)); // this tree will be visible in the beginning
  
  trees.push(new Tree(500, 200)); // go right to see this one
  trees.push(new Tree(-100, 300)); // left
  trees.push(new Tree(100, -100)); // up
  trees.push(new Tree(200, 500)); // down
}

function draw() {
  background(220);
    	// conditional statement
    if(currentSetting == "home"){
        home();

		narration("The adventures of Dax.");
        
    
    }else if (currentSetting == "park") {
       park();

		narration("Dax wondered off into the city. And he passed by a local bar");
    
    
    }else if (currentSetting == "bg") {
        bg();
//	
		narration("Out of nowhere Dax's teleported into a different time period. They were castles and knights everywhere.");
    
    }else if (currentSetting == "ending"){
        home();

		narration("Later Dax teleported back home");
    
    }

	instructions();
 
  // move the canvas to the position on the map
  push();
  translate(mapX, mapY);
  
  // draw and move player
  player.draw();
  player.move();
  
  // draw trees
  for (let i = 0; i < trees.length; i++) {
    trees[i].draw();
  }
  
  // move the map view 
  if (player.x < mapX) {
     mapX -= width; 
  }
  
  if (player.x > mapX + width) {
    mapX += width;
  }
  
  if (player.y < mapY) {
     mapY -= height; 
  }
  
  if (player.y > mapY + height) {
    mapY += height;
  }
  
  pop();
  
  fill(0);
  text(mapX, 0, 10);
  text(mapY, 0, 20);
  
}
function dax(x, y){
    image(daxterImage, x, y);

}

function narration(story) {
    fill('White');
    textSize(40);
    textAlign(CENTER);
    text(story, width/2,20, width/2);


}

function instructions() {
	textSize(17);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Click to change scene and use arrow keys to move Dax", width - 120, height - 150, 100);
}

function home() {

    	background('lightblue');


	noStroke();


	image(houseImage, width/2 , height * 2/3);
    
}

function park() {
	background('lightblue');

	noStroke();


	image(parkImage, width/2 , height * 2/3);
}

function bg() {
	background('lightblue');


	noStroke();
	

	// island
	image(bgImage, width/2, height * 2/3); 
}

function mousePressed() {
	// change scene 
	// scene order: home, park, island
	if (currentSetting == "home") {
		currentSetting = "park";
	} else if (currentSetting == "park") {
		currentSetting = "bg";
	} else if (currentSetting == "bg") {
		currentSetting = "ending";
	} else if (currentSetting == "ending") {
		currentSetting = "home";
	}
}



