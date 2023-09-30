/**
 * Pac-Man
 * Alyssa Durdey
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let food = {
    x: 500,
    y: 500,
    size: 20,
    r: 255,
    g: 227,
    b: 115,
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
    createCanvas(1000,1000);
background(0);
}


/**
 * Description of draw()
*/
function draw() {
// Draws the food nuggets
fill(food.r, food.g, food.b);
ellipse (food.x, food.y, food.size);

}