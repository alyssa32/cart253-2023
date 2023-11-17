class Scene {
  constructor() {
    this.state = "introduction";
    this.intro = {
      string:
        "Hello, nice to meet you! \n Can I hear your best dog impression?",
      //Placement of the string
      x: 400,
      y: 270,
      //String size
      size: 33,
      //bg colours
      r: 166,
      g: 247,
      b: 239,
    };
    this.mid = {
      string1: "…you really just barked at your screen. I was joking.",
      string2:
        "This is a little awkward. \n Anyways, press the “enter key” for a little surprise.",
      x1: 400,
      y1: 150,
      x2: 400,
      y2: 650,
      //bg colours
      r: 135,
      g: 199,
      b: 144,
    };
    this.endBg = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.dog = {
      //The bark dog properties
      x1: 400,
      y1: 550,
      w1: 300,
      h1: 360,
      //The judging dog properties
      x2: 400,
      y2: 400,
      w2: 300,
      h2: 360,
      //The threatening dog properties
      x3: 400,
      y3: 370,
      w3: 400,
      h3: 600,
    };
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
  //Displays the first scene
  introduction() {
    //blue background
    background(this.intro.r, this.intro.g, this.intro.b);
    textSize(this.intro.size);
    textAlign(CENTER);
    text(this.intro.string, this.intro.x, this.intro.y);
    //Displays the image of the barking dog
    imageMode(CENTER);
    image(barkImg, this.dog.x1, this.dog.y1, this.dog.w1, this.dog.h1);
  }
  //Displays the second scene
  middle() {
    //Draws the green background
    background(this.mid.r, this.mid.g, this.mid.b);
    textSize(this.intro.size);
    textAlign(CENTER);
    text(this.mid.string1, this.mid.x1, this.mid.y1);
    text(this.mid.string2, this.mid.x2, this.mid.y2);
    //Displays the image of the judging dog
    imageMode(CENTER);
    image(judgingDogImg, this.dog.x2, this.dog.y2, this.dog.w2, this.dog.h2);
  }
  //Displays the final scene
  end() {
    //Draws the yellow background
    background(this.endBg.r, this.endBg.g, this.endBg.b);
    //Displays the image of the threatening dog
    imageMode(CENTER);
    image(
      threateningDogImg,
      this.dog.x3,
      this.dog.y3,
      this.dog.w3,
      this.dog.h3
    );
  }
  //Checks which scene is being called and displays it
  checkScene() {
    if (this.state === "introduction") {
      this.introduction();
    }
    if (this.state === "middle") {
      this.middle();
    }
    if (this.state === "end") {
      this.end();
    }
  }
  //Changes the state to "middle" only if the current state is at "introduction"
  changeToMiddle() {
    if (this.state === "introduction") {
      this.state = "middle";
    }
  }
  //Changes the state to "end" only if the current state is at "middle"
  changeToEnd() {
    if (this.state === "middle") {
      this.state = "end";
    }
  }
}
