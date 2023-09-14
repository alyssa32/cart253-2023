5; /**
Drawing Experiment
 Alyssa Durdey
 *
 Experimenting with drawing shapes and colours using p5's functions
 */

("use strict");

/**
 Does nothing
 */
function preload() {}

/**
 Draws the alien
 */
function setup() {
  createCanvas(500, 500);
  background(46, 64, 120);
  rectMode(CENTER);

  //Bottom of saucer
  fill(85, 86, 99);
  arc(250, 250, 170, 140, 0, PI);

  //Middle part of saucer
  fill(130, 131, 143);
  ellipse(250, 250, 300, 50);

  //Inside of saucer
  fill(21, 29, 56);
  ellipse(250, 250, 150, 30);

  //Alien eyes
  fill(237, 237, 237);
  line(270, 190, 250, 250);
  circle(270, 190, 20);
  line(230, 190, 250, 250);
  circle(230, 190, 20);

  //Alien pupils
  fill(0);
  circle(270, 190, 3);
  circle(230, 190, 3);

  //Alien body
  fill(102, 204, 107);
  ellipse(250, 262, 70, 5);
  arc(250, 262, 70, 100, PI, TWO_PI);

  //Alien mouth
  stroke(0);
  line(245, 230, 255, 230);

  //Top of saucer
  fill(213, 215, 230, 100);
  arc(250, 250, 150, 220, PI, TWO_PI);
  arc(250, 250, 150, 30, 0, PI);

  //Saucer buttons
  fill(78, 137, 204);
  ellipse(230, 290, 10, 15);
  fill(227, 87, 66);
  ellipse(250, 293, 10, 15);
  fill(227, 220, 86);
  ellipse(270, 290, 10, 15);
}

/**
Does nothing
 */
function draw() {}
