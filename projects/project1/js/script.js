/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
let bg = {
  r: 135,
  g: 199,
  b: 144,
};

let bgSquares = {
  r: 90,
  g: 161,
  b: 87,
  w: 80,
  h: 80,
};
/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(800, 800);
}

/**
 * Description of draw()
 */
function draw() {
  // =================== BACKGROUND =========================
  //Draws the light green background
  background(bg.r, bg.g, bg.b);
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

/**
 * Draws the background's rows of dark squares using a For Loop
 */
function bgSquaresLoop(x, y) {
  for (let i = 0; i < 5; i++) {
    noStroke();
    fill(bgSquares.r, bgSquares.g, bgSquares.b);
    rect(x, y, bgSquares.w, bgSquares.h);
    x = x + 160;
  }
}
