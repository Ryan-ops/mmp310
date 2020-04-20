
/*
	3d graphics example
	4.5.2020
*/

// rotation contols
var rotX, rotY, rotZ;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	createP("Scene controls").position(10, 0);
	rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotX.position(10, 20);

	rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotY.position(10, 40);

	rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotZ.position(10, 60);

}

function draw() {
	background(51);

	noStroke();
	// lights();

	ambientLight(255, 200, 99  );

	// direction values -1, 1
	directionalLight(255, 255, 255, 1, 1, -1);
	pointLight(255, 255 , 0,  mouseX - width/2, mouseY - height/2, 150);


	ambientMaterial(255);

	// floor 
	push();
	translate(0, 200, 0);
	rotateX(PI * 0.5);
	plane(1000, 1000);
	pop();


	ambientMaterial(221, 160, 221);
	specularMaterial(221, 160, 221);
	shininess(255);

	rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

	
//	 stroke(0, 255, 0);
//	 noFill();
 
	// Stewie
	ellipsoid(150, 100, 100); // head
   // left ear
	push();
	rotateZ(PI * -0.5);
	translate(1, -150, 0);
	cone(15, 10);
	pop();

	// right ear
	push();
	translate(150, -1);
	rotateZ(PI * -1.5);
	cone(15, 10);
	pop();


   


    
    

     


	specularMaterial(255, 255, 255  );

    
    

	// left eye
	push();
	translate(-50, -15, 100);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(15, 15);
	pop();

	// right eye
	push();
	translate(50, -15, 100);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(15, 15);
	pop();
    
    
specularMaterial(0, 0, 0);
	push();
	translate(50, -80, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();
    
//Hair
	push();
	translate(80, -70, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

		push();
	translate(20, -80, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

			push();
	translate(-10, -80, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

			push();
	translate(-40, -80, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

			push();
	translate(-70, -74, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

			push();
	translate(-100, -62, 100);
	rotateY(PI * 2.5);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();


// 	eye brows
	push();
	translate(60, -50, 100);
	rotateY(PI * 1.3);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();

// 	eye brows
push();
	translate(-60, -50, 100);
	rotateY(PI * -1.3);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);

		box(5, 5);	
		pop();
	}

	

	pop();


    



	// mouth
	specularMaterial(0, 0, 0);
	push();
	translate(0, 50, 90);

	for (let x = -50; x < 50; x += 15) {
		push();
		translate(x, 0, 0);
		box(10, 10);	
		pop();
	}

	

	pop();

}



    

