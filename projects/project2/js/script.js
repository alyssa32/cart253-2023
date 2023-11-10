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

/**
 * Description of preload
 */
function preload() {}

/**
 * Creates the canvas size and a New Game
 */
function setup() {
  //Creates the square canvas size
  createCanvas(canvasX, canvasY);
  game = new Game();
}

/**
 * Prints the current state
 */
function draw() {
  game.printState();
}
//Changes the state to "simulation" when the "enter" key is pressed
function keyPressed() {
  if (keyCode === ENTER) {
    game.changeState();
  }
}
