class Tulip {
  constructor(x, y, flowerWidth, flowerHeight, stemHeight) {
    this.x = x;
    this.y = y;
    this.flowerWidth = flowerWidth;
    this.flowerHeight = flowerHeight;
    this.stemWidth = 10;
    this.stemHeight = stemHeight;
    this.alive = true;
  }
  shrink() {
    //Choses a random amount to shrink the width and height of the tulip
    let shrinkage = random(shrink.min, shrink.max);
    this.flowerWidth = this.flowerWidth - shrinkage;
    this.flowerHeight = this.flowerHeight - shrinkage;
    //If the width or height of any tulip = 0, then the flower dies
    if (this.flowerWidth <= 0 || this.flowerHeight <= 0) {
      this.alive = false;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    //This image draws the stem
    image(stemImg, this.x, this.y, this.stemWidth, this.stemHeight);
    //This image draws the flower part of the tulip
    image(
      redTulipImg,
      this.x,
      this.y - 30,
      this.flowerWidth,
      this.flowerHeight
    );
    pop();
  }
}
