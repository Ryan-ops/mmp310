/* 
setting sketch
2.3.2020

*/

var jak;
var daxter;
var park;

function preload(){
	jak = loadImage('Jak.png');
	daxter = loadImage('Daxter.png');
	park =  loadImage("park1.gif");
}


// Location variables
var JakX = 100;
var JakY = 200;

var DaxterX = 500;
var DaxterY = 510;

var story = "Once upon a time, there were two characters named Jak and Daxter";
// beach, ocean, island
var currentSetting = "beach";

function setup(){
	createCanvas(windowWidth, windowHeight);

}



function draw(){
	//  Conditional statement
	if (currentSetting == "beach"){
		background ('lightblue');

		fill('SANDYBROWN');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

// ocean setting
	}else if (currentSetting == "ocean") {
		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);


	}
	// park setting
	else if (currentSetting == "park"){
		background('lightblue');

		fill('darkblue');
		noStroke();
		rect(0, height * 2/3, width, height * 1/3);

	}

	// draw characters
	image(jak, JakX, JakY);
	image(daxter, DaxterX, DaxterY);

		// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}

