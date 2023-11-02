class Tulip {
  constructor(x, y, flowerWidth, flowerHeight, stemHeight) {
    this.x = x;
    this.y = y;
    this.flowerWidth = flowerWidth;
    this.flowerHeight = flowerHeight;
    this.stemWidth = 10;
    this.stemHeight = stemHeight;
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
