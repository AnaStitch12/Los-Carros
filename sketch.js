var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var carimg1;
var carimg2;
var treck;
var gameState;
var auplayer; 

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  backgroundImage = loadimage("./assets/car1.png")
  backgroundImage = loadimage("./assets/car2.png")
  backgroundImage = loadimage("./assets/PISTA.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  background(backgroundImage);
  if (playerCount==2){
    game.update(1);
  }

  if (playerCount==1){
    game.update(2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
