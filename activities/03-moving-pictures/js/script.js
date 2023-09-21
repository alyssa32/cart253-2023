/**
 * I Like to Movie it!
 * Alyssa Durdey
 */

"use strict";
let bg = {
  r: 189,
  g: 238,
  b: 255,
};
let bgCanvas = 500;
let sun = {
  x: 250,
  y: 250,
  size: 100,
  fill: (237, 221, 142),
};
let sunGlow = {
  x: 250,
  y: 250,
  size: 120,
  fill: (237, 221, 142),
  alpha: 200,
};
let water = {
  fill: (90, 137, 219),
};
let bigMountain = {
  fill: (79, 184, 96),
};
let midMountain = {
  fill: (103, 163, 125),
};
let smallMountain = {
  fill: (132, 181, 160),
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(bgCanvas, bgCanvas);
  background(bg.r, bg.g, bg.b);
}

/**
 * Description of draw()
 */
function draw() {
  //Background
  noStroke();

  //Sun
  ellipse(250, mouseY, 70);
  //The Big Mountain
  ellipse(0, 350, 400, 480);

  //The Medium Mountain
  ellipse(480, 340, 250, 190);
  //The Water
  rect(0, 300, 500, 300);
  fill(water.fill);
  //The Small Mountain
  ellipse(360, 300, 120, 60);
}
