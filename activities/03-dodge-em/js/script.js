/**
 * Pac-Man
 * Alyssa Durdey
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let food = {
    x: 50,
    y: 500,
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
let box = {
    x: 500,
    y: 500,
    size: 100,
    r: 5,
    g: 68,
    b: 255,
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
    //Draws the Pacman
fill(pacman.r, pacman.g, pacman.b);
ellipse(mouseX, mouseY, pacman.size);

drawFood(25);
}

function drawFood(quantity){
     fill(food.r, food.g, food.b);
    for(var i = 0; i < quantity; i++){
ellipse(random(width), random(height), food.size);
}
}
/**
 * Description of draw()
*/
function draw() {
// Draws the Background

// Draws the food nuggets
fill(food.r, food.g, food.b);




}
