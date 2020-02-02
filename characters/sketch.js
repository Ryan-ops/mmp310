/* 
characters sketch
1.27.2020

*/
// loading graphics
var jak;
var daxter;
/*
runs before setup
when preload is done,
setup gets called 
*/
function preload(){
	jak = loadImage('Jak.png');
	daxter = loadImage('Daxter.png');
}


// Location variables
var JakX = 100;
var JakY = 200;

var DaxterX = 500;
var DaxterY = 510;

var story = "Once upon a time, they were two  ";
// run once to setup the browser
function setup(){
	createCanvas(windowWidth, windowHeight);

}



// runs 60fps draws graphics
function draw(){
	background ('lightblue');

	// draw characters
	image(jak, JakX, JakY);
	image(daxter, DaxterX, DaxterY);

		// narration
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/4, 20, width/2);
}

