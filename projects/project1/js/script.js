/**
 * Runaway Chickens
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

let introBg1 = {
  x: 50,
  y: 50,
  w: 720,
  h: 260,
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

let enterButtonRestart = {
  x: 325,
  y: 550,
  w: 90,
  h: 90,
};

let intro = {
  string1: `You and your chick made an escape from \n the chicken farm! As you're running away \n from Jean-Paul the farmer, you look back \nonly to notice your chick is running far \n behind you because of its little legs.`,
  x1: 400,
  y1: 110,
  r: 41,
  g: 148,
  b: 56,
  string2:
    "Using the arrow keys, make your way to your chick before Jean-Paul does.",
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
  y: 80,
  w: 70,
  h: 70,
  captured: false,
  win: false,
};

let chick = {
  x: 570,
  y: 570,
  w: 60,
  h: 60,
  captured: false,
};

let soldChick = {
  x: 300,
  y: 450,
  w: 30,
  h: 30,
  captured: false,
};

let soldChicken = {
  x: 280,
  y: 430,
  w: 50,
  h: 50,
  captured: false,
};

let winChick = {
  x: 360,
  y: 410,
  w: 40,
  h: 40,
  captured: false,
};

let winChicken = {
  x: 410,
  y: 380,
  w: 70,
  h: 70,
  captured: false,
};

let farmer = {
  x: 400,
  y: 400,
  w: 80,
  h: 80,
};

let loseFarmer = {
  x: 330,
  y: 400,
  w: 80,
  h: 80,
};

let loseFarmer2 = {
  x: 440,
  y: 400,
  w: 80,
  h: 80,
};

let win = {
  string1: `YOU WON!`,
  x1: 400,
  y1: 250,
  string2: `You ran away with your chick to start a free-range life.`,
  x2: 400,
  y2: 320,
  string3: `Press the               key to restart`,
  x3: 400,
  y3: 600,
  r: 58,
  g: 105,
  b: 58,
};

let loseChicken = {
  string1: `YOU LOST!`,
  x1: 400,
  y1: 230,
  string2: `The farmer caught you and sold you
   to the neighbour, Jean-Francois.`,
  x2: 400,
  y2: 300,
  string3: `Press the               key to restart`,
  x3: 400,
  y3: 600,
  r: 58,
  g: 105,
  b: 58,
};

let loseChick = {
  string1: `YOU LOST!`,
  x1: 400,
  y1: 230,
  string2: `The farmer caught your chick and sold it
   to the neighbour, Jean-Francois.`,
  x2: 400,
  y2: 300,
  string3: `Press the               key to restart`,
  x3: 400,
  y3: 600,
  r: 58,
  g: 105,
  b: 58,
};

let state = "introduction";

let chickenImg;
let chickImg;
let farmerImg;
let farmer2Img;
let introBg1Img;
let enterButtonImg;
/**
 * Preloads the image of the chicken, chick, and farmer
 */
function preload() {
  chickenImg = loadImage("assets/images/chicken.png");
  chickImg = loadImage("assets/images/chick.png");
  farmerImg = loadImage("assets/images/farmer.png");
  farmer2Img = loadImage("assets/images/farmer2.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
  introBg1Img = loadImage("assets/images/introBg1.png");
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
  // ======================== STATES =========================
  // Switches from the ttle screen, to the simulation, to the end screens
  if (state === "introduction") {
    introduction();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "winGame") {
    winGame();
  } else if (state === "chickenGameOver") {
    chickenGameOver();
  } else if (state === "chickGameOver") {
  }
  // ======================== CALLING FUNCTIONS =========================
  //Calls the function that checks if chicken colllides with chick
  chickenChickCollide();
  //Calls the function that checks if chicken colllides with farmer
  chickenFarmerCollide();
  //Calls the function that checks if chick colllides with farmer
  chickFarmerCollide();
}
// =================== KEYBOARD BUTTONS ==========================
/** 
//  // "Enter" key transitions from the intro page, to the simulation
// */
function keyPressed() {
  if (keyCode === ENTER) {
    //Chick or Chicken gets captured or chicken wins -> set it back to initial screen
    if (chick.captured || chicken.captured || chicken.win) {
      chicken.win = false;
      chick.captured = false;
      chicken.captured = false;

      state = "introduction";
    } else {
      state = "simulation";
    }
  }
}
/** 
//  // KeyBoard Arrows control the Chicken
// */
function keyReleased() {
  let move = 80;

  if (keyCode === LEFT_ARROW) {
    chicken.x -= move;
  }
  if (keyCode === RIGHT_ARROW) {
    chicken.x += move;
  }
  if (keyCode === UP_ARROW) {
    chicken.y -= move;
  }
  if (keyCode === DOWN_ARROW) {
    chicken.y += move;
  }

  if (
    keyCode === LEFT_ARROW ||
    keyCode === RIGHT_ARROW ||
    keyCode === UP_ARROW ||
    keyCode === DOWN_ARROW
  ) {
    //Basic command to generate the movement of the NPCs
    movementFarmer();
    movementChick();
  }
}
// =================== NPC MOVEMENT ========================
//Assigns random directions for the NPCs to move after the player moves
function movementFarmer() {
  let moveSquare = 160;
  let direction = round(random(1, 4));
  //Moves the farmer two squares to the left
  if (direction === 1) {
    farmer.x -= moveSquare;
  }
  //Moves the farmer two squares to the right
  if (direction === 2) {
    farmer.x += moveSquare;
  }
  //Moves the farmer two squares down
  if (direction === 3) {
    farmer.y += moveSquare;
  }
  //Moves the farmer two squares up
  if (direction === 4) {
    farmer.y -= moveSquare;
  }
}
//Assigns random directions for the NPCs to move after the player moves
function movementChick() {
  let moveSquare = 80;
  let direction = round(random(1, 4));
  //Moves the chick one square diagonal up-left
  if (direction === 1) {
    chick.x -= moveSquare;
    chick.y -= moveSquare;
  }
  //Moves the chick one square diagonal up-right
  if (direction === 2) {
    chick.x += moveSquare;
    chick.y -= moveSquare;
  }
  //Moves the chick one square diagonal down-left
  if (direction === 3) {
    chick.x -= moveSquare;
    chick.y += moveSquare;
  }
  //Moves the chick one square diagonal down-right
  if (direction === 4) {
    chick.x += moveSquare;
    chick.y += moveSquare;
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
 // Handles the Game part of the project
*/
function simulation() {
  // ======================== SIMULATION BACKGROUND =========================
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
  // Constrain the chick's x-coordinate
  chick.x = constrain(chick.x, 0, canvasX - chick.w);
  // Constrain the chick's y-coordinate
  chick.y = constrain(chick.y, 0, canvasY - chick.h);
  // ======================== FARMER =========================
  //Draws the farmer image
  image(farmerImg, farmer.x, farmer.y, farmer.w, farmer.h);
  // Constrain the farmer's x-coordinate
  farmer.x = constrain(farmer.x, 0, canvasX - farmer.w);
  // Constrain the chick's y-coordinate
  farmer.y = constrain(farmer.y, 0, canvasY - farmer.h);
  // ======================== CALLING SCREEN FUNCTIONS =========================
  //Calls the function that displays the winning end screen if chicken collides with chick
  winGame();
  //Calls the function that displays the end screen if chicken collides with farmer
  chickenGameOver();
  //Calls the function that displays the end screen if chick collides with farmer
  chickGameOver();
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
function chickFarmerCollide() {
  if (checkCollision(chick, farmer)) {
    chick.captured = true;
  }
}
// =================== TITLE SCREENS ==========================
/** 
// Draws the title screen with the narrative and instructions
// */
function introduction() {
  background(bg.r, bg.g, bg.b);
  //Title box image in the intro
  image(introBg1Img, introBg1.x, introBg1.y, introBg1.w, introBg1.h);
  //Text explaining the situation
  textSize(28);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(intro.string1, intro.x1, intro.y1);
  //Text stating to use arrow keys
  textSize(21);
  textStyle(BOLD);
  text(intro.string2, intro.x2, intro.y2);
  //Text explaining the movements of the characters
  fill(intro.r3, intro.g3, intro.b3);
  text(intro.string3, intro.x3, intro.y3);
  //Text stateting to avoid the farmer
  fill(intro.r, intro.g, intro.b);
  text(intro.string4, intro.x4, intro.y4);
  //Text explaing to hit the "enter" key to continue
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
}
/** 
// Draws the winning end screen if the chicken collides with the chick
// */
function winGame() {
  if (chicken.win) {
    background(bgSquares.r, bgSquares.g, bgSquares.b);
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(win.r, win.g, win.b);
    textStyle(BOLD);
    text(win.string1, win.x1, win.y1);
    textSize(25);
    text(win.string2, win.x2, win.y2);
    textSize(30);
    text(win.string3, win.x3, win.y3);
    //Display chicken image on winning screen
    image(chickenImg, winChicken.x, winChicken.y, winChicken.w, winChicken.h);
    //Display chick image on winning screen
    image(chickImg, winChick.x, winChick.y, winChick.w, winChick.h);
    //Enter button image displayed on the winning screen
    image(
      enterButtonImg,
      enterButtonRestart.x,
      enterButtonRestart.y,
      enterButtonRestart.w,
      enterButtonRestart.h
    );
  }
}
/** 
// Draws the losing end screen if the chicken collides with the farmer
// */
function chickenGameOver() {
  if (chicken.captured) {
    background(bgSquares.r, bgSquares.g, bgSquares.b);
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(loseChicken.r, loseChicken.g, loseChicken.b);
    textStyle(BOLD);
    text(loseChicken.string1, loseChicken.x1, loseChicken.y1);
    textSize(30);
    text(loseChicken.string2, loseChicken.x2, loseChicken.y2);
    text(loseChicken.string3, loseChicken.x3, loseChicken.y3);
    //noLoop();
    //Red Farmer image displayed on the title screen
    image(
      farmer2Img,
      loseFarmer2.x,
      loseFarmer2.y,
      loseFarmer2.w,
      loseFarmer2.h
    );
    //Blue Farmer image displayed on the title screen
    image(farmerImg, loseFarmer.x, loseFarmer.y, loseFarmer.w, loseFarmer.h);
    //Chicken image displayed on the losing screen
    image(
      chickenImg,
      soldChicken.x,
      soldChicken.y,
      soldChicken.w,
      soldChicken.h
    );
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      enterButtonRestart.x,
      enterButtonRestart.y,
      enterButtonRestart.w,
      enterButtonRestart.h
    );
  }
}
/** 
// Draws the losing end screen if the chick collides with the farmer
// */
function chickGameOver() {
  if (chick.captured) {
    background(bgSquares.r, bgSquares.g, bgSquares.b);
    textSize(60);
    textAlign(CENTER);
    noStroke(0);
    fill(loseChick.r, loseChick.g, loseChick.b);
    textStyle(BOLD);
    text(loseChick.string1, loseChick.x1, loseChick.y1);
    textSize(30);
    text(loseChick.string2, loseChick.x2, loseChick.y2);
    text(loseChick.string3, loseChick.x3, loseChick.y3);
    //Red Farmer image displayed on the title screen
    image(
      farmer2Img,
      loseFarmer2.x,
      loseFarmer2.y,
      loseFarmer2.w,
      loseFarmer2.h
    );
    //Blue Farmer image displayed on the title screen
    image(farmerImg, loseFarmer.x, loseFarmer.y, loseFarmer.w, loseFarmer.h);
    //Chicken image displayed on the losing screen
    image(chickImg, soldChick.x, soldChick.y, soldChick.w, soldChick.h);
    //Enter button image displayed on the losing screen
    image(
      enterButtonImg,
      enterButtonRestart.x,
      enterButtonRestart.y,
      enterButtonRestart.w,
      enterButtonRestart.h
    );
  }
}
