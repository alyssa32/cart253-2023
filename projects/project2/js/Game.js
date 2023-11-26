class Game {
  constructor() {
    this.state = "game2";
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
        "Using the arrow keys, collect all seeds but be careful that you don't \nget capture by the farmer",
      x2: 400,
      y2: 390,
      string3:
        "= moves 1 square at a time in any direction \n \n    = moves 2 squares in any direction",
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
  //-----------------------------game1----------------------------------
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
    // ======================== SEEDS
    insertImage.seedDisplay(265, 105);
    insertImage.seedDisplay(185, 665);
    insertImage.seedDisplay(505, 345);
  }
  //-----------------------------story2----------------------------------
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
  //-----------------------------game2----------------------------------
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
  }
  //-----------------------------win----------------------------------
  win() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Enter button image displayed on the title screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //-----------------------------chickenCaptured----------------------------------
  chickenCaptured() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Enter button image displayed on the title screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
  //-----------------------------chickCaptured----------------------------------
  chickCaptured() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Enter button image displayed on the title screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
  }
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
    if (this.state === "chickenCaptured") {
      this.chickenCaptured();
    }
    if (this.state === "chickCaptured") {
      this.chickCaptured();
    }
  }
  //Will change to the next state
  changeState() {
    if (this.state === "story1") {
      this.state = "game1";
    } else if (this.state === "game1") {
      this.state = "story2";
    } else if (this.state === "story2") {
      this.state = "game2";
    }
  }
}
