/**
 * Ran Away Chickens
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
//Images
let chickenImg;
let chickImg;
let farmerImg;
let farmer2Img;
let introBgImg;
let enterButtonImg;

/**
 * Preloads all images used
 */
function preload() {
  chickenImg = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick.png");
  farmerImg = loadImage("assets/images/farmer.png");
  farmer2Img = loadImage("assets/images/farmer2.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
  introBgImg = loadImage("assets/images/introBg.png");
}

/**
 * Creates the canvas size and a New Game
 */
function setup() {
  //Creates the square canvas size
  createCanvas(canvasX, canvasY);
  game = new Game();
  insertImage = new InsertImage();
}

/**
 * Prints the current state
 */
function draw() {
  game.printState();
  game.checkState();
}
