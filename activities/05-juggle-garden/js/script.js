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

// The garden
let garden = {
  // An array to store the individual flowers
  tulips: [],
  // Number of flowers in the garden
  numTulips: 20,
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
    tulip.display();
  }
}
