var particleSystem;
var boxSize = 250;

var amp;
let music;
var stewie = []; // list of stewie sounds
var jumps = []; // list of jump sound fx

function preload() {
	music = loadSound('soundtrack.mp3');

	stewie.push(loadSound("s1.mp3"));
	stewie.push(loadSound("s2.mp3"));
//	meows.push(loadSound("s1.mp3"));

	jumps.push(loadSound("Jump 34.wav"));

}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	particleSystem = new System(createVector(0, 0, 0));
   
	amp = new p5.Amplitude();
	amp.setInput(music);
    music.loop();
//    background(0,255,0);
}

function keyPressed() {
	if (keyCode == 32) { // Space bar
		if (music.isPlaying()) {
			music.pause();
//            background(255,0,0);
           
		} else {
			music.play();
            background(0,0,255);
		}
	}

	if (keyCode == 13) { // Enter
		particleSystem.add();
	}
}







function draw() {
	background(255,0,0);

	// drag to rotate up and down, scroll to zoom in and out
	orbitControl();

	var level = amp.getLevel();
	boxSize = map(level, 0, 1, 250, 200);

	push();
	stroke('white');
	noFill();
	box(boxSize);
	pop();

	directionalLight(220, 220, 255, 1, 1, -1);
	pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 150);

	particleSystem.update();
}