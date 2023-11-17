/**
 * Make Some Noise
 * Alyssa Durdey
 *
 * A program that allows the user to change between scenes using the amplitude of their voice.
 */

"use strict";
//canvas size
let canvasX = 800;
let canvasY = 800;
//New objects
let mic;
let scene;
//The dog images
let judgingDogImg;
let threateningDogImg;
let barkImg;

/**
 * Preloads the dog images
 */
function preload() {
  barkImg = loadImage("assets/images/dog.png");
  judgingDogImg = loadImage("assets/images/judging.jpg");
  threateningDogImg = loadImage("assets/images/threatening.png");
}

/**
 * Creates the canvas, a new AudioIn and Scene object
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
 * Calls the scene switching function and the audio mechanisms
 */
function draw() {
  //Checks which scene the player is at, and calls its function
  scene.checkScene();
  //Prints out the current audio input level
  let level = mic.getLevel();
  console.log(level);
  //If the audio input level is greater than 0.1, then the scene will switch to "middle"
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
