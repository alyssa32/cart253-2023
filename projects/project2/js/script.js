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

let bg = {
  r: 135,
  g: 199,
  b: 144,
};

let bgSquares = {
  r: 111,
  g: 176,
  b: 112,
  w: 80,
  h: 80,
  amount: 5,
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(canvasX, canvasY);
  background(bg.r, bg.g, bg.b);
}

/**
 * Description of draw()
 */
function draw() {
  //Calls the loop functions to draw the dark green squares of the background
  bgSquaresLoop(0, 0);
  bgSquaresLoop(80, 80);
  bgSquaresLoop(0, 160);
  bgSquaresLoop(80, 240);
  bgSquaresLoop(0, 320);
  bgSquaresLoop(80, 400);
  bgSquaresLoop(0, 480);
  bgSquaresLoop(80, 560);
  bgSquaresLoop(0, 640);
  bgSquaresLoop(80, 720);
}
//Draws the background's rows of dark squares using a For Loop
function bgSquaresLoop(x, y) {
  for (let i = 0; i < bgSquares.amount; i++) {
    noStroke();
    fill(bgSquares.r, bgSquares.g, bgSquares.b);
    rect(x, y, bgSquares.w, bgSquares.h);
    x = x + 160;
  }
}
