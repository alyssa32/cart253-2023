/**
 * Pac-Man
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
let food = {
  x: 80,
  y: 490,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
};

let boxOne = {
  x: 0,
  y: 200,
  w: 200,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxTwo = {
  x: 100,
  y: 380,
  w: 400,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxThree = {
  x: 710,
  y: 560,
  w: 300,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxFour = {
  x: 300,
  y: 740,
  w: 300,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let chickenImg = {
  x: 500,
  y: 250,
  w: 10,
  h: 5,
  minHeight: 10,
  maxHeight: 990,
};

let blueGhostImg = {
  x: 10,
  y: 250,
  w: 90,
  h: 90,
  speed: 2,
};

let pinkGhostImg = {
  x: 500,
  y: 430,
  w: 90,
  h: 90,
  speed: 2,
};

let greenGhostImg = {
  x: 210,
  y: 610,
  w: 90,
  h: 90,
  speed: 2,
};

let orangeGhostImg = {
  x: 810,
  y: 800,
  w: 190,
  h: 90,
  speed: 2,
};

let canvasX = 1000;
let canvasY = 1000;

/**
 * Preloads the Chicken and Ghost Images
 */
function preload() {
  chickenImg = loadImage("assets/images/chicken.png");
  blueGhostImg = loadImage("assets/images/blueGhost.PNG");
  pinkGhostImg = loadImage("assets/images/pinkGhost.PNG");
  greenGhostImg = loadImage("assets/images/greenGhost.PNG");
  orangeGhostImg = loadImage("assets/images/orangeGhost.PNG");
}

/**
 * Draws the Canvas Size
 */
function setup() {
  createCanvas(canvasX, canvasY);
}

/**
 * Draws the Characters and Obstacles, and Animates Them
 */
function draw() {
  // Draws the Black Background
  background(0);

  // ================= FOOD ===========================

  //Draws the Food Nuggets using a Loop
  noStroke();
  fill(food.r, food.g, food.b);

  let x = food.x;
  let numSegments = 13;

  for (let i = 0; i < numSegments; i++) {
    ellipse(x, food.y, food.size);
    x = x + 70;
  }

  // ================= CHICKEN ========================

  // Constrain the chicken's x-coordinate
  chickenImg.x = constrain(chickenImg.x, 0, canvasX - chickenImg.width);

  // Constrain the chicken's y-coordinate
  chickenImg.y = constrain(chickenImg.y, 0, canvasY - chickenImg.height);

  //Draws the Chicken
  image(
    chickenImg,
    chickenImg.x,
    chickenImg.y,
    chickenImg.width,
    chickenImg.height
  );

  // ======================== BOX =====================

  //Draws the First Box
  stroke(boxOne.r, boxOne.g, boxOne.b);
  strokeWeight(4);
  fill(0);
  rect(boxOne.x, boxOne.y, boxOne.w, boxOne.h);

  //Draws the Second Box
  rect(boxTwo.x, boxTwo.y, boxTwo.w, boxTwo.h);

  //Draws the Third Box
  rect(boxThree.x, boxThree.y, boxThree.w, boxThree.h);

  //Draws the Fourth Box
  rect(boxFour.x, boxFour.y, boxFour.w, boxFour.h);

  // ====================== GHOST ==================

  // Calls the drawGhosts() function to draw all the ghosts
  drawGhosts();

  // Calls the updateGhosts() funtion to make them move side to side
  updateGhosts();
}

// ============ CHICKEN COLLISION WITH BOXES ============

// Function called every time the mouse moves and is not clicked
function mouseMoved() {
  // Update the chicken's position based on the mouse movement
  chickenImg.x = mouseX;
  chickenImg.y = mouseY;

  // Check collision with box one
  if (
    chickenImg.x + chickenImg.width > boxOne.x &&
    chickenImg.x < boxOne.x + boxOne.w &&
    chickenImg.y + chickenImg.height > boxOne.y &&
    chickenImg.y < boxOne.y + boxOne.h
  ) {
    // Adjust chicken's position to avoid collision with box one
    chickenImg.x = boxOne.x + boxOne.w;
  }

  // Check collision with box two
  if (
    chickenImg.x + chickenImg.width > boxTwo.x &&
    chickenImg.x < boxTwo.x + boxTwo.w &&
    chickenImg.y + chickenImg.height > boxTwo.y &&
    chickenImg.y < boxTwo.y + boxTwo.h
  ) {
    // Adjust chicken's position to avoid collision with box two
    chickenImg.x = boxTwo.x + boxTwo.w;
  }

  // Check collision with box three
  if (
    chickenImg.x + chickenImg.width > boxThree.x &&
    chickenImg.x < boxThree.x + boxThree.w &&
    chickenImg.y + chickenImg.height > boxThree.y &&
    chickenImg.y < boxThree.y + boxThree.h
  ) {
    // Adjust chicken's position to avoid collision with box three
    chickenImg.x = boxThree.x + boxThree.w;
  }

  // Check collision with box four
  if (
    chickenImg.x + chickenImg.width > boxFour.x &&
    chickenImg.x < boxFour.x + boxFour.w &&
    chickenImg.y + chickenImg.height > boxFour.y &&
    chickenImg.y < boxFour.y + boxFour.h
  ) {
    // Adjust chicken's position to avoid collision with box four
    chickenImg.x = boxFour.x + boxFour.w;
  }
}

// Draw the ghosts
function drawGhosts() {
  // Draws the Blue Ghost
  image(
    blueGhostImg,
    blueGhostImg.x,
    blueGhostImg.y,
    blueGhostImg.w,
    blueGhostImg.h
  );

  // Draws the Pink Ghost
  image(
    pinkGhostImg,
    pinkGhostImg.x,
    pinkGhostImg.y,
    pinkGhostImg.w,
    pinkGhostImg.h
  );

  // Draws the Green Ghost
  image(
    greenGhostImg,
    greenGhostImg.x,
    greenGhostImg.y,
    greenGhostImg.w,
    greenGhostImg.h
  );

  // Draws the Orange Ghost
  image(
    orangeGhostImg,
    orangeGhostImg.x,
    orangeGhostImg.y,
    orangeGhostImg.w,
    orangeGhostImg.h
  );
}

// Update the position of the ghosts
function updateGhosts() {
  // Move the blue ghost
  blueGhostImg.x += blueGhostImg.speed;
  if (blueGhostImg.x > canvasX - blueGhostImg.w || blueGhostImg.x < 0) {
    blueGhostImg.speed *= -1;
  }

  // Move the pink ghost
  pinkGhostImg.x += pinkGhostImg.speed;
  if (pinkGhostImg.x > canvasX - pinkGhostImg.w || pinkGhostImg.x < 0) {
    pinkGhostImg.speed *= -1;
  }

  // Move the green ghost
  greenGhostImg.x += greenGhostImg.speed;
  if (greenGhostImg.x > canvasX - greenGhostImg.w || greenGhostImg.x < 0) {
    greenGhostImg.speed *= -1;
  }

  // Move the orange ghost
  orangeGhostImg.x += orangeGhostImg.speed;
  if (orangeGhostImg.x > canvasX - orangeGhostImg.w || orangeGhostImg.x < 0) {
    orangeGhostImg.speed *= -1;
  }
}
