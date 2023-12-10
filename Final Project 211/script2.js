let imageOffset = 0;
let verticalOffset = 0;

let rightkey = false;
let leftkey = false;

image_array = [
  "AiArt1.jpeg",
  "AiArt2.webp",
  "AiArt3.webp",
  "AiArt4.jpeg",
  "AiArt5.webp",
  "AiArt6.jpeg",
  "AiArt7.webp",
  "AiArt8.webp",
  "humanMadeArt1.jpeg",
  "humanMadeArt2.jpeg",
  "humanMadeArt3.jpg",
  "humanMadeArt4.jpeg",
  "humanMadeArt5.jpeg",
];

function getRandomImage() {
  //Get a random index
  random_index = Math.floor(Math.random() * image_array.length);
  //Get an image at the random index
  selected_image = image_array[random_index];
  //Display the image
  document.getElementById("art").src = `./images/${selected_image}`;
}
//----------------------------------- ROBOT MOVEMENT ------------------------
setInterval(robot, 20);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
//When the arrow keys are pressed, the robot moves
function keyDown(event) {
  if (event.keyCode == 39) rightkey = true;
  if (event.keyCode == 37) leftkey = true;
}
//When the arrow keys are released, the robot stops moving
function keyUp(event) {
  if (event.keyCode == 39) rightkey = false;
  if (event.keyCode == 37) leftkey = false;
}
//Moves the robot from left to right if the left or right arrow is pressed
function robot() {
  if (rightkey == true) {
    if (imageOffset >= window.screen.width - 140) {
    } else {
      imageOffset = imageOffset + 3;
    }
  }
  if (leftkey == true) {
    if (imageOffset >= window.screen.width + 140) {
    } else {
      imageOffset = imageOffset - 3;
    }
  }

  document.getElementById("robot").style.left = imageOffset + "px";
}
//----------------------------------- TV ------------------------
function plugTV() {
  //When the image is clicked, the TV plugs into the socket (switches between images)
  document.getElementById("plug").src = "images/plugged.png";
  //document.getElementById("art").src = "images/AiArt2.webp";
  getRandomImage();
}
