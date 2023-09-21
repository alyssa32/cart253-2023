/**
 * I Like to Movie it!
 * Alyssa Durdey
 */

"use strict";
let bg = {
  h: 198,
  s: 37,
  b: 99,
};
let bgCanvas = 500;
let sun = {
  x: 250,
  y: 340,
  size: 80,
  r: 255,
  g: 223,
  b: 107,
};
let sunGlow = {
  x: 250,
  y: 340,
  r: 237,
  g: 221,
  b: 142,
  alpha: 150,
  size: 95,
  count: 0,
};
let water = {
  x: 0,
  y: 340,
  w: 500,
  h: 300,
  r: 90,
  g: 137,
  b: 219,
};
let bigMountain = {
  r: 61,
  g: 143,
  b: 65,
};
let midMountain = {
  r: 103,
  g: 163,
  b: 125,
};
let smallMountain = {
  x: 400,
  y: 350,
  r: 132,
  g: 181,
  b: 160,
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
}

/**
 * Description of draw()
 */
function draw() {
  //Background
  colorMode(HSB);
  background(bg.h, bg.s, bg.b);
  bg.b = mouseY;
  bg.b = map(mouseY, 0, 500, 100, 0);
  noStroke();
  colorMode(RGB);
  //Sun
  fill(sun.r, sun.g, sun.b);
  ellipse(sun.x, sun.y, sun.size);
  sun.y = mouseY;
  sun.y = constrain(sun.y, 60, 400);

  //The Sun's Glowing Rim
  fill(sunGlow.r, sunGlow.g, sunGlow.b, sunGlow.alpha);
  ellipse(sunGlow.x, sunGlow.y, sunGlow.size);
  sunGlow.y = mouseY;
  sunGlow.y = constrain(sunGlow.y, 60, 400);
  sunGlow.size = constrain(sunGlow.size, 95, 110);
  if (sunGlow.size == 110 || sunGlow.size == 95) {
    sunGlow.count += 1;
  }
  if (sunGlow.count % 2 == 0) {
    sunGlow.size += -0.2;
  } else {
    sunGlow.size += 0.2;
  }

  //The Small Mountain
  fill(smallMountain.r, smallMountain.g, smallMountain.b);
  arc(smallMountain.x, smallMountain.y, 200, 60, PI, TWO_PI);

  //The Water
  fill(water.r, water.g, water.b);
  rect(water.x, water.y, water.w, water.h);

  //The Medium Mountain
  fill(midMountain.r, midMountain.g, midMountain.b);
  arc(790, 380, 900, 280, PI, TWO_PI);

  //The Big Mountain
  fill(bigMountain.r, bigMountain.g, bigMountain.b);
  arc(-140, 440, 700, 700, PI, TWO_PI);
}
