/* globals createCanvas, mousePressed, background, image */
var dragging = false;
var dragging2 = false;

var rotating = false;

var clock;
var arrow1;
var arrow2;

var x1, y1, w1, h1, r1;
var x2, y2, w2, h2, r2;
var offsetX, offsetY;
var placeX, placeY;

function preload () {
  clock = loadImage('clock.png');
  arrow1 = loadImage('croppedarrow.png');
  arrow2 = loadImage('croppedarrow2.png');
}

function setup () {
  createCanvas(600,600);

//Big Arrow
  x1 = 200;
  y1 = 200;
  w1 = 150;
  h1 = 80;
  r1 = 0;

//Little Arrow
  x2 = 300;
  y2 = 300;
  w2 = 120;
  h2 = 80;
  r2 = 0;
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

  push();
  translate(x1, y1);
  rotate(r1);
  image(arrow1, -w1, -h1 / 2, w1, h1);
  pop();
  push();
  translate(x2, y2);
  rotate(r2);
  image(arrow2, -w2, -h2 / 2 , w2, h2);
  pop();
}

function mousePressed () {
  if (mouseX > -w1 && mouseX < x1 + w1 && mouseY > (h1 / 2) && mouseY < y1 + (h1 / 2)) {
    dragging = true;

    offsetX = x1 - mouseX;
    offsetY = y1 - mouseY;
  }

  if (mouseX > x2 - w2 && mouseX < x2 + w2 && mouseY > y2 - (h2 / 2) && mouseY < y2 + (h2 /2)) {
    dragging2 = true;

    placeX = x2 - mouseX;
    placeY = y2 - mouseY;
  }
}

function keyPressed () {
  if (key === 'ArrowRight') {
    r1 += 0.1;
  }
  if (key === 'ArrowLeft') {
    r1 -= 0.1;
  }
  if (key === 'ArrowUp') {
    r2 += 0.1;
  }
  if (key === 'ArrowDown') {
    r2 -= 0.1;
  }
}


function mouseReleased () {
  dragging = false;
  dragging2 = false;
}
