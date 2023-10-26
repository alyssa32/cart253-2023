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
  eaten: false,
};

let goldFish1 = {
  x: 300,
  y: 300,
  w: 50,
  h: 35,
  eaten: false,
};

let snail = {
  x: 520,
  y: 700,
  w: 60,
  h: 40,
  speed: 1,
  eaten: false,
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
  speed: 2,
  eaten: false,
};

let win = {
  string1: `Congradulations! \n You ate all your food and you didn't \n bite your friends.`,
  x1: 500,
  y1: 180,
  r: 237,
  g: 219,
  b: 147,
  string2: "Press the              key to restart",
  x2: 508,
  y2: 690,
};

let goldFish0Win = {
  x: 590,
  y: 415,
  w: 45,
  h: 30,
};

let goldFish1Win = {
  x: 430,
  y: 415,
  w: 50,
  h: 35,
};

let snailWin = {
  x: 360,
  y: 415,
  w: 50,
  h: 35,
};

let tragedies = [
  `On no! \n You mistook Jonathan for food.`,
  `You swallowed Lee-Ann whole! \n We didn't like her anyways...`,
  `Oh my! \n Jennie might be small but she's not food!`,
  `Such a shame, we will miss Harold.`,
  `No your food isn't alive, \n you just ate Samantha.`,
  `Owen didn't appreciate you eating him.`,
  `*Blub Blub* \n That was Judy screeming as you ate her.`,
];

let goldFishLose = {
  x1: 500,
  y1: 180,
  r: 237,
  g: 219,
  b: 147,
  string2: "Press the              key to restart",
  x2: 508,
  y2: 690,
};

let blueFishEating = {
  x: 460,
  y: 400,
  w: 90,
  h: 60,
};

let snailEaten = {
  x: 410,
  y: 400,
  w: 160,
  string: "Noooooo! Not Gary!",
  x2: 508,
  y2: 290,
  h: 70,
  r: 10,
  g: 79,
  b: 120,
};

let state = "simulation";

let blueFishImg;
let goldFish0Img;
let goldFish1Img;
let snailImg;
let snailEatenImg;
let foodImg;
let introPanelImg;
let enterButtonImg;
let blueFishEatingImg;

/**
 * Preloads the images of the characters and food
 */
function preload() {
  blueFishImg = loadImage("assets/images/blueFish.png");
  goldFish0Img = loadImage("assets/images/goldFish-0.png");
  goldFish1Img = loadImage("assets/images/goldFish-1.png");
  snailImg = loadImage("assets/images/snail.png");
  snailEatenImg = loadImage("assets/images/snailEaten.png");
  foodImg = loadImage("assets/images/food.png");
  introPanelImg = loadImage("assets/images/introPanel.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
  blueFishEatingImg = loadImage("assets/images/blueFishEating.png");
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
  } else if (state === "winScreen") {
    winScreen();
  } else if (state === "goldFishLoseScreen") {
    goldFishLoseScreen();
  } else if (state === "snailLoseScreen") {
    snailLoseScreen();
  }
  // ======================== CALLING FUNCTIONS =========================
  //Calls the function to make the blue fish continuously move
  keyPressed();
  AteFriend(goldFish0);
  AteFriend(goldFish1);
  AteFriend(snail);
}
/**
  // ======================== INTRODUCTION =========================
 */
function introduction() {
  //Panel image
  drawImage(introPanelImg, introPanel);
  //Blue Fish image
  drawImage(blueFishImg, blueFishIntro);
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
  fill(snailEaten.r, snailEaten.g, snailEaten.b);
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
  //draws the food pebble
  drawImage(foodImg, food);
  //Moves the food downwards and stops on the sand
  food.y += food.speed;
  if (food.y > canvasY - 81) {
    food.speed = 0;
  }
  drawImage(goldFish0Img, goldFish0);
  //contrain goldfish0 within canvas
  constrain(goldFish0);
  //draws the goldfish1
  drawImage(goldFish1Img, goldFish1);
  //contrain goldfish1 within canvas
  constrain(goldFish1);
  //draws the blue fish
  drawImage(blueFishImg, blueFish);
  //contrain blue fish within canvas
  constrain(blueFish);
  //Calls the function that displays the end screen if the blue fish ate any friends
  goldFishLoseScreen();
  snailLoseScreen();
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
function constrain(character) {
  // Constrain the blue fish's x-coordinate
  character.x = constrain(character.x, 0, canvasX - character.w);
  // Constrain the blue fish's y-coordinate
  character.y = constrain(character.y, 0, canvasY - 130);
}
// =================== COLLISIONS ==========================
/** 
//  // Checks if one object collides with another
// */
function checkCollision(character) {
  if (
    blueFish.x + blueFish.w > character.x &&
    blueFish.x < character.x + character.w &&
    blueFish.y + blueFish.h > character.y &&
    blueFish.y < character.y + character.h
  ) {
    return true;
  }
  return false;
}
/** 
//  // Checks blue fish collides with a friend (lose)
// */
function AteFriend(character) {
  if (checkCollision(character)) {
    character.eaten = true;
  }
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
// =================== END SCREENS ==========================
//Winning End Screen
// *
function winScreen() {
  //draws the light blue background
  background(bg.r, bg.g, bg.b);
  //Blue Fish image
  drawImage(blueFishImg, blueFish);
  //Goldfish0 image
  drawImage(goldFish0Img, goldFish0Win);
  //Goldfish1 image
  drawImage(goldFish1Img, goldFish1Win);
  //Snail image
  drawImage(snailImg, snailWin);
  //Enter button image
  drawImage(enterButtonImg, enterButton);
  //ending text
  textSize(40);
  textAlign(CENTER);
  noStroke(0);
  fill(win.r, win.g, win.b);
  textStyle(BOLD);
  text(win.string1, win.x1, win.y1);
  textSize(30);
  text(win.string2, win.x2, win.y2);
}
//Losing End Screen is the player touches a gold fish
// *
function goldFishLoseScreen() {
  if (goldFish0.eaten || goldFish1.eaten) {
    //draws the light blue background
    background(bg.r, bg.g, bg.b);
    //Blue Fish image
    drawImage(blueFishEatingImg, blueFishEating);
    //Enter button image
    drawImage(enterButtonImg, enterButton);
    //ending text
    textSize(40);
    textAlign(CENTER);
    noStroke(0);
    fill(win.r, win.g, win.b);
    textStyle(BOLD);
    text(random(tragedies), goldFishLose.x, goldFishLose.y);
    textSize(30);
    text(win.string2, win.x2, win.y2);
  }
}
//Losing End Screen is the player touches the snail
// *
function snailLoseScreen() {
  if (snail.eaten) {
    //draws the blue background
    background(bg.r, bg.g, bg.b);
    //Blue Fish eating snail image
    drawImage(snailEatenImg, snailEaten);
    //Enter button image
    drawImage(enterButtonImg, enterButton);
    fill(snailEaten.r, snailEaten.g, snailEaten.b);
    textSize(40);
    text(snailEaten.string, snailEaten.x2, snailEaten.y2);
    textSize(30);
    textAlign(CENTER);
    noStroke(0);
    textStyle(BOLD);
    text(win.string2, win.x2, win.y2);
  }
}
