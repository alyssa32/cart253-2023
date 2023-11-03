class Bee {
  // constructor() sets up bee starting properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.widthMin = 10;
    this.widthMax = 50;
    this.heightMin = 10;
    this.heightMax = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.shrinkRate = 0.05;
    this.growRate = 0.05;
    this.jitteriness = 0.1; // How likely the bee is to change direction
    this.alive = true;
  }
  // Continuously shrinks the bee if not touched by a tulip
  shrink() {
    // Shrink by reducing the width of the bee
    this.width = this.width - this.shrinkRate;
    // Shrink by reducing the height of the bee
    this.height = this.height - this.shrinkRate;
    // Check if we're smaller than the min width or height
    if (this.width < this.widthMin || this.height < this.heightMin) {
      // If so, the bee is dead
      this.alive = false;
    }
  }
  //If the bee touches a tulip, it and the flower will grow
  tryToPollinate(tulip) {
    let d = dist(this.x, this.y, tulip.x, tulip.y);
    if (d < this.width / 2 || d < this.height / 2) {
      this.grow();
      tulip.pollinate();
    }
  }
  //The speed the bees grow at and their min/max size
  grow() {
    //The rate at which the bee's width grows
    this.width = this.width + this.growRate;
    //Sets a min and max width size to the bee
    this.width = constrain(this.width, this.widthMin, this.widthMax);
    //The rate at which the bee's height grows
    this.height = this.height + this.growRate;
    //Sets a min and max height size to the bee
    this.height = constrain(this.height, this.heightMin, this.heightMax);
  }

  // Moves the bee by potentially changing direction and then changing position based on velocity
  move() {
    // Checks if the direction should be changed
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }
    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    // Constrain to the canvas
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
  // display() draws our bee onto the canvas
  display() {
    push();
    imageMode(CENTER);
    //This image draws the bee
    image(pixelBeeImg, this.x, this.y, this.width, this.height);
    pop();
  }
}
