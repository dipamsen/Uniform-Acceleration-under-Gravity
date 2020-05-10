class Thing {
  constructor(x, y, w, h, a) {
    this.position = {
      x: x,
      y: y
    } // 1m = 4 pixels
    //  1 s= 60 frames
    this.nX = y;
    this.angle = a;
    this.width = w;
    this.height = h;
    this.gravity = 1 / 90;
    //this.acceleration = 0;
    this.velocity = -4 / 3;
  }
  display() {
    var angle = this.angle;
    var pos = this.position;
    push();
    translate(pos.x, pos.y);
    fill("white");
    stroke(0);
    rotate(angle);
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  }
  move() {
    //if (frameCount % 60 == 0) {
    this.position.y += this.velocity;

  }
  accelerate() {
    this.velocity += this.gravity;
  }
  collides() {
    if (this.position.y + this.height / 2 > height) {
      return true;
    } else {
      return false;
    }
  }
  reset() {
    this.position.y = 600-hval*4;
  }
}