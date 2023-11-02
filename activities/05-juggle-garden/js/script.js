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
    //Creates a new tulip
    let tulip = createTulip();
    //Will add the new tulip to the array of tulips
    garden.tulips.push(tulip);
  }
}
//Creates a new tulip and returns it
function createTulip() {
  //Creates the tulip object
  let tulip = {
    x: random(0, width),
    y: random(0, height),
    w: 30,
    h: 30,
    stemWidth: 10,
    stemHeight: 50,
  };
  return tulip;
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
    displayTulip(tulip);
  }
}

function displayTulip(tulip) {
  push();
  image(stemImg, tulip.x, tulip.y, tulip.stemWidth, tulip.stemHeight);
}
