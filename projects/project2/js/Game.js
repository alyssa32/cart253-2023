class Game {
  constructor() {
    this.state = "introduction";
    //Light green background
    this.bg = {
      r: 135,
      g: 199,
      b: 144,
    };
  }
  //Prints the current state
  printState() {
    print(this.state);
  }
  //Changes the state to "simulation"
  changeState() {
    this.state = "simulation";
    //Light green background
    background(this.bg.r, this.bg.g, this.bg.b);
  }
}
