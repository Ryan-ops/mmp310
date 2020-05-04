  
class Particle {
	constructor(position) {
		this.position = position.copy();
		this.lifespan = 255;
		this.speed = createVector(random(-2, 2), -7, random(-2, 2));
		this.acceleration = createVector(0, 0.01, 0);
		this.rotation = createVector(random(PI), random(PI), random(PI));
		this.rotationSpeed = createVector(random(0.02), random(0.02), random(0.02));

		this.color = createVector(random(30), random(70), random(30, 90));
		this.colorSpeed = createVector(3, 2, 1);
        
        random(stewie).play();
	}

	update() {
		this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 2;
        
        // box collisions 
		if (this.position.x < -boxSize / 2||
			this.position.x > boxSize / 2) {
			this.speed.x *= -1;
			this.acceleration.x *= -1;
			random(jumps).play();
		}

		if (this.position.y < -boxSize / 2 ||
			this.position.y > boxSize / 2) {
			this.speed.y *= -1;
			this.acceleration.y *= -1;
			random(jumps).play();
		}

		if (this.position.z < -boxSize / 2||
			this.position.z > boxSize / 2) {
			this.speed.z *= -1;
			this.acceleration.z *= -1;
			random(jumps).play();
		}
	}

	display() {
		push();

		// move context to particle position
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(this.rotation.x);
		rotateY(this.rotation.y);
		rotateZ(this.rotation.z);

//		 ambientMaterial(this.color.x, this.color.y, this.color.z);
//		 specularMaterial(this.color.x, this.color.y, this.color.z, 190);
		shininess(30);
		emissiveMaterial(this.color.x, this.color.y, this.color.z, 350);

		// start composition
        // Stewie
	ellipsoid(15, 10, 10); // head
        
        // left ear
	push();
	rotateZ(PI * -0.5);
	translate(1, -15, 0);
	cone(1.5, 1);
	pop();

	// right ear
	push();
	translate(15, -1);
	rotateZ(PI * -1.5);
	cone(1.5, 1);
	pop();
        
        specularMaterial(255, 255, 255  );

    
    

	// left eye
	push();
	translate(-5, -1.5, 10);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(1.5, 1.5);
	pop();

	// right eye
	push();
	translate(5, -1.5, 10);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	torus(1.5, 1.5);
	pop();
        
        specularMaterial(0, 0, 0);
	push();
	translate(5, -8, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
        
        
	}
pop();
	

	pop();
        
        //Hair
	push();
	translate(8, -7, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

		push();
	translate(2, -8, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

			push();
	translate(-1, -8, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

			push();
	translate(-4, -8, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

			push();
	translate(-7, -7.4, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

			push();
	translate(-10, -6.2, 10);
	rotateY(PI * 2.5);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();

        // 	eye brows
	push();
	translate(6, -5, 10);
	rotateY(PI * 1.3);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}
        pop();

        
        // 	eye brows
push();
	translate(-6, -5, 10);
	rotateY(PI * -1.3);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);

		box(.5, .5);	
		pop();
	}

	

	pop();
        
        
        specularMaterial(0, 0, 0);
	push();
	translate(0, 5, 9);

	for (let x = -5; x < 5; x += 1.5) {
		push();
		translate(x, 0, 0);
		box(1, 1);	
		pop();
	}

	

	pop();

}
    






    
    

		

	isDead() {
		return this.lifespan < 0;
	}
}