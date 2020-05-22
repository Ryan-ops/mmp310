class Thing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // get the map offset
  getOffset() {
    var x = this.x - mapX * 2;
    var y = this.y - mapY * 2;
    return { x, y };
  }

  
}