var parkImage, daxterImage, jakImage, daxImage;

function preload() {
	daxterImage = loadImage('Daxter.png');
	jakImage = loadImage('jak3.png');
	daxImage = loadImage('daxter1.png');
    parkImage = loadImage('park.gif');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    setting();
}

function mousePressed() {
	setting();
}


function setting() {
	// background
	
    
    imageMode(CENTER);
		image(parkImage, width/2, height * 2/3);

	// images
	

for (let x = -50; x <= width; x += 200) {
		let y = random(height/2);
		let offset = random(-90, 150);
		image(daxterImage, x + offset, y);
}


	
	for (let x = 100; x <= width; x += 400) {
		image(jakImage, random(width), height/2 - 150 + x/20);}
    

	// 
	for (let x = -50; x <= width; x += 100) {
		image(daxImage, x, height - random(100));


	}

}