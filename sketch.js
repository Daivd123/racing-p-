var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database; gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.img");
  car2_img = loadImage("../assets/car2_img");
  track = loadImage("../assets/track.jpg");
}

function setup() {
canvas = createCanvas(windowWith, windowHeight);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw () {
  background(backgroundImage);
  if(playerCount ===2) {
    game.update(1);
  }

  if(gameState === 1) {
    game.play();
  }
}

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }