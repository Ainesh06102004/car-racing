var database;
var form;
var playercount = 0;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth - 5,displayHeight - 150);

  form = new Form();
  player = new Player();
}

function draw(){
  background("white");
  
  form.display();
  
}