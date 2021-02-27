var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track,car_img1,car_img2,car_img3,car_img4,groundImg;

function preload(){
track = loadImage('images/track.jpg');
car_img1 = loadImage('images/car1.png');
car_img2 = loadImage('images/car2.png');
car_img3 = loadImage('images/car3.png');
car_img4 = loadImage('images/car4.png');
groundImg = loadImage('images/ground.png');
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
  game.end();
  }
}
