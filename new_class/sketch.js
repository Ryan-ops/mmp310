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


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

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
		let y = random(height * 2/3, height);
		let d = new Dax(x, y, daxImage);
		dax.push(d);
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