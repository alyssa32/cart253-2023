class InsertImage {
  constructor() {
    //Text box in intro
    this.storyBg = {
      x: 40,
      y: 50,
      w: 720,
      h: 260,
    };
    this.storyChicken = {
      x: 160,
      y: 485,
      w: 30,
      h: 30,
    };
    this.storyFarmer = {
      x: 220,
      y: 540,
      w: 30,
      h: 30,
    };
    this.storyChick = {
      x: 210,
      y: 475,
      w: 50,
      h: 50,
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
      eaten: false,
    };
  }
  // =================== CHICKEN ==========================
  chickenDisplay() {
    //Draws the chicken image
    image(
      chickenImg,
      this.chicken.x,
      this.chicken.y,
      this.chicken.w,
      this.chicken.h
    );
    // Constrain the chicken's x-coordinate
    this.chicken.x = constrain(this.chicken.x, 0, canvasX - this.chicken.w);
    // Constrain the chicken's y-coordinate
    this.chicken.y = constrain(this.chicken.y, 0, canvasY - this.chicken.h);
  }
  // =================== FARMER ==========================
  farmerDisplay() {
    //Draws the farmer image
    image(
      farmerImg,
      this.farmer.x,
      this.farmer.y,
      this.farmer.w,
      this.farmer.h
    );
    // Constrain the farmer's x-coordinate
    this.farmer.x = constrain(this.farmer.x, 0, canvasX - this.farmer.w);
    // Constrain the chick's y-coordinate
    this.farmer.y = constrain(this.farmer.y, 0, canvasY - this.farmer.h);
  }
  // =================== SEEDS ==========================
  //Draws the seeds using a For Loop
  seedDisplay(x, y) {
    for (let i = 0; i < this.seed.amount; i++) {
      image(seedImg, x, y, this.seed.w, this.seed.h);
    }
  }
  // =================== COLLISIONS ==========================
  // Checks if one object collides with another
  checkCollision(obj1, obj2) {
    if (
      obj1.x + obj1.w > obj2.x &&
      obj1.x < obj2.x + obj2.w &&
      obj1.y + obj1.h > obj2.y &&
      obj1.y < obj2.y + obj2.h
    ) {
      return true;
    }
    return false;
  }
  //If the chicken collides with a seed, it will be set to "eaten"
  seedEaten() {
    for (let i = 0; i < this.seed.amount; i++) {
      if (checkCollision(foodArray[i])) {
        foodArray[i].eaten = true;
      }
    }
  }
}
