/**
 * The Runaway Chickens
 * Alyssa Durdey
 *
 * By using the arrow keys, the player must control the chicken to get to its chick. Taking turns, the chicken can only move one square at a time, whilst the chick randomly moves one space diagonally. However, both the chicken and the chick must avoid the farmer, who moves two spaces at a time in any direction.
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

let introChicken = {
  x: 160,
  y: 375,
  w: 30,
  h: 30,
};

let introChick = {
  x: 220,
  y: 430,
  w: 25,
  h: 25,
};
let introFarmer = {
  x: 220,
  y: 480,
  w: 30,
  h: 30,
};

let enterButton = {
  x: 335,
  y: 610,
  w: 90,
  h: 90,
};

let intro = {
  string1: `You and your chick made an escape from \n the chicken farm! As you're running away \n from Jean-Guy the farmer, you look back \nonly to notice your chick is running far \n behind you because of its little legs.`,
  x1: 400,
  y1: 110,
  r: 41,
  g: 148,
  b: 56,
  string2:
    "Using the arrow keys, make your way to your chick before Jean-Guy does.",
  x2: 400,
  y2: 340,
  string3:
    "= moves 1 square at a time in any direction \n \n    = moves 1 square in diagonal only \n \n   = moves 2 squares in any direction",
  x3: 420,
  y3: 400,
  r3: 197,
  g3: 237,
  b3: 154,
  string4: "Be careful not to get captured as well.",
  x4: 400,
  y4: 570,
  string5: "Press the               key to begin",
  x5: 400,
  y5: 658,
};

let chicken = {
  x: 5,
  y: 0,
  w: 70,
  h: 70,
  captured: false,
  win: false,
};

let chick = {
  x: 730,
  y: 730,
  w: 60,
  h: 60,
  captured: false,
};

let farmer = {
  x: 405,
  y: 405,
  w: 70,
  h: 70,
};

let win = {
  string1: `YOU WON!`,
  x1: 400,
  y1: 380,
  string2: `You ran away with your chick to start a free-range life.`,
  x2: 400,
  y2: 450,
  r: 255,
  g: 226,
  b: 145,
};

let loseChicken = {
  string1: `YOU LOST!`,
  x1: 400,
  y1: 380,
  string2: `The farmer caught you and sold you to the neighbour.`,
  x2: 400,
  y2: 450,
  r: 58,
  g: 105,
  b: 58,
};

let state = "introduction";

let chickenImg;
let chickImg;
let farmerImg;
let enterButtonImg;
/**
 * Preloads the image of the chicken, chick, and farmer
 */
function preload() {
  chickenImg = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick.png");
  farmerImg = loadImage("assets/images/farmer.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
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
  if (state === "introduction") {
    introduction();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "winGame") {
  } else if (state === "chickenGameOver") {
  } else if (state === "chickGameOver") {
  }

  // ======================== CALLING FUNCTIONS =========================
  //Calls the function to control the chicken using the arrow keys
  handleInput();
  //Calls the function that checks if chicken colllides with chick
  chickenChickCollide();
  //Calls the function that displays the winning end screen if chicken collides with chick
  winGame();
  //Calls the function that checks if chicken colllides with farmer
  chickenFarmerCollide();
  //Calls the function that displays the end screen if chicken collides with farmer
  chickenGameOver();

  keyPressed();

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
// ======================== BACKGROUND LOOPS =========================
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
// =================== KEYBOARD BUTTONS ==========================
/** 
//  // "Enter" key transitions from the intro page, to the simulation
// */
function keyPressed() {
  if (key === "enter") {
    state = "simulation";
  }
}
/** 
//  // KeyBoard Arrows control the Chicken
// */
function handleInput() {
  let speed = 5;

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
// =================== COLLISIONS ==========================
/** 
//  // Checks if one object collides with another
// */
function checkCollision(obj1, obj2) {
  if (
    obj1.x + obj1.w > obj2.x &&
    obj1.x < obj2.x + obj2.w &&
    obj1.y + obj1.h > obj2.y &&
    obj1.y < obj2.y + obj2.h
  ) {
    return true;
  }
  return false;
}
/** 
 // Handles the movement of the chicken and checks for collisions between characters 
*/
function simulation() {
  //Calls the function to control the chicken using the arrow keys
  handleInput();
  //Calls the function that checks if chicken colllides with chick
  chickenChickCollide();

  //Calls the function that checks if chicken colllides with farmer
  chickenFarmerCollide();
}
/** 
 // Checks if the chicken collides with the farmer (captured)
*/
function chickenFarmerCollide() {
  if (checkCollision(chicken, farmer)) {
    chicken.captured = true;
  }
}
/** 
 // Checks if the chicken collides with the chick (win)
*/
function chickenChickCollide() {
  if (checkCollision(chicken, chick)) {
    chicken.win = true;
  }
}
// =================== TITLE SCREENS ==========================
/** 
// Draws the title screen with the intro and instructions
// */
function introduction() {
  background(bg.r, bg.g, bg.b);
  textSize(33);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(intro.string1, intro.x1, intro.y1);
  textSize(21);
  textStyle(BOLD);
  text(intro.string2, intro.x2, intro.y2);
  fill(intro.r3, intro.g3, intro.b3);
  text(intro.string3, intro.x3, intro.y3);
  fill(intro.r, intro.g, intro.b);
  text(intro.string4, intro.x4, intro.y4);
  textSize(26);
  text(intro.string5, intro.x5, intro.y5);
  //Enter button image displayed on the title screen
  image(
    enterButtonImg,
    enterButton.x,
    enterButton.y,
    enterButton.w,
    enterButton.h
  );
  //Chicken image displayed on the title screen
  image(
    chickenImg,
    introChicken.x,
    introChicken.y,
    introChicken.w,
    introChicken.h
  );
  //Chick image displayed on the title screen
  image(chickImg, introChick.x, introChick.y, introChick.w, introChick.h);
  //Farmer image displayed on the title screen
  image(farmerImg, introFarmer.x, introFarmer.y, introFarmer.w, introFarmer.h);
  log.console("test");
}
/** 
// Draws the winning end screen if the chicken collides with the chick
// */
function winGame() {
  if (chicken.win) {
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(win.r, win.g, win.b);
    textStyle(BOLD);
    text(win.string1, win.x1, win.y1);
    textSize(30);
    text(win.string2, win.x2, win.y2);
    noLoop();
  }
}
/** 
// Draws the losing end screen if the chicken collides with the farmer
// */
function chickenGameOver() {
  if (chicken.captured) {
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(loseChicken.r, loseChicken.g, loseChicken.b);
    textStyle(BOLD);
    text(loseChicken.string1, loseChicken.x1, loseChicken.y1);
    textSize(30);
    text(loseChicken.string2, loseChicken.x2, loseChicken.y2);
    noLoop();
  }
}
