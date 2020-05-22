class Tree extends Thing {
  
  // no constructor needed here
  // might need one for images or other things that would be added
  // ie
  
  constructor(x, y, img) {
    super(x, y); // call Thing super construcor
    this.img = img;
  
  }  
  
  
  draw() {
    // get the map offset (from super class)
    var {x, y} = this.getOffset();
      

    // use xy to draw
    fill('green');
    rect(x, y, 10, 40);
//    image(this.img, x, y);
      
  }
}