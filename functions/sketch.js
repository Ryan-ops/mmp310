/*
	setting sketch
	2.3.2020
*/

var jak;
var daxter;
var island;
var park;

function preload() {
	jak = loadImage('jak3.png');
	daxter = loadImage('daxter1.png');
	islandImage = loadImage('house-copy-1.gif');
	park = loadImage('park.gif');
}

// location variables
var jakX = 90;
var jakY = 200;

var daxterX = 400;
var daxterY = 100;

var story = "Jak and Daxter are on the beach";

// beach, ocean, island
var currentSetting = "beach";

function setup() {
	createCanvas(windowWidth, windowHeight);
	jakY = height * 2/3;
	daxterY = height * 2/3;
}

function draw() {

	// conditional statement
    if(currentSetting == "beach"){
        beach();
    
    }else if (currentSetting == "ocean") {
        ocean();
    
    
    }else if (currentSetting == "island") {
        island();
    
    }else if (currentSetting == "ending"){
        beach();
    
    }

	

	// draw characters
	imageMode(CENTER);
	image(jak, jakX, jakY);
	image(daxter, daxterX, daxterY);

	// narration
	fill('black');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);

	// instructions
	textSize(18);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}




function beach(){

		background('lightblue');

		fill('SANDYBROWN');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);
	} 


    
    
    
function ocean(){
    background('lightblue');

//		fill('darkblue');
		noStroke();
//		rect(0, height * 2/3, width, height * 1/3);

		// fish
//		image(fish, 500, height - 100);
        imageMode(CENTER);
		image(park, width/2, height * 2/3);



}

function island(){
    background('lightblue');

//		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

		// island
		imageMode(CENTER);
		image(islandImage, width/2, height * 2/3);


}


function mousePressed() {
	// change scene 
	// scene order: beach, ocean, island
	if (currentSetting == "beach") {

		// change setting
		currentSetting = "ocean";

		// update story
		story = "After the beach Jak and Daxter went for walk in the park.";

		// update characters position
		jakX = 90;
		daxterX = 200;

	} else if (currentSetting == "ocean") {
		currentSetting = "island";
		story = "After a long day, Jak and Daxter went home";

		daxterX = 300;

	} else if (currentSetting == "island") {
		currentSetting = "beach";
		story = "Once upon a time, there were two characters named Jak and Daxter.";

		jakX = 100;
		daxterX = 300;
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

			// update story
			story = "Jak and Daxter went for a walk in the park";

			// update characters position
			jakX = 100;
			daxterX = 200;

		} else if (currentSetting == "ocean") {
			currentSetting = "island";
			story = "After a long day Jak and Daxter went home.";

			daxterX = 400;

		} else if (currentSetting == "island") {
			currentSetting = "beach";
			story = "Once upon a time, there were two characters named Jenny and Jerry.";

			jakX = 100;
			daxterX = 300;
		}
	}
}



