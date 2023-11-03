class Tulip {
  // constructor() sets up the tulip starting properties
  constructor(x, y, flowerWidth, flowerHeight, stemHeight) {
    this.x = x;
    this.y = y;
    this.flowerWidth = flowerWidth;
    this.flowerWidthMax = 60;
    this.flowerWidthMin = 10;
    this.flowerHeight = flowerHeight;
    this.flowerHeighthMax = 80;
    this.flowerHeighthMin = 10;
    this.stemWidth = 10;
    this.stemHeight = stemHeight;
    this.alive = true;
    //this.icon = redTulipImg;
  }
  //Will constantly shrink the tulips if not pollinated by a bee
  shrink() {
    //Choses a random amount to shrink the width and height of the tulip
    let shrinkage = random(shrink.min, shrink.max);
    this.flowerWidth = this.flowerWidth - shrinkage;
    this.flowerHeight = this.flowerHeight - shrinkage;
    //If the width or height of any tulip = 0, then the flower dies
    if (
      this.flowerWidth <= this.flowerWidthMin ||
      this.flowerHeight <= this.flowerHeightMin
    ) {
      this.alive = false;
    }
  }
  //Will grow the tulips if pollinated by a bee
  pollinate() {
    let growth = random(0, 0.5);
    //The rate at which the tulip's width grows
    this.flowerWidth = this.flowerWidth + growth;
    //Sets a min and max width size to the tulip
    this.flowerWidth = constrain(
      this.flowerWidth,
      this.flowerWidthMin,
      this.flowerWidthMax
    );
    //The rate at which the tulip's height grows
    this.flowerHeight = this.flowerHeight + growth;
    //Sets a min and max height size to the tulip
    this.flowerHeight = constrain(
      this.flowerHeight,
      this.flowerHeightMin,
      this.flowerHeightMax
    );
    console.log("my current height is " + this.flowerHeight);
    console.log("my max height is " + this.flowerHeightMax);
  }
  //Displays the flower and stem of the tulip using images
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
