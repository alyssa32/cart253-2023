class WateringCan {
  // constructor() sets up the tulip starting properties
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.width = 40;
    this.widthMax = 60;
    this.widthMin = 10;
    this.height = 40;
    this.heightMax = 80;
    this.heightMin = 10;
    this.alive = true;
  }
  //Displays the watering can
  display() {
    push();
    imageMode(CENTER);
    //This image draws the stem
    image(wateringCanImg, this.x, this.y, this.width, this.height);
    pop();
  }
}
