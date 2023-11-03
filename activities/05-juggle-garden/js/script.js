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

let intro = {
  string1: `Your mom is away for the weekend \n and asked you to take care of her garden. \n All you have to do is water the tulips. `,
  x1: 390,
  y1: 190,
  r: 41,
  g: 148,
  b: 56,
  string2: "But be careful not to touch any bees \nas you are allergic!",
  x2: 400,
  y2: 320,
  r2: 218,
  g2: 255,
  b2: 181,
  string3: "Using the mouse, click on the flowers \nto make them grow.",
  x3: 400,
  y3: 530,
  string4: "Press the               key to begin",
  x4: 400,
  y4: 658,
};
//the box image for the intro
let introBg = {
  x: 120,
  y: 15,
  w: 770,
  h: 300,
};

let enterButton = {
  x: 610,
  y: 335,
  w: 90,
  h: 90,
};

let lose = {
  string1: `OH NO! You touched a bee!`,
  x1: 400,
  y1: 350,
  r: 41,
  g: 148,
  b: 56,
  string2: "Blue to the sky, orange to the thigh!",
  x2: 400,
  y2: 420,
  string3: "ON NO! A tulip died!",
  x3: 400,
  y3: 350,
  string4: "Mom won't be happy about this...",
  x4: 400,
  y4: 420,
};

//Bee image on losing screen
let beeGameOver = {
  x: 510,
  y: 350,
  w: 60,
  h: 60,
};

//The random max and min of the flowers' sizes
let flower = {
  xMin: 30,
  xMax: 770,
  yMin: 70,
  yMax: 790,
  heightMin: 50,
  heightMax: 80,
  widthMin: 40,
  widthMax: 60,
};

let beePosition = {
  xMin: 100,
  xMax: 770,
  yMin: 100,
  yMax: 770,
};

let wateringCan;

let shrink = {
  max: 0,
  min: 0.1,
};

// The garden
let garden = {
  // An array to store the three different coloured tulips
  tulipImg: [],
  // An array to store the individual flowers
  tulips: [],
  // Number of flowers in the garden
  numTulips: 40,
  // An array to store the individual bees
  bees: [],
  // Number of bees in the garden
  numBees: 10,
  // Color of the background
  bg: {
    r: 135,
    g: 199,
    b: 144,
  },
};

let redTulipImg;
let blueTulipImg;
let yellowTulipImg;
let stemImg;
let pixelBeeImg;
let wateringCanImg;
let enterButtonImg;
let introBgImg;

let state = "introduction";

/**
 * Preloads all used images
 */
function preload() {
  redTulipImg = loadImage("assets/images/redTulip.png");
  blueTulipImg = loadImage("assets/images/blueTulip.png");
  yellowTulipImg = loadImage("assets/images/yellowTulip.png");
  stemImg = loadImage("assets/images/stem.png");
  pixelBeeImg = loadImage("assets/images/pixelBee.png");
  wateringCanImg = loadImage("assets/images/wateringCan.png");
  enterButtonImg = loadImage("assets/images/enterButton.png");
  introBgImg = loadImage("assets/images/introBg.png");
}
/**
 * Description of setup
 */
function setup() {
  createCanvas(canvasX, canvasY);

  //Trying to create an array and loop through different tulip images
  //   garden.tulipImg[0] = redTulipImg;
  //   garden.tulipImg[1] = yellowTulipImg;
  //   garden.tulipImg[2] = blueTulipImg;

  //   for (let i = 0; i < garden.tulipImg; i++) {
  //     console.log(garden.tulipImg[i]);

  //Will create tulips by looping through the set numbers
  for (let i = 0; i < garden.numTulips; i++) {
    let x = random(flower.xMin, flower.xMax);
    let y = random(flower.yMin, flower.yMax);
    let flowerWidth = random(flower.widthMin, flower.widthMax);
    let flowerHeight = random(flower.heightMin, flower.heightMax);
    let stemHeight = 50;
    //Creates a new tulip
    let tulip = new Tulip(x, y, flowerWidth, flowerHeight, stemHeight);

    //Will add the new tulip to the array of tulips
    garden.tulips.push(tulip);
  }
  //Create the Bees
  for (let i = 0; i < garden.numBees; i++) {
    let x = random(beePosition.xMin, beePosition.xMax);
    let y = random(beePosition.yMin, beePosition.yMax);
    let bee = new Bee(x, y);
    garden.bees.push(bee);
  }
  //Draws the watering can image and sets it to the cursor's location
  wateringCan = new WateringCan();
}
/**
 * Switches between the different states and draws the green background
 */
function draw() {
  //Displays the green background
  background(garden.bg.r, garden.bg.g, garden.bg.b);
  // Switches from the ttle screen, to the simulation, to the end screens
  if (state === "introduction") {
    introduction();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "loseBee") {
    loseBee();
  } else if (state === "loseFlowers") {
    loseFlowers();
  }
}
//A general function to display an image
function drawImage(objImg, obj) {
  image(objImg, obj.y, obj.x, obj.w, obj.h);
}
//Switches states when the "enter" key is pressed
function keyPressed() {
  if (keyCode === ENTER) {
    state = "simulation";
  }
}
//Switches to the loseFlowers endscreen when all flowers are gone
function noMoreFlowers() {
  for (let i = 0; i < garden.tulips.length; i++) {
    let tulip = garden.tulips[i];
    if (tulip.alive == false) {
      state = "loseFlowers";
    }
  }
}

//Displays the title page
function introduction() {
  //displays the title box
  drawImage(introBgImg, introBg);
  //displays the enter button image
  drawImage(enterButtonImg, enterButton);
  //Narrative Text
  textSize(28);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(intro.string1, intro.x1, intro.y1);
  text(intro.string2, intro.x2, intro.y2);
  //Instructions
  textStyle(NORMAL);
  fill(intro.r2, intro.g2, intro.b2);
  text(intro.string3, intro.x3, intro.y3);
  //Press Enter
  textStyle(BOLD);
  fill(intro.r, intro.g, intro.b);
  text(intro.string4, intro.x4, intro.y4);
}
//All code necessary to run the simulation
function simulation() {
  //Loops through all the tulips and displays them
  for (let i = 0; i < garden.tulips.length; i++) {
    let tulip = garden.tulips[i];
    if (tulip.alive) {
      tulip.shrink();
      tulip.display();
    }
  }
  //Counts through all the bees
  for (let i = 0; i < garden.bees.length; i++) {
    //If the bee is alive, they will shrink, move, and dbe isplayed
    let bee = garden.bees[i];
    if (bee.alive) {
      bee.shrink();
      bee.move();
      bee.display();
      //Each be will be checking for every tulip in the garden and will try to pollinate
      for (let j = 0; j < garden.tulips.length; j++) {
        let tulip = garden.tulips[j];
        if (tulip.alive) {
          bee.tryToPollinate(tulip);
        }
      }
    }
  }
  //Displays the watering can
  wateringCan.display();
  //Checks to switch to the losing end screen if all flowers are gone
  noMoreFlowers();
}
//Checks through all the flowers if the mouse is pressed
function mousePressed() {
  for (let i = 0; i < garden.tulips.length; i++) {
    let tulip = garden.tulips[i];
    tulip.mousePressed();
  }
}
//Displays the losing screen if player gets touched by a bee
function loseBee() {
  textSize(35);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(lose.string1, lose.x1, lose.y1);
  textSize(28);
  text(lose.string2, lose.x2, lose.y2);
  drawImage(pixelBeeImg, beeGameOver);
}
//Displays a different losing screen if all flowers dissapear
function loseFlowers() {
  textSize(35);
  textAlign(CENTER);
  noStroke(0);
  fill(intro.r, intro.g, intro.b);
  textStyle(BOLD);
  text(lose.string3, lose.x3, lose.y3);
  textSize(28);
  text(lose.string4, lose.x4, lose.y4);
  drawImage(redTulipImg, beeGameOver);
}
