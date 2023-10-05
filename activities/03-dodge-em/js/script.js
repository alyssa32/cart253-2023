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
  y: 470,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
};

let boxOne = {
  x: 0,
  y: 180,
  w: 200,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxTwo = {
  x: 100,
  y: 360,
  w: 400,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxThree = {
  x: 700,
  y: 540,
  w: 300,
  h: 50,
  r: 5,
  g: 68,
  b: 255,
};

let boxFour = {
  x: 300,
  y: 720,
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
 * Description of setup
 */
function setup() {
  createCanvas(1000, 1000);
}

/**
 * Description of draw()
 */
function draw() {
  // Draws the Black Background
  background(0);

  //Draws the Food Nuggets using a Loop
  noStroke();
  fill(food.r, food.g, food.b);

  let x = food.x;
  let numSegments = 13;

  for (let i = 0; i < numSegments; i++) {
    ellipse(x, food.y, food.size);
    x = x + 70;
  }

  //Draws the Chicken
  image(chickenImg, mouseX, mouseY, chickenImg.w, chickenImg.h);
  imageMode(CENTER);
  chickenImg.y = mouseY;
  chickenImg.y = constrain(
    chickenImg.y,
    chickenImg.minHeight,
    chickenImg.maxHeight
  );
  chickenImg.x = mouseX;
  chickenImg.x = constrain(
    chickenImg.x,
    chickenImg.minHeight,
    chickenImg.maxHeight
  );

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

  //Draws the Blue Ghost
  image(blueGhostImg, 50, 300, 90, 90);

  //Draws the Pink Ghost
  image(pinkGhostImg, 500, 480, 90, 90);

  //Draws the Green Ghost
  image(greenGhostImg, 210, 660, 90, 90);

  //Draws the Orange Ghost
  image(orangeGhostImg, 810, 850, 90, 90);

  orangeGhostImg.x = orangeGhostImg.x + orangeGhostImg.speed;

  if (orangeGhostImg.x > width) {
    orangeGhostImg.speed = -orangeGhostImg.speed;
  }

  if (orangeGhostImg.x < 0) {
    orangeGhostImg.speed = -orangeGhostImg.speed;
  }
}
