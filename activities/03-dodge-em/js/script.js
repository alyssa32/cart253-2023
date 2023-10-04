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
}
let pacman = {
    x: 600,
    y: 450,
    size: 60,
    r: 252,
    g: 186,
    b: 3,
}
let boxOne = {
    x: 0,
    y: 180,
    w: 200,
    h: 50,
    r: 5,
    g: 68,
    b: 255,
}

let boxTwo = {
    x: 100,
    y: 360,
    w: 400,
    h: 50,
    r: 5,
    g: 68,
    b: 255,
}

let boxThree = {
    x: 700,
    y: 540,
    w: 300,
    h: 50,
    r: 5,
    g: 68,
    b: 255,
}

let boxFour = {
    x: 300,
    y: 720,
    w: 300,
    h: 50,
    r: 5,
    g: 68,
    b: 255,
}

let blueGhostImg;

let pinkGhostImg;

let greenGhostImg;

let orangeGhostImg;

/**
 * Preloads the Ghost Images
*/
function preload() {
blueGhostImg = loadImage("assets/images/blueGhost.PNG");
pinkGhostImg = loadImage("assets/images/pinkGhost.PNG");
greenGhostImg = loadImage("assets/images/greenGhost.PNG");
orangeGhostImg = loadImage("assets/images/orangeGhost.PNG");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000,1000);
}
/**
 * Description of draw()
*/
function draw() {
       // Draws the Black Background
 background(0);

    //Draws the Food Nuggets
    noStroke();
fill(food.r, food.g, food.b);

     let x = food.x
     let numSegments = 13;

     for (let i = 0; i < numSegments; i++) {
ellipse(x, food.y, food.size);
x = x + 70;
     }
   

  //Draws the Pacman
fill(pacman.r, pacman.g, pacman.b);
ellipse(mouseX, mouseY, pacman.size);

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
  image(blueGhostImg, 10, 250, 90, 90);

 //Draws the Blue Ghost
  image(pinkGhostImg, 500, 430, 90, 90);

   //Draws the Blue Ghost
  image(greenGhostImg, 210, 610, 90, 90);

   //Draws the Blue Ghost
  image(orangeGhostImg, 810, 800, 90, 90);


     }
    

