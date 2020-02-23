/*
	setting sketch
	2.3.2020
*/

var jakImage;
var daxterImage;
var houseImage;
var park;

function preload() {
	jakImage = loadImage('jak3.png');
	daxterImage = loadImage('daxter1.png');
	houseImage = loadImage('house-copy-1.gif');
	parkImage = loadImage('park.gif');
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
		jak(200, height * 2/3);
		daxter(700, height * 2/3);
		narration("The adventures of Jak and Daxter.Jak and Daxter are at the beach having a good time");
        
    
    }else if (currentSetting == "park") {
       park();
		jak(500, height * 2/3);
		daxter(200, height * 2/3);
		narration("After the Jak and Daxter when to park for a walk");
    
    
    }else if (currentSetting == "house") {
        house();
		jak(250, height * 2/3);
		daxter(700, height * 2/3);
		narration("Later Jak and Daxter went home. ");
    
    }else if (currentSetting == "ending"){
        house();
//		jak(width - 100, height * 2/3);
//		daxter(width - 200, height * 2/3);
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
    fill(299,255,0);
	circle(80, 60, 200);
    fill(255, 255, 255);
	rect(500, 300, 60, 200);
	rect(300, 300, 60, 300);
	rect(200, 300, 60, 200);
	rect(600, 300, 60, 200);
    fill(133, 113, 222);
	circle(600, 480, 50);
	fill('SANDYBROWN');
	noStroke();
	rect(0, height * 2/3, width, height * 1/3);
    
}

function park() {
	background('lightblue');

	// water
//	fill('darkblue');
	noStroke();
//	rect(0, height * 2/3, width, height * 1/3);

	image(parkImage, width/2 , height * 2/3);
}

function house() {
	background('lightblue');

	// water
//	fill('darkblue');
	noStroke();
	

	// island
	image(houseImage, width/2, height * 2/3);
}


function mousePressed() {
	// change scene 
	// scene order: beach, ocean, island
	if (currentSetting == "beach") {
		currentSetting = "park";
	} else if (currentSetting == "park") {
		currentSetting = "house";
	} else if (currentSetting == "house") {
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
			currentSetting = "park";
		} else if (currentSetting == "park") {
			currentSetting = "house";
		} else if (currentSetting == "house") {
			currentSetting = "beach";
		}
	}
}








