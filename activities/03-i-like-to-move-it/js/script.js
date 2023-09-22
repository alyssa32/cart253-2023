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
  maxHeight: 440,
  minHeight: 60,
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
  minSize: 95,
  maxSize: 120,
  count: 0,
  speed: 0.2,
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
  x: -140,
  y: 440,
  w: 700,
  h: 700,
  r: 61,
  g: 143,
  b: 65,
};
let midMountain = {
  x: 790,
  y: 380,
  w: 900,
  h: 280,
  r: 103,
  g: 163,
  b: 125,
};
let smallMountain = {
  x: 400,
  y: 350,
  w: 200,
  h: 60,
  r: 132,
  g: 181,
  b: 160,
};

let fish = {
  bodyX: 450,
  bodyY: 460,
  bodyW: 35,
  bodyH: 7,
  tailX1: 465,
  tailY1: 460,
  tailX2: 470,
  tailY2: 455,
  tailX3: 470,
  tailY3: 465,
  r: 79,
  g: 124,
  b: 201,
  speed: -0.6,
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Canvas Size
 */
function setup() {
  createCanvas(bgCanvas, bgCanvas);
}

/**
 * Shapes coming together to make a scene with a little animation
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
  sun.y = constrain(sun.y, sun.minHeight, sun.maxHeight);
  sun.x = mouseX;
  sun.x = constrain(sun.x, sun.minHeight, sun.maxHeight);

  //The Sun's Glowing Rim
  fill(sunGlow.r, sunGlow.g, sunGlow.b, sunGlow.alpha);
  ellipse(sunGlow.x, sunGlow.y, sunGlow.size);

  //The Sun's Glow Animation
  sunGlow.y = mouseY;
  sunGlow.y = constrain(sunGlow.y, sun.minHeight, sun.maxHeight);
  sunGlow.x = mouseX;
  sunGlow.x = constrain(sunGlow.x, sun.minHeight, sun.maxHeight);
  
  sunGlow.size = constrain(sunGlow.size, sunGlow.minSize, sunGlow.maxSize);
  if (sunGlow.size == sunGlow.maxSize || sunGlow.size == sunGlow.minSize) {
    sunGlow.count += 1;
  }
  if (sunGlow.count % 2 == 0) {
    sunGlow.size += -sunGlow.speed;
  } else {
    sunGlow.size += sunGlow.speed;
  }

  //The Small Mountain
  fill(smallMountain.r, smallMountain.g, smallMountain.b);
  arc(
    smallMountain.x,
    smallMountain.y,
    smallMountain.w,
    smallMountain.h,
    PI,
    TWO_PI
  );

  //The Water
  fill(water.r, water.g, water.b);
  rect(water.x, water.y, water.w, water.h);

  //The Medium Mountain
  fill(midMountain.r, midMountain.g, midMountain.b);
  arc(midMountain.x, midMountain.y, midMountain.w, midMountain.h, PI, TWO_PI);

  //The Big Mountain
  fill(bigMountain.r, bigMountain.g, bigMountain.b);
  arc(bigMountain.x, bigMountain.y, bigMountain.w, bigMountain.h, PI, TWO_PI);

  //Fishy
  fill(fish.r, fish.g, fish.b);
  ellipse(fish.bodyX, fish.bodyY, fish.bodyW, fish.bodyH);
  triangle(
    fish.tailX1,
    fish.tailY1,
    fish.tailX2,
    fish.tailY2,
    fish.tailX3,
    fish.tailY3
  );
  //Fishy animation
  fish.bodyX += fish.speed;
  fish.tailX1 += fish.speed;
  fish.tailX2 += fish.speed;
  fish.tailX3 += fish.speed;
}
