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
    this.winChicken = {
      x: 410,
      y: 380,
      w: 70,
      h: 70,
      captured: false,
    };
    this.soldChicken = {
      x: 280,
      y: 430,
      w: 50,
      h: 50,
      captured: false,
    };
    this.storyFarmer = {
      x: 220,
      y: 540,
      w: 30,
      h: 30,
    };
    this.loseFarmer = {
      x: 330,
      y: 400,
      w: 80,
      h: 80,
    };
    this.loseFarmer2 = {
      x: 440,
      y: 400,
      w: 80,
      h: 80,
    };
    this.storyChick = {
      x: 135,
      y: 475,
      w: 50,
      h: 50,
    };
    this.winChick = {
      x: 360,
      y: 410,
      w: 40,
      h: 40,
      captured: false,
    };
    this.soldChick = {
      x: 300,
      y: 450,
      w: 30,
      h: 30,
      captured: false,
    };
    //The enter button image
    this.enterButton = {
      x: 320,
      y: 545,
      w: 100,
      h: 100,
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
    // Constrain the farmer's y-coordinate
    this.farmer.y = constrain(this.farmer.y, 0, canvasY - this.farmer.h);
  }
  //Assigns random directions for the farmer to move after the player moves
  farmerMovement() {
    let moveSquare = 160;
    let direction = round(random(1, 4));
    //Moves the farmer two squares to the left
    if (direction === 1) {
      this.farmer.x -= moveSquare;
    }
    //Moves the farmer two squares to the right
    if (direction === 2) {
      this.farmer.x += moveSquare;
    }
    //Moves the farmer two squares down
    if (direction === 3) {
      this.farmer.y += moveSquare;
    }
    //Moves the farmer two squares up
    if (direction === 4) {
      this.farmer.y -= moveSquare;
    }
  }
  // =================== CHICK ==========================
  chickDisplay() {
    //Draws the chick image
    image(chickImg, this.chick.x, this.chick.y, this.chick.w, this.chick.h);
    // Constrain the chick's x-coordinate
    this.chick.x = constrain(this.chick.x, 0, canvasX - this.chick.w);
    // Constrain the chick's y-coordinate
    this.chick.y = constrain(this.chick.y, 0, canvasY - this.chick.h);
  }
  chickMovement() {
    let moveSquare = 80;
    let direction = round(random(1, 4));
    //Moves the chick one square diagonal up-left
    if (direction === 1) {
      this.chick.x -= moveSquare;
      this.chick.y -= moveSquare;
    }
    //Moves the chick one square diagonal up-right
    if (direction === 2) {
      this.chick.x += moveSquare;
      this.chick.y -= moveSquare;
    }
    //Moves the chick one square diagonal down-left
    if (direction === 3) {
      this.chick.x -= moveSquare;
      this.chick.y += moveSquare;
    }
    //Moves the chick one square diagonal down-right
    if (direction === 4) {
      this.chick.x += moveSquare;
      this.chick.y += moveSquare;
    }
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
  // Checks if the chicken collides with the farmer (captured)
  chickenFarmerCollide() {
    if (this.checkCollision(this.chicken, this.farmer)) {
      this.chicken.captured = true;
    }
  }
  // Checks if the chicken collides with the chick (win)
  chickenChickCollide() {
    if (this.checkCollision(this.chicken, this.chick)) {
      this.chicken.win = true;
    }
  }
  // Checks if the chick collides with the farmer (captured)
  chickFarmerCollide() {
    if (this.checkCollision(this.chick, this.farmer)) {
      this.chick.captured = true;
    }
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
