class Game {
  constructor() {
    this.state = "introduction";
    //Light green background
    this.bg = {
      r: 135,
      g: 199,
      b: 144,
    };
    this.intro = {
      string1: `You and your chick made an escape from \n the chicken farm! As you're running away \n from Jean-Paul the farmer, you look back \nonly to notice your chick is running far \n behind you because of its little legs.`,
      x1: 400,
      y1: 110,
      r: 41,
      g: 148,
      b: 56,
      string2:
        "Using the arrow keys, make your way to your chick before Jean-Paul does.",
      x2: 400,
      y2: 340,
      string3:
        "= moves 1 square at a time in any direction \n \n    = moves 1 square in diagonal only \n \n   = moves 2 squares in any direction",
      x3: 420,
      y3: 400,
      r3: 197,
      g3: 237,
      b3: 154,
      string4: "Be careful not to get captured as well.",
      x4: 400,
      y4: 570,
      string5: "Press the               key to begin",
      x5: 400,
      y5: 658,
    };
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
  //-----------------------------INTRODUCTION----------------------------------
  introduction() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
    //Title box image in the intro
    image(
      introBgImg,
      insertImage.introBg.x,
      insertImage.introBg.y,
      insertImage.introBg.w,
      insertImage.introBg.h
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
    text(this.intro.string4, this.intro.x4, this.intro.y4);
    //Text explaing to hit the "enter" key to continue
    textSize(26);
    text(this.intro.string5, this.intro.x5, this.intro.y5);
    //Enter button image displayed on the title screen
    image(
      enterButtonImg,
      insertImage.enterButton.x,
      insertImage.enterButton.y,
      insertImage.enterButton.w,
      insertImage.enterButton.h
    );
    //Chicken image displayed on the title screen
    image(
      chickenImg,
      insertImage.introChicken.x,
      insertImage.introChicken.y,
      insertImage.introChicken.w,
      insertImage.introChicken.h
    );
    //Chick image displayed on the title screen
    image(
      chickImg,
      insertImage.introChick.x,
      insertImage.introChick.y,
      insertImage.introChick.w,
      insertImage.introChick.h
    );
    //Farmer image displayed on the title screen
    image(
      farmerImg,
      insertImage.introFarmer.x,
      insertImage.introFarmer.y,
      insertImage.introFarmer.w,
      insertImage.introFarmer.h
    );
  }
  //-----------------------------SIMULATION----------------------------------
  simulation() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
  }
  //-----------------------------END----------------------------------
  end() {
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
  }
  //Checks which state is being called and displays it
  checkState() {
    if (this.state === "introduction") {
      this.introduction();
    }
    if (this.state === "simulation") {
      this.simulation();
    }
    if (this.state === "end") {
      this.end();
    }
  }
}
