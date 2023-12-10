let imageOffset = 0;
let verticalOffset = 0;

let rightkey = false;
let leftkey = false;

let maxImagesToDisplay = 9;
let imagesAlreadyGenerated = 0;

let pluggIn = false;

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
  if (imagesAlreadyGenerated < maxImagesToDisplay) {
    //Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
    //Get an image at the random index
    selected_image = image_array[random_index];
    //Display the image
    document.getElementById("art").src = `./images/${selected_image}`;

    imagesAlreadyGenerated++;

    // Update the image counter
    updateImageCounter();
  } else {
    displayWinScreen();
  }
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
  // If the robot reaches the end of the screen stop it.
  if (rightkey == true) {
    if (imageOffset >= window.screen.width - 240) {
    } else {
      imageOffset = imageOffset + 3;
    }
  }
  if (leftkey == true) {
    //Constrict to robot to the left side of the screen
    if (imageOffset <= 0) {
      //If the robot is already at the left side of the screen, do nothing
    } else {
      imageOffset = imageOffset - 3;
    }
  }

  document.getElementById("robot").style.left = imageOffset + "px";
}
//----------------------------------- TV ------------------------
function plugTV() {
  if (pluggIn == false) {
    //When the image is clicked, the TV plugs into the socket (switches between images)
    document.getElementById("plug").src = "images/plugged.png";
    //document.getElementById("art").src = "images/AiArt2.webp";
    getRandomImage();

    document.getElementById("ai").style.display = "block";
    document.getElementById("human").style.display = "block";
    document.getElementById("art").style.display = "block";
    document.getElementById("imgCounter").style.display = "block";

    pluggIn = true;
  }
}

// Check if the image is AI or not, based on the file name
function checkIfImageIsAI() {
  let imageName = document.getElementById("art").src;
  // imageName returns: "http://127.0.0.1:5500/images/humanMadeArt3.jpg"

  imageName = imageName.split("/");

  // imageName returns: ["http:", "" , "127.0.0.1:5500", "images", "[image source]"]

  // We want to get only the image source from the array

  imageName = imageName[imageName.length - 1];

  // Now we have the name of the source file, and we want to get the prefix of either Ai... or human...
  let prefix = imageName.substring(0, 2);

  if (prefix == "Ai") {
    return true;
  } else {
    return false;
  }
}

function buttonAIArt() {
  if (checkIfImageIsAI() == true) {
    console.log("YES! It's AI art!");

    getRandomImage();
  } else {
    displayLoseScreen();
  }
}

function buttonHumanArt() {
  if (checkIfImageIsAI() == false) {
    console.log("No! It's human art!");

    getRandomImage();
  } else {
    displayLoseScreen();
  }
}

function updateImageCounter() {
  document.getElementById("imgCounter").innerHTML =
    "Image: " + imagesAlreadyGenerated + "/" + maxImagesToDisplay;
}

function displayLoseScreen() {
  window.location.href = "lose.html";
}
function displayWinScreen() {
  window.location.href = "win.html";
}
