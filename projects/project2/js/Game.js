class Game {
  constructor() {
    this.state = "dogCapturedChicken";
    //Light green background
    this.bg = {
      r: 135,
      g: 199,
      b: 144,
    };
    this.intro = {
      string1: `As a chicken, you don't like your farmer,\n Jean-Paul, and you have decided to make an \nescape! Stock up on seeds so that you will be \nprepared for the outside world. `,
      x1: 395,
      y1: 130,
      r: 41,
      g: 148,
      b: 56,
      string2:
        "Using the arrow keys, collect all seeds but be careful that you don't \nget capture by the farmer or his vicious shepard.",
      x2: 400,
      y2: 390,
      string3:
        "= moves 1 square at a time in any direction \n \n    = moves 2 squares in any direction \n \n    = moves 1 square in any direction",
      x3: 420,
      y3: 510,
      r3: 197,
      g3: 237,
      b3: 154,
      string4: "Make your best chicken noise to begin",
      x4: 400,
      y4: 688,
    };
    this.intro2 = {
      string1:
        "Great! You collected enough seeds to escape.\n However, on your way out you notice that \nyour egg has hatched... you're a mother! \n Quick, get to your chick before the farmer does.",
      x1: 395,
      y1: 130,
      r: 41,
      g: 148,
      b: 56,
      string2: "Your chick was just born and has trouble walking straight.",
      x2: 400,
      y2: 390,
      string3: "= moves 1 square diagonally in any direction",
      x3: 420,
      y3: 510,
      r3: 197,
      g3: 237,
      b3: 154,
      string4: "Make another chicken noise to continue",
      x4: 400,
      y4: 688,
    };
    this.winGame = {
      string1: `YOU WON!`,
      x1: 400,
      y1: 170,
      string2: `You ran away with your chick to start a free-range life.`,
      x2: 400,
      y2: 290,
      string3: `Press the               key to restart`,
      x3: 400,
      y3: 600,
      r: 58,
      g: 105,
      b: 58,
      r1: 241,
      g1: 255,
      b1: 196,
    };
    this.loseChicken = {
      string1: `YOU LOST!`,
      x1: 400,
      y1: 110,
      string2: `The farmer caught you and sold you
   to the neighbour, Jean-Francois.`,
      x2: 400,
      y2: 200,
      string3: `Press the               key to restart`,
      x3: 400,
      y3: 600,
      r: 58,
      g: 105,
      b: 58,
    };
    this.loseChick = {
      string1: `YOU LOST!`,
      x1: 400,
      y1: 110,
      string2: `The farmer caught your chick and sold it
   to the neighbour, Jean-Francois.`,
      x2: 400,
      y2: 200,
      string3: `Press the               key to restart`,
      x3: 400,
      y3: 600,
      r: 58,
      g: 105,
      b: 58,
    };
    this.dogFoundChicken = {
      string1: `YOU LOST!`,
      x1: 400,
      y1: 110,
      string2: `The shepherd caught you \n and adopted you as one of her own.`,
      x2: 400,
      y2: 200,
      string3: `Press the               key to restart`,
      x3: 400,
      y3: 600,
      r: 58,
      g: 105,
      b: 58,
    };
    this.dogFoundChick = {
      string1: `YOU LOST!`,
      x1: 400,
      y1: 110,
      string2: `The shepherd caught your chick \n and adopted it as one of her own.`,
      x2: 400,
      y2: 200,
      string3: `Press the               key to restart`,
      x3: 400,
      y3: 600,
      r: 58,
      g: 105,
      b: 58,
    };
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
  //-----------------------------story1----------------------------------
  story1() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Title box image in the intro
    image(
      introBgImg,
      insertImage.storyBg.x,
      insertImage.storyBg.y,
      insertImage.storyBg.w,
      insertImage.storyBg.h
    );
    textSize(28);
    textAlign(CENTER);
    noStroke(0);
    fill(this.intro.r, this.intro.g, this.intro.b);
    textStyle(BOLD);
    text(this.intro.string1, this.intro.x1, this.intro.y1);
    //Text stating to use arrow keys
    textSize(21);
    textStyle(BOLD);
    text(this.intro.string2, this.intro.x2, this.intro.y2);
    //Text explaining the movements of the characters
    fill(this.intro.r3, this.intro.g3, this.intro.b3);
    text(this.intro.string3, this.intro.x3, this.intro.y3);
    //Text stateting to avoid the farmer
    fill(this.intro.r, this.intro.g, this.intro.b);
    //Text explaing to hit the "enter" key to continue
    textSize(26);
    text(this.intro.string4, this.intro.x4, this.intro.y4);
    //Chicken image displayed on the title screen
    image(
      chickenImg,
      insertImage.storyChicken.x,
      insertImage.storyChicken.y,
      insertImage.storyChicken.w,
      insertImage.storyChicken.h
    );
    //Farmer image displayed on the title screen
    image(
      farmerImg,
      insertImage.storyFarmer.x,
      insertImage.storyFarmer.y,
      insertImage.storyFarmer.w,
      insertImage.storyFarmer.h
    );
    //Dog image displayed on the title screen
    image(
      dogImg,
      insertImage.storyDog.x,
      insertImage.storyDog.y,
      insertImage.storyDog.w,
      insertImage.storyDog.h
    );
  }
  //Draws the background's rows of dark squares using a For Loop
  bgSquaresLoop(x, y) {
    for (let i = 0; i < insertImage.bgSquares.amount; i++) {
      noStroke();
      fill(
        insertImage.bgSquares.r,
        insertImage.bgSquares.g,
        insertImage.bgSquares.b
      );
      rect(x, y, insertImage.bgSquares.w, insertImage.bgSquares.h);
      x = x + 160;
    }
  }
  //-----------------------------GAME1----------------------------------
  game1() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Calls the loop functions to draw the dark green squares of the background
    this.bgSquaresLoop(0, 0);
    this.bgSquaresLoop(80, 80);
    this.bgSquaresLoop(0, 160);
    this.bgSquaresLoop(80, 240);
    this.bgSquaresLoop(0, 320);
    this.bgSquaresLoop(80, 400);
    this.bgSquaresLoop(0, 480);
    this.bgSquaresLoop(80, 560);
    this.bgSquaresLoop(0, 640);
    this.bgSquaresLoop(80, 720);
    //Displays the chicken
    insertImage.chickenDisplay();
    //Displays the farmer
    insertImage.farmerDisplay();
    //Displays the dog
    insertImage.dogDisplay();
    // ======================== SEEDS
    insertImage.seedEaten();
    //Calls the function that checks if chicken colllides with farmer
    insertImage.chickenFarmerCollide();
    if (insertImage.chicken.captured) {
      this.chickenGameOver();
    }
    insertImage.allSeedsEaten();
    //Calls the function that checks if chicken colllides with the dog
    insertImage.chickenDogCollide();
    //Chicken collides with the dog, losing end screen is displayed
    if (insertImage.chicken.capturedByDog) {
      this.chickenGameOver();
    }
  }
  //-----------------------------STORY2----------------------------------
  story2() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Displays the story panel
    image(
      introBgImg,
      insertImage.storyBg.x,
      insertImage.storyBg.y,
      insertImage.storyBg.w,
      insertImage.storyBg.h
    );
    //Chick image displayed on the screen
    image(
      chickImg,
      insertImage.storyChick.x,
      insertImage.storyChick.y,
      insertImage.storyChick.w,
      insertImage.storyChick.h
    );
    textSize(28);
    textAlign(CENTER);
    noStroke(0);
    fill(this.intro2.r, this.intro2.g, this.intro2.b);
    textStyle(BOLD);
    text(this.intro2.string1, this.intro2.x1, this.intro2.y1);
    //Text stating to use arrow keys
    textSize(21);
    textStyle(BOLD);
    text(this.intro2.string2, this.intro2.x2, this.intro2.y2);
    //Text explaining the movements of the characters
    fill(this.intro2.r3, this.intro2.g3, this.intro2.b3);
    text(this.intro2.string3, this.intro2.x3, this.intro2.y3);
    //Text stateting to avoid the farmer
    fill(this.intro2.r, this.intro2.g, this.intro2.b);
    //Text explaing to hit the "enter" key to continue
    textSize(26);
    text(this.intro2.string4, this.intro2.x4, this.intro2.y4);
  }
  //-----------------------------GAME2----------------------------------
  game2() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Calls the loop functions to draw the dark green squares of the background
    this.bgSquaresLoop(0, 0);
    this.bgSquaresLoop(80, 80);
    this.bgSquaresLoop(0, 160);
    this.bgSquaresLoop(80, 240);
    this.bgSquaresLoop(0, 320);
    this.bgSquaresLoop(80, 400);
    this.bgSquaresLoop(0, 480);
    this.bgSquaresLoop(80, 560);
    this.bgSquaresLoop(0, 640);
    this.bgSquaresLoop(80, 720);
    //Displays the chicken
    insertImage.chickenDisplay();
    //Displays the farmer
    insertImage.farmerDisplay();
    //Displays the chick
    insertImage.chickDisplay();
    //Displays the dog
    insertImage.dogDisplay();
    //Calls the function that checks if chicken colllides with chick
    insertImage.chickenChickCollide();
    //Chicken collides with Chick, winning end screen is displayed
    if (insertImage.chicken.win) {
      this.win();
    }
    //Calls the function that checks if chicken colllides with farmer
    insertImage.chickenFarmerCollide();
    //Chicken collides with Farmer, losing end screen is displayed
    if (insertImage.chicken.captured) {
      this.chickenGameOver();
    }
    //Calls the function that checks if chicken colllides with the dog
    insertImage.chickenDogCollide();
    //Chicken collides with the dog, losing end screen is displayed
    if (insertImage.chicken.capturedByDog) {
      this.chickenGameOver();
    }
    //Calls the function that checks if chick colllides with farmer
    insertImage.chickFarmerCollide();
    //Chick collides with Farmer, losing end screen is displayed
    if (insertImage.chick.captured) {
      this.chickGameOver();
    }
  }
  //-----------------------------WIN----------------------------------
  win() {
    image(
      winBgImg,
      insertImage.BgImg.x,
      insertImage.BgImg.y,
      insertImage.BgImg.w,
      insertImage.BgImg.h
    );
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(this.winGame.r, this.winGame.g, this.winGame.b);
    textStyle(BOLD);
    text(this.winGame.string1, this.winGame.x1, this.winGame.y1);
    textSize(25);
    fill(this.winGame.r1, this.winGame.g1, this.winGame.b1);
    text(this.winGame.string2, this.winGame.x2, this.winGame.y2);
    textSize(30);
    fill(this.winGame.r, this.winGame.g, this.winGame.b);
    text(this.winGame.string3, this.winGame.x3, this.winGame.y3);
    //Display chicken image on winning screen
    image(
      chickenImg,
      insertImage.winChicken.x,
      insertImage.winChicken.y,
      insertImage.winChicken.w,
      insertImage.winChicken.h
    );
    //Display chick image on winning screen
    image(
      chickImg,
      insertImage.winChick.x,
      insertImage.winChick.y,
      insertImage.winChick.w,
      insertImage.winChick.h
    );
    //Enter button image displayed on the winning screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //-----------------------------CHICKEN GAME OVER----------------------------------
  chickenGameOver() {
    image(
      loseBgImg,
      insertImage.BgImg.x,
      insertImage.BgImg.y,
      insertImage.BgImg.w,
      insertImage.BgImg.h
    );
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(this.loseChicken.r, this.loseChicken.g, this.loseChicken.b);
    textStyle(BOLD);
    text(this.loseChicken.string1, this.loseChicken.x1, this.loseChicken.y1);
    textSize(30);
    text(this.loseChicken.string2, this.loseChicken.x2, this.loseChicken.y2);
    text(this.loseChicken.string3, this.loseChicken.x3, this.loseChicken.y3);
    //Red Farmer image displayed on the title screen
    image(
      farmer2Img,
      insertImage.loseFarmer2.x,
      insertImage.loseFarmer2.y,
      insertImage.loseFarmer2.w,
      insertImage.loseFarmer2.h
    );
    //Blue Farmer image displayed on the title screen
    image(
      farmerImg,
      insertImage.loseFarmer.x,
      insertImage.loseFarmer.y,
      insertImage.loseFarmer.w,
      insertImage.loseFarmer.h
    );
    //Chicken image displayed on the losing screen
    image(
      chickenImg,
      insertImage.soldChicken.x,
      insertImage.soldChicken.y,
      insertImage.soldChicken.w,
      insertImage.soldChicken.h
    );
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //-----------------------------CHICK GAME OVER----------------------------------
  chickGameOver() {
    image(
      loseBgImg,
      insertImage.BgImg.x,
      insertImage.BgImg.y,
      insertImage.BgImg.w,
      insertImage.BgImg.h
    );
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(this.loseChick.r, this.loseChick.g, this.loseChick.b);
    textStyle(BOLD);
    text(this.loseChick.string1, this.loseChick.x1, this.loseChick.y1);
    textSize(30);
    text(this.loseChick.string2, this.loseChick.x2, this.loseChick.y2);
    text(this.loseChick.string3, this.loseChick.x3, this.loseChick.y3);
    //Red Farmer image displayed on the title screen
    image(
      farmer2Img,
      insertImage.loseFarmer2.x,
      insertImage.loseFarmer2.y,
      insertImage.loseFarmer2.w,
      insertImage.loseFarmer2.h
    );
    //Blue Farmer image displayed on the title screen
    image(
      farmerImg,
      insertImage.loseFarmer.x,
      insertImage.loseFarmer.y,
      insertImage.loseFarmer.w,
      insertImage.loseFarmer.h
    );
    //Chicken image displayed on the losing screen
    image(
      chickImg,
      insertImage.soldChick.x,
      insertImage.soldChick.y,
      insertImage.soldChick.w,
      insertImage.soldChick.h
    );
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //----------------------------- DOG CAPTURED CHICKEN ----------------------------------
  dogCapturedChicken() {
    image(
      loseBgImg,
      insertImage.BgImg.x,
      insertImage.BgImg.y,
      insertImage.BgImg.w,
      insertImage.BgImg.h
    );
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(
      this.dogFoundChicken.r,
      this.dogFoundChicken.g,
      this.dogFoundChicken.b
    );
    textStyle(BOLD);
    text(
      this.dogFoundChicken.string1,
      this.dogFoundChicken.x1,
      this.dogFoundChicken.y1
    );
    textSize(30);
    text(
      this.dogFoundChicken.string2,
      this.dogFoundChicken.x2,
      this.dogFoundChicken.y2
    );
    text(
      this.dogFoundChicken.string3,
      this.dogFoundChicken.x3,
      this.dogFoundChicken.y3
    );
    //Chicken image displayed on the losing screen
    image(
      chickenImg,
      insertImage.soldChicken.x,
      insertImage.soldChicken.y,
      insertImage.soldChicken.w,
      insertImage.soldChicken.h
    );
    //Dog image displayed on the losing screen
    image(
      dogImg,
      insertImage.loseDog.x,
      insertImage.loseDog.y,
      insertImage.loseDog.w,
      insertImage.loseDog.h
    );
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //----------------------------- DOG CAPTURED CHICK ----------------------------------
  dogCapturedChick() {
    image(
      loseBgImg,
      insertImage.BgImg.x,
      insertImage.BgImg.y,
      insertImage.BgImg.w,
      insertImage.BgImg.h
    );
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(
      this.dogFoundChicken.r,
      this.dogFoundChicken.g,
      this.dogFoundChicken.b
    );
    textStyle(BOLD);
    text(
      this.dogFoundChicken.string1,
      this.dogFoundChicken.x1,
      this.dogFoundChicken.y1
    );
    textSize(30);
    text(
      this.dogFoundChicken.string2,
      this.dogFoundChicken.x2,
      this.dogFoundChicken.y2
    );
    text(
      this.dogFoundChicken.string3,
      this.dogFoundChicken.x3,
      this.dogFoundChicken.y3
    );
    //Chicken image displayed on the losing screen
    image(
      chickenImg,
      insertImage.soldChicken.x,
      insertImage.soldChicken.y,
      insertImage.soldChicken.w,
      insertImage.soldChicken.h
    );
    //Dog image displayed on the losing screen
    image(
      dogImg,
      insertImage.loseDog.x,
      insertImage.loseDog.y,
      insertImage.loseDog.w,
      insertImage.loseDog.h
    );
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //----------------------------- STATE CHANGES ----------------------------------
  //Checks the state and displays it's function
  checkState() {
    if (this.state === "story1") {
      this.story1();
    }
    if (this.state === "game1") {
      this.game1();
    }
    if (this.state === "story2") {
      this.story2();
    }
    if (this.state === "game2") {
      this.game2();
    }
    if (this.state === "win") {
      this.win();
    }
    if (this.state === "chickenGameOver") {
      this.chickenGameOver();
    }
    if (this.state === "chickGameOver") {
      this.chickGameOver();
    }
    if (this.state === "dogCapturedChicken") {
      this.dogCapturedChicken();
    }
  }
  //The audio input will change from a story state, to the game state
  changeToGame() {
    if (this.state === "story1") {
      this.state = "game1";
    } else if (this.state === "story2") {
      this.state = "game2";
    }
  }
  //Will change to the next story state if the player wins or loses the game
  changeToStory() {
    if (this.state === "game1") {
      this.state = "story2";
    } else if (this.state === "win" || "chickenGameOver" || "chickGameOver") {
      this.state = "story1";
    }
  }
}
