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

let flower = {
  xMin: 30,
  xMax: 770,
  yMin: 70,
  yMax: 790,
  heightMin: 40,
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

let shrink = {
  max: 0,
  min: 0.1,
};

// The garden
let garden = {
  // An array to store the individual flowers
  tulips: [],
  // Number of flowers in the garden
  numTulips: 20,
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

/**
 * Description of preload
 */
function preload() {
  redTulipImg = loadImage("assets/images/redTulip.png");
  blueTulipImg = loadImage("assets/images/blueTulip.png");
  yellowTulipImg = loadImage("assets/images/yellowTulip.png");
  stemImg = loadImage("assets/images/stem.png");
  pixelBeeImg = loadImage("assets/images/pixelBee.png");
}
/**
 * Description of setup
 */
function setup() {
  createCanvas(canvasX, canvasY);
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
