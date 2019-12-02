var dragging = false;
var dragging2 = false;

var rotating = false;

var clock;
var arrow1;
var arrow2;

var x1, y1, w1, h1;
var x2, y2, w2, h2;
var offsetX, offsetY;
var placeX, placeY;

function preload () {
  clock = loadImage('clock.png');
  arrow1 = loadImage('croppedarrow.png');
  arrow2 = loadImage('croppedarrow2.png')
}

function setup () {
  createCanvas(800, 800);

  x1 = 50;
  y1 = 50;
  w1 = 150;
  h1 = 80;

  x2 = 100;
  y2 = 100;
  w2 = 150;
  h2 = 80
}

function draw () {
  background(255);
  image(clock, 50, 50, 500, 500);

  if (dragging) {
    x1 = mouseX + offsetX;
    y1 = mouseY + offsetY;
  }
  if (dragging2) {
    x2 = mouseX + placeX;
    y2 = mouseY + placeY;
  }

  image(arrow1, x1, y1, w1, h1);
  image(arrow2, x2, y2, w2, h2);
}
 function mousePressed() {
    if (mouseX > x1 && mouseX < x1 + w1 && mouseY > y1 && mouseY < y1 + h1) {
    dragging = true;

    offsetX = x1-mouseX;
    offsetY = y1-mouseY;
  }

  if (mouseX > x2 && mouseX < x2 + w2 && mouseY > y2 && mouseY < y2 + h2) {
  dragging2 = true;

  placeX = x2-mouseX;
  placeY = y2-mouseY;
}
}

/*
function keyIsPressed() {
  if (key === "ArrowRight") {
    rotate(PI / 30.0);
    arrow1;
  }
  if (key === "ArrowLeft") {
    rotate(PI / -30.0);
    arrow1;
  }
}
*/

function mouseReleased() {
  dragging = false;
  dragging2 = false;
}
