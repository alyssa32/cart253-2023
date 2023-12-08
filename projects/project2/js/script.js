/**
 * Mission: Free-Range
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let canvasX = 800;
let canvasY = 800;

let game;
let insertImage;
let mic;
//Images
let chickenImg;
let chickImg;
let farmerImg;
let farmer2Img;
let introBgImg;
let enterButtonImg;
let seedImg;
let dogImg;
let winBgImg;
let loseBgImg;
//Sounds
let popSFX;

//Preloads all images used
function preload() {
  //images
  chickenImg = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick.png");
  farmerImg = loadImage("assets/images/farmer.png");
  farmer2Img = loadImage("assets/images/farmer2.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
  introBgImg = loadImage("assets/images/introBg.png");
  seedImg = loadImage("assets/images/seed.png");
  dogImg = loadImage("assets/images/dog.png");
  winBgImg = loadImage("assets/images/winBg.png");
  loseBgImg = loadImage("assets/images/loseBg.png");
  //sounds
  popSFX = loadSound("assets/sounds/pop.mp3");

  game = new Game();
  insertImage = new InsertImage();

  insertImage.seedDisplay(265, 105);
  insertImage.seedDisplay(185, 665);
  insertImage.seedDisplay(505, 345);
}

/**
 * Creates the canvas size and a New Game, and sets up the microphone to be used
 */
function setup() {
  //Creates the square canvas size
  createCanvas(canvasX, canvasY);
  //sets up the audio before it is used
  userStartAudio();
  //Makes a new AudioIn object
  mic = new p5.AudioIn();
  //asks for permision to use the mic
  mic.start();
}
//Prints the current state and checks for the audio input level
function draw() {
  //Prints the current displayed state
  game.printState();
  //Displays the state being called
  game.checkState();
  //Prints out the current audio input level
  let level = mic.getLevel();
  console.log(level);
  //If the audio input level is greater than 0.1, then the scene will switch to the next game
  if (level > 0.1) {
    game.changeToGame();
    //Resets the chicken's location back to the top left
    insertImage.chicken.x = 5;
    insertImage.chicken.y = 80;
    //Resets the chicken's location back to the top left
    insertImage.chick.x = 570;
    insertImage.chick.y = 570;
    //Resets the farmer's location back to the middle
    insertImage.farmer.x = 400;
    insertImage.farmer.y = 400;
    //Resets the dog's location back to the middle
    insertImage.farmer.x = 320;
    insertImage.farmer.y = 400;
  }
}
// =================== STATE CHANGES ==========================
//Changes the to the next state when the "enter" key is pressed
function keyPressed() {
  if (keyCode === ENTER) {
    game.changeToStory();
    //Resets all character variables back to false
    insertImage.chicken.captured = false;
    insertImage.chick.captured = false;
    insertImage.chicken.capturedByDog = false;
    insertImage.chick.capturedByDog = false;
    insertImage.chicken.win = false;
    //Resets all seeds back to not eaten
    insertImage.seedArray[i].eaten = false;
  }
  //Changes the to the next state when the "shift" key is pressed
  if (keyCode === SHIFT) {
    if (game.state === "story1") {
      game.changeToGame();
    } else if (game.state === "story2") {
      game.changeToGame();
    }
  }
}
// =================== CHARACTER MOVEMENTS ==========================
// KeyBoard Arrows control the Chicken
function keyReleased() {
  let move = 80;
  if (keyCode === LEFT_ARROW) {
    insertImage.chicken.x -= move;
  }
  if (keyCode === RIGHT_ARROW) {
    insertImage.chicken.x += move;
  }
  if (keyCode === UP_ARROW) {
    insertImage.chicken.y -= move;
  }
  if (keyCode === DOWN_ARROW) {
    insertImage.chicken.y += move;
  }
  if (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === UP_ARROW ||
    keyCode === DOWN_ARROW
  ) {
  }
  //Delays the farmer's moves by 0.25 seconds
  setTimeout(function enableFarmerMovement() {
    insertImage.farmerMovement();
  }, 250);
  //Delays the dog's moves by 0.25 seconds (same as farmer)
  setTimeout(function enableDogMovement() {
    insertImage.dogMovement();
  }, 250);
  //Delays the chick's moves by 0.25 seconds
  setTimeout(function enableChickMovement() {
    insertImage.chickMovement();
  }, 250);
}
