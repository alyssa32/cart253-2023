/**
 * Title of Project
 * Author Name
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

let chicken = {
  x: 5,
  y: 0,
  w: 70,
  h: 70,
};

let chick = {
  x: 730,
  y: 730,
  w: 60,
  h: 60,
};

let farmer = {
  x: 405,
  y: 405,
  w: 70,
  h: 70,
};

let chickenImg;
let chickImg;
let farmerImg;
/**
 * Preloads the image of the chicken, chick, and farmer
 */
function preload() {
  chickenImg = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick.png");
  farmerImg = loadImage("assets/images/farmer.png");
}

/**
 * Sets the canvas size
 */
function setup() {
  createCanvas(canvasX, canvasY);
}

/**
 * Description of draw()
 */
function draw() {
  // ======================== BACKGROUND =========================
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

  // ======================== CHICKEN =========================
  //Draws the chicken image
  image(chickenImg, chicken.x, chicken.y, chicken.w, chicken.h);
  //Calls the function to control the chicken using the arrow keys
  handleInput();
  // Constrain the chicken's x-coordinate
  chicken.x = constrain(chicken.x, 0, canvasX - chicken.w);
  // Constrain the chicken's y-coordinate
  chicken.y = constrain(chicken.y, 0, canvasY - chicken.h);

  // ======================== CHICK =========================
  //Draws the chick image
  image(chickImg, chick.x, chick.y, chick.w, chick.h);

  // ======================== FARMER =========================
  //Draws the farmer image
  image(farmerImg, farmer.x, farmer.y, farmer.w, farmer.h);
}

/**
 * Draws the background's rows of dark squares using a For Loop
 */
function bgSquaresLoop(x, y) {
  for (let i = 0; i < bgSquares.amount; i++) {
    noStroke();
    fill(bgSquares.r, bgSquares.g, bgSquares.b);
    rect(x, y, bgSquares.w, bgSquares.h);
    x = x + 160;
  }
}
// =================== KEYBOARD ARROWS ==========================
/** 
//  // KeyBoard Arrows control the Chicken
// */
function handleInput() {
  let speed = 6.2;

  if (keyIsDown(LEFT_ARROW)) {
    chicken.x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    chicken.x += speed;
  }
  if (keyIsDown(UP_ARROW)) {
    chicken.y -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    chicken.y += speed;
  }
}
