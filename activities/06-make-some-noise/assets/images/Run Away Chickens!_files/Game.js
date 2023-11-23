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
    //Text explaing to hit the "enter" key to continue
    textSize(26);
    text(this.intro.string4, this.intro.x4, this.intro.y4);
    //Chicken image displayed on the title screen
    image(
      chickenImg,
      insertImage.introChicken.x,
      insertImage.introChicken.y,
      insertImage.introChicken.w,
      insertImage.introChicken.h
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
    background(this.bg.r, this.bg.b, this.bg.g);
  }
  //-----------------------------END----------------------------------
  end() {
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
  //Will change to the next state
  changeState() {
    print("is this being called");
    if (this.state === "introduction") {
      this.state = "simulation";
    } else if (this.state === "simulation") {
      this.state = "end";
    } else if (this.state === "end") {
      this.state = "introduction";
    }
  }
}
