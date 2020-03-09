var parkImage, daxterImage, jakImage, daxImage;

function preload() {
	daxterImage = loadImage('Daxter.png');
	jakImage = loadImage('jak3.png');
	daxImage = loadImage('daxter1.png');
    parkImage = loadImage('park.gif');
}

var dax = []; //empty array
var numDax = 7;

var daxter = [];
var numDaxter = 7;

//deal with later
//var daxterSpeedX = [];
//var daxterSpeedY = [];


var jak = []; 
var numJak = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
  
    
    //add dax positions
    let x = 350;
    for (let i = 0; i < numDax; i++){
       let y = random(height/2);
        
        let daxt = new Thing(x, y, daxImage);
        dax.push(daxt);
        
        //update x, distributing number of clouds across canvas
        x += width/numDax + random(-100, 200);
    }
    
    //add jak
    let y =450;
    for(let i = 0;  i < numJak; i++){
       let x = random(jakImage.width, width - daxImage.width);
        
        let ja = new Thing(x,y, jakImage);
        jak.push(ja);
        
        y+=40;
    
    
    
    }
    //add daxter
    for (let i = 0; i < numDaxter; i++){
       let x = random(width);
        let y = height - daxterImage.height - random(100);
        
        let dex = new Thing(x, y, daxterImage);
        daxter.push(dex);
//        daxterSpeedX.push(random(1,3));
//        daxterSpeedY.push(random(-2,2));
        
        
    
    
    }
}



function draw(){
    imageMode(CENTER);
  image(parkImage, width/2 , height * 2/3);
    
    //Jak
    for (let i =0; i < numJak; i++){
        jak[i].draw();
    
    
    }
    
    //Daxter
      for (let i = 0; i < numDaxter; i++) {
		daxter[i].draw();

//		// animate
//		daxterX[i] += daxterSpeedX[i] + random(2);
//		daxterY[i] += daxterSpeedY[i] + random(-0.5, 0.5);
//
//		// reset daxter
//		if (daxterX[i] > width) {
//			daxterX[i] = -daxterImage.width;
//		}
//
//		// contain y value of daxter
//		if (daxterY[i] < height * 2/3 || 
//			daxterY[i] > height - daxterImage.height) {
//			daxterSpeedY[i] *= -2;
//		}
	}
        //dax
        
        for (let i = 0; i < numDax; i++) {
		dax[i].draw();

//		// animate x
//		daxX[i] += 1;
//            
//
//		// check if dax is beyond right side of canvas
//		if (daxX[i] > width) {
//			// reset dax back to left side
//			daxX[i] = -daxImage.width;
//		}
	}
              

}

