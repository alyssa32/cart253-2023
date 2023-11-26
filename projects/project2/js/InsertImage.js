class InsertImage {
  constructor() {
    //Text box in intro
    this.introBg = {
      x: 40,
      y: 50,
      w: 720,
      h: 260,
    };
    this.introChicken = {
      x: 160,
      y: 485,
      w: 30,
      h: 30,
    };
    this.introFarmer = {
      x: 220,
      y: 540,
      w: 30,
      h: 30,
    };
    //The enter button image
    this.enterButton = {
      x: 335,
      y: 610,
      w: 90,
      h: 90,
    };
    this.bgSquares = {
      r: 111,
      g: 176,
      b: 112,
      w: 80,
      h: 80,
      amount: 5,
    };
    this.chicken = {
      x: 5,
      y: 80,
      w: 70,
      h: 70,
      captured: false,
      win: false,
    };
    this.farmer = {
      x: 400,
      y: 400,
      w: 80,
      h: 80,
    };
    this.chick = {
      x: 570,
      y: 570,
      w: 60,
      h: 60,
      captured: false,
    };
    this.seed = {
      w: 30,
      h: 30,
      amount: 3,
    };
  }
  //Draws the seeds using a For Loop
  seedDisplay(x, y) {
    for (let i = 0; i < this.seed.amount; i++) {
      image(seedImg, x, y, this.seed.w, this.seed.h);
    }
  }
}
