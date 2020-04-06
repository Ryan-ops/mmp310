var parkImage, boneImage, jakImage, daxImage;

function preload() {
	boneImage = loadImage('bone.png');
	jakImage = loadImage('jak3.png');
	daxImage = loadImage('daxter1.png');
    parkImage = loadImage('park.gif');
}


//gobal values
var bones = [];
var numBones = 4;

var jak = [];
var numJak = 1;

var dax = [];
var numDax = 7;

var bonesMinSpeed = 2;
var bonesMaxSpeed = 4;
var bonesSpeedSlider;


var daxMinSpeed = 2;
var daxMaxSpeed = 4;
var daxSpeedSlider;

var jakY;
var jakSlider;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
    
    jakY = height/2;

	// create our things

	for (let i = 0; i < numBones; i++) {
		let x = random(width);
		let y = random(height/2);
		let bone = new Bone(x, y, boneImage);
		bones.push(bone);
	}

	for (let i = 0; i < numJak; i++) {
		let x = random(width);
		let y = random(height/3, height/2);
		let j = new Thing(x, y, jakImage);
		jak.push(j);
	}

	for (let i = 0; i < numDax; i++) {
		let x = random(width);
		let y = random(height * 1/3, height);
		let d = new Dax(x, y, daxImage);
		dax.push(d);
	}
    
//    var hueLabel = createElement("label", "Change the sky");
//	hueLabel.position(10, 10);
//
//	// user interface
//	hueSlider = createSlider(10, jakHue, jakHue);
//	hueSlider.position(10, 30);
//	hueSlider.input(updateHue);
    
    var bonesSpeedLabel = createElement("label", "Change bone speed");
	bonesSpeedLabel.position(10, 10);

	bonesSpeedSlider = createSlider(1, 10, bonesMinSpeed);
	bonesSpeedSlider.position(10, 30);
	bonesSpeedSlider.input(updateBonesSpeed);


	var daxSpeedLabel = createElement("label", "Change Daxter's speed");
	daxSpeedLabel.position(180, 10);

	daxSpeedSlider = createSlider(1, 10, daxMinSpeed);
	daxSpeedSlider.position(180, 30);
	daxSpeedSlider.input(updateDaxSpeed);

	

	var jakLabel = createElement("label", "Jak");
	jakLabel.position(360, 10);

	jakSlider = createSlider(100, jakY, jakY);
	jakSlider.position(360, 30);
	jakSlider.input(updateJak);
    
//    function updateHue() {
//	jakHue = hueSlider.value();
//}
      function updateBonesSpeed() {
	bonesMinSpeed = bonesSpeedSlider.value();
	bonesMaxSpeed = bonesMinSpeed * 2;
          for (let i = 0; i < numBones; i++) {
		bones[i].xSpeed = random(bonesMinSpeed, bonesMaxSpeed);
	}
      
      }
    
    function updateDaxSpeed() {
	daxMinSpeed = daxSpeedSlider.value();
	daxMaxSpeed = daxMinSpeed * 2;

	for (let i = 0; i < numDax; i++) {
		dax[i].xSpeed = random(daxMinSpeed, daxMaxSpeed);
	}
}


function updateJak() {
	jakY = jakSlider.value();

	for (let i = 0; i < numJak; i++) {
		jak[i].y = random(height/2, jakY);
	}

}
}

function draw() {
	 imageMode(CENTER);
  image(parkImage, width/2 , height * 2/3);


	// draw jak
	for (let i = 0; i < numJak; i++) {
		jak[i].draw();
	}

	// draw dax
	for (let i = 0; i < numDax; i++) {
		dax[i].draw();
		dax[i].update();
	}

	// draw bones
	for (let i = 0; i < numBones; i++) {
		bones[i].draw();
		bones[i].update();
	}
}