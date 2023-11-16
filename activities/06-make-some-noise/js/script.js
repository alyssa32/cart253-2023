/**
 * Make Some Noise
 * Alyssa Durdey
 *
 * A program that allows the user to change between scenes using the amplitude of their voice.
 */

"use strict";

let canvasX = 800;
let canvasY = 800;

let mic;
let scene;

let judgingDogImg;
let threateningDogImg;
let barkImg;

/**
 * Description of preload
 */
function preload() {
  barkImg = loadImage("assets/images/dog.png");
  //   judgingDogImg = loadImage("assets/images/dog1.png");
  //   threateningDogImg = loadImage("assets/images/dog2.png");
}

/**
 * Description of setup
 */
function setup() {
  createCanvas(canvasX, canvasY);
  //Makes a new AudioIn object
  mic = new p5.AudioIn();
  //asks for permision to use the mic
  mic.start();
  scene = new Scene();
}

/**
 * Description of draw()
 */
function draw() {
  scene.printState();
  scene.checkScene();

  let level = mic.getLevel();
  console.log(level);

  if (level > 0.1) {
    scene.changeToMiddle();
  }
}
//Changes the state to "end" when the "enter" key is pressed
function keyPressed() {
  if (keyCode === ENTER) {
    scene.changeToEnd();
  }
}
