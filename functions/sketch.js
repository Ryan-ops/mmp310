/*
	setting sketch
	2.3.2020
*/

var jakImage;
var daxterImage;
var islandImage;
var park;

function preload() {
	jakImage = loadImage('jak3.png');
	daxterImage = loadImage('daxter1.png');
	islandImage = loadImage('house-copy-1.gif');
	park = loadImage('park.gif');
}

// location variables


// beach, ocean, island
var currentSetting = "beach";

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
}

function draw() {

	// conditional statement
    if(currentSetting == "beach"){
        beach();
		jak(100, height * 2/3);
		daxter(300, height * 2/3);
		narration("Once upon a time, there were two characters named Jak and Daxter.");
        
    
    }else if (currentSetting == "ocean") {
       ocean();
		jak(400, height * 2/3);
		daxter(500, height * 2/3);
		narration("Jak and Daxter decided to swim across the ocean.");
    
    
    }else if (currentSetting == "island") {
        island();
		jak(400, height * 2/3);
		daxter(600, height * 2/3);
		narration("Jak and Daxter arrived at an island in the middle of the ocean.");
    
    }else if (currentSetting == "ending"){
        beach();
		jak(width - 100, height * 2/3);
		daxter(width - 200, height * 2/3);
		narration("The end.");
    
    }

	instructions();
}

/*character function*/
function jak(x, y){
    image(jakImage, x, y);


}

function daxter(x, y){
    image(daxterImage, x, y);

}

/*narration function*/
function narration(story) {
    fill('black');
    textSize(30);
    textAlign(CENTER, CENTER);
    text(story, width/4,20, width/2);


}

function instructions() {
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}



/* settings functions */
function beach() {
	background('lightblue');
	fill('SANDYBROWN');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
}

function ocean() {
	background('lightblue');

	// water
//	fill('darkblue');
	noStroke();
//	rect(0, height * 2/3, width, height * 1/3);

	image(park, width/2 , height * 2/3);
}

function island() {
	background('lightblue');

	// water
//	fill('darkblue');
	noStroke();
	

	// island
	image(islandImage, width/2, height * 2/3);
}

function mousePressed() {
	// change scene 
	// scene order: beach, ocean, island
	if (currentSetting == "beach") {
		currentSetting = "ocean";
	} else if (currentSetting == "ocean") {
		currentSetting = "island";
	} else if (currentSetting == "island") {
		currentSetting = "ending";
	} else if (currentSetting == "ending") {
		currentSetting = "beach";
	}
}

function keyPressed() {
	// test the keycode 
	if (keyCode == 39) {
		// change scene 
		// scene order: beach, ocean, island
		if (currentSetting == "beach") {
			// change setting
			currentSetting = "ocean";
		} else if (currentSetting == "ocean") {
			currentSetting = "island";
		} else if (currentSetting == "island") {
			currentSetting = "beach";
		}
	}
}








