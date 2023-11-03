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

/**
 * Description of preload
 */
function preload() {
  redTulipImg = loadImage("assets/images/redTulip.png");
  blueTulipImg = loadImage("assets/images/blueTulip.png");
  yellowTulipImg = loadImage("assets/images/yellowTulip.png");
  stemImg = loadImage("assets/images/stem.png");
  pixelBeeImg = loadImage("assets/images/pixelBee.png");
  wateringCanImg = loadImage("assets/images/wateringCan.png");
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
 * Description of draw()
 */
function draw() {
  //Displays the green background
  background(garden.bg.r, garden.bg.g, garden.bg.b);
  //Loops through all the tulips and displays them
  for (let i = 0; i < garden.tulips.length; i++) {
    let tulip = garden.tulips[i];
    if (tulip.alive) {
      tulip.shrink();
      tulip.display();
    }
  }
  //Displays the watering can
  wateringCan.display();
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
}
function mousePressed() {
  for (let i = 0; i < garden.tulips.length; i++) {
    let tulip = garden.tulips[i];
    tulip.mousePressed();
  }
}
