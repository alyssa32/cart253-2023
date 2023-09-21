/**
 * I Like to Movie it!
 * Alyssa Durdey
 */

"use strict";
let bg = {
  r: 52,
  g: 36,
  b: 82,
};
let sun = {
  x: 250,
  y: 250,
  size: 150,
  growthRate: 0.4,
  fill: (237, 221, 142),
};
let sunGlow = {
  x: 250,
  y: 250,
  size: 160,
  growthRate: 0.5,
  fill: (237, 221, 142),
  alpha: 200,
};
let mercury = {
  x: 360,
  y: 250,
  speed: -0.9,
  size: 10,
  fill: (180, 188, 219),
};
let venus = {
  x: 380,
  y: 250,
  speed: -0.7,
  size: 20,
  fill: (235, 189, 120),
};
let earth = {
  x: 410,
  y: 250,
  speed: -0.6,
  size: 25,
  fill: (120, 201, 235),
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * Description of draw()
 */
function draw() {
  //Background
  background(bg.r, bg.g, bg.b);
  //The Sun
  fill(sun.fill);
  sun.size = sun.size + sun.growthRate;
  sun.size = constrain(sun.size, 0, 160);
  ellipse(sun.x, sun.y, sun.size);
  //The Sun Glow
  fill(sunGlow.fill, sunGlow.alpha);
  sunGlow.size = sunGlow.size + sunGlow.growthRate;
  sunGlow.size = constrain(sunGlow.size, 0, 180);
  ellipse(sunGlow.x, sunGlow.y, sunGlow.size);
  //Mercury
  fill(mercury.fill);
  mercury.x = mercury.x + mercury.speed;
  mercury.x = constrain(mercury.x, 140, 360);
  ellipse(mercury.x, mercury.y, mercury.size);
  //Venus
  fill(venus.fill);
  venus.x = venus.x + venus.speed;
  venus.x = constrain(venus.x, 120, 380);
  ellipse(venus.x, venus.y, venus.size);
  //Earth
  fill(earth.fill);
  earth.x = earth.x + earth.speed;
  earth.x = constrain(earth.x, 90, 400);
  ellipse(earth.x, earth.y, earth.size);
}
