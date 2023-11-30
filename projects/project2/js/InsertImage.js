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
      eaten: false,
    };
    this.totalSeedAmount = 3;
    this.seedArray = [this.totalSeedAmount];
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
      //If he is near the left edge of the canvas, make him move right
      if (this.farmer.x - moveSquare > 0) {
        this.farmer.x -= moveSquare;
      } else {
        this.farmer.x += moveSquare;
      }
      //attempts to flip the image
      // translate(this.farmer.w, 0);
      // // Scale -1, 1 means reverse the x axis, keep y the same.
      // scale(-1, 1);
      // // Because the x-axis is reversed, we need to draw at different x position.
      // image(farmerImg, -this.farmer.x, 0);
    }
    //Moves the farmer two squares to the right
    if (direction === 2) {
      //If he is near the right edge of the canvas, make him move left
      if (this.farmer.x + moveSquare < canvasX) {
        this.farmer.x += moveSquare;
      } else {
        this.farmer.x -= moveSquare;
      }
    }
    //Moves the farmer two squares down
    if (direction === 3) {
      //If he is near the bottom edge of the canvas, make him move up
      if (this.farmer.y + moveSquare < canvasY) {
        this.farmer.y += moveSquare;
      } else {
        this.farmer.y -= moveSquare;
      }
    }
    //Moves the farmer two squares up
    if (direction === 4) {
      //If he is near the top edge of the canvas, make him move down
      if (this.farmer.y - moveSquare > 0) {
        this.farmer.y -= moveSquare;
      } else {
        this.farmer.y += moveSquare;
      }
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
      //If it is near the left edge of the canvas, make it move right
      if (this.chick.x - moveSquare > 0) {
        this.chick.x -= moveSquare;
        this.chick.y -= moveSquare;
      } else {
        this.chick.x += moveSquare;
        this.chick.y += moveSquare;
      }
    }
    //Moves the chick one square diagonal up-right
    if (direction === 2) {
      //If it is near the right edge of the canvas, make it move left
      if (this.chick.x + moveSquare < canvasX) {
        this.chick.x += moveSquare;
        this.chick.y -= moveSquare;
      } else {
        this.chick.x -= moveSquare;
        this.chick.y -= moveSquare;
      }
    }
    //Moves the chick one square diagonal down-left
    if (direction === 3) {
      //If it is near the bottom edge of the canvas, make it move up-right
      if (this.chick.y + moveSquare < canvasY) {
        this.chick.x -= moveSquare;
        this.chick.y += moveSquare;
      } else {
        this.chick.x -= moveSquare;
        this.chick.y += moveSquare;
      }
    }
    //Moves the chick one square diagonal down-right
    if (direction === 4) {
      //If it is near the bottom edge of the canvas, make it move up-left
      if (this.chick.y - moveSquare > 0) {
        this.chick.x += moveSquare;
        this.chick.y += moveSquare;
      } else {
        this.chick.x -= moveSquare;
        this.chick.y -= moveSquare;
      }
    }
  }
  // =================== SEEDS ==========================
  //Draws the seeds using a For Loop
  seedDisplay(x, y) {
    let seed = {
      x: x,
      y: y,
      w: this.seed.w,
      h: this.seed.h,
      eaten: false,
    };

    console.log(this.seedArray.length);
    this.seedArray.push(seed);
  }
  //If a chicken touches a seed, set "eaten" to "true"
  seedEaten() {
    for (let i = 0; i < this.seedArray.length; i++) {
      if (this.checkCollision(this.chicken, this.seedArray[i])) {
        this.seedArray[i].eaten = true;
        console.log("ate seed");
        //Plays a sound effect when a seed has been eaten
        // popSFX.setLoop(false);
        // popSFX.play();
      }
      //If the seeds have not been eaten, draw them
      if (!this.seedArray[i].eaten) {
        image(
          seedImg,
          this.seedArray[i].x,
          this.seedArray[i].y,
          this.seedArray[i].w,
          this.seedArray[i].h
        );
      }
    }
  }
  //Changes to the next state if all seeds have been eaten
  allSeedsEaten() {
    console.log("seedArray[0] value: " + this.seedArray[0].eaten);
    console.log("seedArray[1] value: " + this.seedArray[1].eaten);
    console.log("seedArray[2] value: " + this.seedArray[2].eaten);

    if (
      (this.seedArray[1].eaten === true &&
        this.seedArray[2].eaten === true &&
        this.seedArray[3].eaten) === true
    ) {
      console.log("Inside of allSeedsEaten");
      game.state = "story2";
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
}
