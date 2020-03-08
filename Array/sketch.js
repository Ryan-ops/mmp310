var parkImage, daxterImage, jakImage, daxImage;

function preload() {
	daxterImage = loadImage('Daxter.png');
	jakImage = loadImage('jak3.png');
	daxImage = loadImage('daxter1.png');
    parkImage = loadImage('park.gif');
}

var daxX = [];
var daxY = [];
var numDax = 7;

var daxterX = [];
var daxterY = [];
var numDaxter = 7;
var daxterSpeedX = [];
var daxterSpeedY = [];


var jakX = [];
var jakY = [];
var numJak = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
  
    
    //add dax positions
    let x = 350;
    for (let i = 0; i < numDax; i++){
        daxX.push(x);
        //update x, distributing number of clouds across canvas
        x += width/numDax + random(-100, 200);
        daxY.push(random(height/2));
    }
    
    let y =450;
    for(let i = 0;  i < numJak; i++){
        jakX.push(random(jakImage.width, width - jakImage.width));
        jakY.push(y);
        y+=40;
    
    
    
    }
    
    for (let i = 0; i < numDaxter; i++){
        daxterX.push(random(width));
        daxterY.push(height -daxterImage.height - random(100));
        daxterSpeedX.push(random(1,3));
        daxterSpeedY.push(random(-2,2));
        
        
    
    
    }
}



function draw(){
    imageMode(CENTER);
  image(parkImage, width/2 , height * 2/3);
    
    //Jak
    for (let i =0; i < numJak; i++){
        image(jakImage, jakX[i], jakY[i]);
    
    
    }
    
    //Daxter
      for (let i = 0; i < numDaxter; i++) {
		image(daxterImage, daxterX[i], daxterY[i]);

		// animate
		daxterX[i] += daxterSpeedX[i] + random(2);
		daxterY[i] += daxterSpeedY[i] + random(-0.5, 0.5);

		// reset daxter
		if (daxterX[i] > width) {
			daxterX[i] = -daxterImage.width;
		}

		// contain y value of daxter
		if (daxterY[i] < height * 2/3 || 
			daxterY[i] > height - daxterImage.height) {
			daxterSpeedY[i] *= -2;
		}
	}
        //dax
        
        for (let i = 0; i < numDax; i++) {
		image(daxImage, daxX[i], daxY[i]);

		// animate x
		daxX[i] += 1;
            

		// check if dax is beyond right side of canvas
		if (daxX[i] > width) {
			// reset dax back to left side
			daxX[i] = -daxImage.width;
		}
	}
              

}

