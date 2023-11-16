class Scene {
  constructor() {
    this.state = "introduction";
    this.intro = {
      string:
        "Hello, nice to meet you! \n Can I hear your best dog impression?",

      //Placement of the string
      x: 400,
      y: 400,
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
      y1: 300,
      x2: 400,
      y2: 500,
      //bg colours
      r: 135,
      g: 199,
      b: 144,
    };
    this.endBg = {
      r: 15,
      g: 199,
      b: 144,
    };
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
  //Displays the first scene
  introduction() {
    background(this.intro.r, this.intro.g, this.intro.b);
    textSize(this.intro.size);
    textAlign(CENTER);
    text(this.intro.string, this.intro.x, this.intro.y);
  }
  //Displays the second scene
  middle() {
    background(this.mid.r, this.mid.g, this.mid.b);
    textSize(this.intro.size);
    textAlign(CENTER);
    text(this.mid.string1, this.mid.x1, this.mid.y1);
    text(this.mid.string2, this.mid.x2, this.mid.y2);
  }
  //Displays the final scene
  end() {
    background(this.endBg.r, this.endBg.g, this.endBg.b);
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
  //Changes the state to "middle"
  changeToMiddle() {
    if (this.state === "introduction") {
      this.state = "middle";
    }
  }
  //Changes the state to "end"
  changeToEnd() {
    if (this.state === "middle") {
      this.state = "end";
    }
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
}
