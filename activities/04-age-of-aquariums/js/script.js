/**
 * Hungry Fishy
 ** Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let canvasX = 1000;
let canvasY = 800;

let bg = {
  r: 49,
  g: 130,
  b: 181,
};

let intro = {
  string1: `It's 5PM!\n Which means your owner is coming \n to feed you. Eat as many food pebbles \n as you can but be careful NOT to eat \n your friends. `,
  x1: 500,
  y1: 180,
  r: 16,
  g: 103,
  b: 115,
  string2: "Move around by using the arrow keys",
  x2: 480,
  y2: 550,
  r2: 114,
  g2: 232,
  b2: 216,
  string3: "Press the              key to begin",
  x3: 500,
  y3: 690,
};

let introPanel = {
  x: 40,
  y: 70,
  w: 900,
  h: 400,
};

let enterButton = {
  x: 430,
  y: 640,
  w: 100,
  h: 90,
};

let blueFishIntro = {
  x: 770,
  y: 515,
  w: 50,
  h: 40,
};

let blueFish = {
  x: 500,
  y: 400,
  w: 80,
  h: 60,
};

let goldFish0 = {
  x: 200,
  y: 300,
  w: 45,
  h: 30,
};

let goldFish1 = {
  x: 300,
  y: 300,
  w: 50,
  h: 35,
};

let snail = {
  x: 520,
  y: 700,
  w: 60,
  h: 40,
  speed: 1,
};

let sand = {
  x: 0,
  y: 740,
  w: 1000,
  h: 80,
  r: 237,
  g: 219,
  b: 147,
};

let food = {
  x: 200,
  y: 0,
  w: 20,
  h: 20,
};

let school = [];
let schoolSize = 4;

let state = "simulation";

let blueFishImg;
let goldFish0Img;
let goldFish1Img;
let snailImg;
let foodImg;
let introPanelImg;
let enterButtonImg;

/**
 * Preloads the images of the characters and food
 */
function preload() {
  blueFishImg = loadImage("assets/images/blueFish.png");
  goldFish0Img = loadImage("assets/images/goldFish-0.png");
  goldFish1Img = loadImage("assets/images/goldFish-1.png");
  snailImg = loadImage("assets/images/snail.png");
  foodImg = loadImage("assets/images/food.png");
  introPanelImg = loadImage("assets/images/introPanel.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
}

/**
 * Creates the canvas size
 */
function setup() {
  createCanvas(canvasX, canvasY);
}
/**
 * Description of draw()
 */
function draw() {
  //draws the light blue background
  background(bg.r, bg.g, bg.b);
  // ======================== STATES =========================
  // Switches from the ttle screen, to the simulation, to the end screens
  if (state === "introduction") {
    introduction();
  } else if (state === "simulation") {
    simulation();
  }
  // ======================== CALLING FUNCTIONS =========================
  //Calls the function to make the blue fish continuously move
  keyPressed();
}
/**
  // ======================== INTRODUCTION =========================
 */
function introduction() {
  //Panel image
  drawImage(introPanelImg, introPanel);
  //Blue Fish image
  drawImage(blueFishIntroImg, blueFishIntro);
  //Enter button image
  drawImage(enterButtonImg, enterButton);
  //narrative text
  textSize(40);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(intro.string1, intro.x1, intro.y1);
  textSize(30);
  fill(intro.r2, intro.g2, intro.b2);
  text(intro.string2, intro.x2, intro.y2);
  text(intro.string3, intro.x3, intro.y3);
}
// =================== SIMULATION ==========================
//Draws all the images and calls all the function on the simulation page
// *
function simulation() {
  //draws the sand
  fill(sand.r, sand.g, sand.b);
  noStroke();
  rect(sand.x, sand.y, sand.w, sand.h);
  //draws the snail
  drawImage(snailImg, snail);
  //contrain snail's x-coordinates within canvas
  snail.x = constrain(snail.x, 0, canvasX - snail.w);
  //Moves the snail side-to-side
  snail.x += snail.speed;
  if (snail.x > canvasX - snail.w || snail.x < 0) {
    snail.speed *= -1;
  }
  drawImage(foodImg, food);
  drawImage(goldFish0Img, goldFish0);
  //contrain goldfish0 within canvas
  contrain(goldFish0);
  //draws the goldfish1
  drawImage(goldFish1Img, goldFish1);
  //contrain goldfish1 within canvas
  contrain(goldFish1);
  //draws the blue fish
  drawImage(blueFishImg, blueFish);
  //contrain blue fish within canvas
  contrain(blueFish);
  //draws the goldfish
}
// =================== DRAWING IMAGES ==========================
// General function to draw images
// *
function drawImage(img, character) {
  image(img, character.x, character.y, character.w, character.h);
}
// =================== CONSTRAIN WITHIN CANVAS ==========================
// General function to constrain characters within the canvas
// *
function contrain(character) {
  // Constrain the blue fish's x-coordinate
  character.x = constrain(character.x, 0, canvasX - character.w);
  // Constrain the blue fish's y-coordinate
  character.y = constrain(character.y, 0, canvasY - 130);
}
// =================== KEYBOARD BUTTONS ==========================
//KeyBoard Arrows control the blue fish
// *
function keyPressed() {
  let speed = 5;
  //moves left
  if (keyCode === LEFT_ARROW) {
    blueFish.x -= speed;
  }
  //moves right
  if (keyCode === RIGHT_ARROW) {
    blueFish.x += speed;
  }
  //moves up
  if (keyCode === UP_ARROW) {
    blueFish.y -= speed;
  }
  //moves down
  if (keyCode === DOWN_ARROW) {
    blueFish.y += speed;
  }
  //Enter button changes the state from introduction ---> simulation
  if (keyCode === ENTER) {
    state = "simulation";
  }
}
