/**
 * Pac-Man
 * Alyssa Durdey
 *
 * A playable Pac-Man-like game! By controling the chicken, the player must eat all the seeds whilst avoiding the dangerous ghosts.
 */

"use strict";
let food1 = {
  x: 600,
  y: 60,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
  eaten: false,
};

let food2 = {
  x: 100,
  y: 240,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
  eaten: false,
};

let food3 = {
  x: 500,
  y: 420,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
  eaten: false,
};

let food4 = {
  x: 600,
  y: 600,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
  eaten: false,
};

let food5 = {
  x: 230,
  y: 740,
  size: 15,
  r: 255,
  g: 227,
  b: 115,
  eaten: false,
};

let boxOne = {
  x: 0,
  y: 130,
  w: 450,
  h: 40,
  r: 5,
  g: 68,
  b: 255,
};

let boxTwo = {
  x: 100,
  y: 310,
  w: 500,
  h: 40,
  r: 5,
  g: 68,
  b: 255,
};

let boxThree = {
  x: 400,
  y: 490,
  w: 410,
  h: 40,
  r: 5,
  g: 68,
  b: 255,
};

let boxFour = {
  x: 200,
  y: 650,
  w: 300,
  h: 40,
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

let blueGhost = {
  x: 10,
  y: 195,
  w: 90,
  h: 90,
  speed: 4,
};

let pinkGhost = {
  x: 500,
  y: 375,
  w: 90,
  h: 90,
  speed: 4,
};

let greenGhost = {
  x: 210,
  y: 550,
  w: 90,
  h: 90,
  speed: 4,
};

let orangeGhost = {
  x: 670,
  y: 700,
  w: 90,
  h: 90,
  speed: 4,
};

let win = {
  x: 400,
  y: 400,
  string: `You Win!`,
};

let lose = {
  x: 400,
  y: 400,
  string: `Game Over`,
};

let canvasX = 800;
let canvasY = 800;
let blueGhostImg;
let pinkGhostImg;
let greenGhostImg;
let orangeGhostImg;

let foodArray = [food1, food2, food3, food4, food5];
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
 * Draws the Canvas Size and Hides the Cursor
 */
function setup() {
  createCanvas(canvasX, canvasY);
  noCursor();
}

/**
 * Draws the Characters and Obstacles, and Animates Them
 */
function draw() {
  // Draws the Black Background
  background(0);

  // ================= FOOD ===========================
  //Calls the Food Function
  checkEaten();
  drawFood();
  //Calls the checkWin function
  checkWin();

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

  //Calls the mouseMoved function
  mouseMoved(boxOne);
  mouseMoved(boxTwo);
  mouseMoved(boxThree);
  mouseMoved(boxFour);
  // ====================== GHOST ==================

  // Calls the drawGhosts() function to draw all the ghosts
  drawGhost(blueGhostImg, blueGhost);
  drawGhost(pinkGhostImg, pinkGhost);
  drawGhost(greenGhostImg, greenGhost);
  drawGhost(orangeGhostImg, orangeGhost);

  // Calls the moveGhosts() funtion to make the ghosts move side to side
  moveGhost(blueGhost);
  moveGhost(pinkGhost);
  moveGhost(greenGhost);
  moveGhost(orangeGhost);
}

// ============ CHICKEN COLLISION WITH BOXES ============

// Function called every time the mouse moves and is not clicked
function mouseMoved(box) {
  // Update the chicken's position based on the mouse movement
  chickenImg.x = mouseX;
  chickenImg.y = mouseY;
  // Check collision with box one
  if (
    chickenImg.x + chickenImg.width > box.x &&
    chickenImg.x < box.x + box.w &&
    chickenImg.y + chickenImg.height > box.y &&
    chickenImg.y < box.y + box.h
  ) {
    // Adjust chicken's position to avoid collision with box one
    chickenImg.x = box.x + box.w;
  }
  // // Check collision with box two
  // if (
  //   chickenImg.x + chickenImg.width > boxTwo.x &&
  //   chickenImg.x < boxTwo.x + boxTwo.w &&
  //   chickenImg.y + chickenImg.height > boxTwo.y &&
  //   chickenImg.y < boxTwo.y + boxTwo.h
  // ) {
  //   // Adjust chicken's position to avoid collision with box two
  //   chickenImg.x = boxTwo.x + boxTwo.w;
  // }
  // // Check collision with box three
  // if (
  //   chickenImg.x + chickenImg.width > boxThree.x &&
  //   chickenImg.x < boxThree.x + boxThree.w &&
  //   chickenImg.y + chickenImg.height > boxThree.y &&
  //   chickenImg.y < boxThree.y + boxThree.h
  // ) {
  //   // Adjust chicken's position to avoid collision with box three
  //   chickenImg.x = boxThree.x + -boxThree.w;
  // }
  // // Check collision with box four
  // if (
  //   chickenImg.x + chickenImg.width > boxFour.x &&
  //   chickenImg.x < boxFour.x + boxFour.w &&
  //   chickenImg.y + chickenImg.height > boxFour.y &&
  //   chickenImg.y < boxFour.y + boxFour.h
  // ) {
  //   // Adjust chicken's position to avoid collision with box four
  //   chickenImg.x = boxFour.x + boxFour.w;
  // }
}
/** 
 // Draws the Ghost Images
*/
function drawGhost(ghostImg, ghost) {
  image(ghostImg, ghost.x, ghost.y, ghost.w, ghost.h);
}
/** 
 // Moves the Ghosts Side-to-Side
*/
function moveGhost(ghost) {
  ghost.x += ghost.speed;

  if (ghost.x > canvasX - ghost.w || ghost.x < 0) {
    ghost.speed *= -1;
  }
}
/** 
 // Checks if the Foods are Eaten
*/
function checkEaten() {
  if (
    chickenImg.x + chickenImg.width > food1.x &&
    chickenImg.x < food1.x + food1.size &&
    chickenImg.y + chickenImg.height > food1.y &&
    chickenImg.y < food1.y + food1.size
  ) {
    food1.eaten === true;
  }
}

/** 
 // Draws the Food
*/
function drawFood() {
  noStroke();
  for (let i = 0; i < 5; i++) {
    if (foodArray[i].eaten === true) {
      fill(0);
    } else {
      fill(food1.r, food1.g, food1.b);
    }
    ellipse(foodArray[i].x, foodArray[i].y, foodArray[i].size);
  }
}

/** 
 // Draws the Winning End Screen
*/
function checkWin() {
  // if (food1.eaten && food2.eaten && food3.eaten && food4.eaten) {
  // //     textSize(60);
  // textAlign(CENTER);
  // textStyle(BOLD);
  // text(win.string, win.x, win.y);
  // // }
}
