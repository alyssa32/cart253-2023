class WateringCan {
  // constructor() sets up the tulip starting properties
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.width = 70;
    this.widthMax = 60;
    this.widthMin = 10;
    this.height = 50;
    this.heightMax = 80;
    this.heightMin = 10;
    this.alive = true;
    this.bitten = false;
  }
  //Displays the watering can
  display() {
    push();
    imageMode(CORNER);
    //This image draws the stem
    image(wateringCanImg, mouseX, mouseY, this.width, this.height);
    pop();
  }
  //If the watering can touches a tulip,the flower will grow
  mousePressed(tulip) {
    let d = dist(this.x, this.y, tulip.x, tulip.y);
    if (d < this.width / 2 || d < this.height / 2) {
      tulip.pollinate(tulip);
    }
  }
  touchedBee(bee) {
    let d = dist(this.x, this.y, bee.x, bee.y);
    if (d < this.width / 2 || d < this.height / 2) {
      this.bitten = true;
    }
    console.log("touched a bee");
  }
}
