
class Player extends Thing {
  // player has its own constructor to initialize speed
  constructor(x, y) {
    super(x, y);
    this.speed = 5;
  }
  
  
  draw() {
    // get map offset
    var {x, y} = this.getOffset();
    
    // draw player
    fill('plum');
    noStroke();
    
    
//    rect(x, y, 20, 40);
//    imageMode(CENTER);
    image(dax,x,y);  
  }
  
  // update player uses key interaction to move x and y
  move() {
    // http://keycode.info/
     if (keyIsPressed) {
       if (key == 'ArrowRight') {
         this.x += this.speed;
       }
       if (key == 'ArrowLeft') {
         this.x -= this.speed;
       }
       if (key == 'ArrowUp') {
         this.y -= this.speed;
       }
       if (key == 'ArrowDown') {
         this.y += this.speed;
       }
     }
  }
}