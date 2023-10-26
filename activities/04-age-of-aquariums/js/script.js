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
  r: 184,
  g: 237,
  b: 252,
};

let intro = {
  string1: `It's 5PM!\n Which means your owner is coming \n to feed you. Eat as many food pebbles \n as you can but be careful NOT to eat \n your friends. `,
  x1: 500,
  y1: 180,
  r: 59,
  g: 139,
  b: 179,
  string2: "Move around by using the arrow keys",
  x2: 500,
  y2: 500,
  string3: "Press the                   key to begin",
  x3: 500,
  y3: 650,
};

let blueFish = {
  x: 500,
  y: 400,
  w: 80,
  h: 60,
};

let goldFish0 = {
  x: 200,
  y: 200,
  w: 40,
  h: 30,
};

let goldFish1 = {
  x: 300,
  y: 300,
  w: 50,
  h: 35,
};

let snail = {
  x: 20,
  y: 740,
  w: 60,
  h: 40,
};

let food = {
  x: 200,
  y: 200,
  w: 40,
  h: 40,
};

let state = "introduction";

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

  keyPressed();
}

function introduction() {
  textSize(40);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(intro.string1, intro.x1, intro.y1);
  textSize(30);
  text(intro.string2, intro.x2, intro.y2);
  text(intro.string3, intro.x3, intro.y3);
}

function simulation() {
  image(blueFishImg, blueFish.x, blueFish.y, blueFish.w, blueFish.h);
  image(goldFish0Img, goldFish0.x, goldFish0.y, goldFish0.w, goldFish0.h);
  image(goldFish1Img, goldFish1.x, goldFish1.y, goldFish1.w, goldFish1.h);
}
// =================== KEYBOARD BUTTONS ==========================
/** 
//  // KeyBoard Arrows control the blue fish
// */
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
}
