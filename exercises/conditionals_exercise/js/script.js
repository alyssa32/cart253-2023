/**
 *Exercise: Conditionals
 * Alyssa
 * 
 * Small exercise to get to know conditionals
 */

"use strict";
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 3
}
/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
background(backgroundShade);

  circle.x = circle.x + circle.speed;

  // If the circle is off the right side
  if (circle.x > width) {
    // Send it back to the left by making its speed negative
    circle.speed = -circle.speed;
  }
if (mouseX < width/3) {
  fill(255,0,0);
}
else if (mouseX < 2 * width/3) {
  fill(0,255,0);
}
else {
  fill(0,0,255);
}
if (keyIsPressed) {
    background(255,0,0);
}
  ellipse(circle.x,circle.y,circle.size);
}