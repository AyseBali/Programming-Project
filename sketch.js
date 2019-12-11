/* globals createCanvas, mousePressed, background, image */
var dragging = false;
var dragging2 = false;

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
  var canvas =
  createCanvas(550,550);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);

  // magic to make the browser not scroll with the arrow keys
  window.addEventListener('keydown', function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);

//Big Arrow
  x1 = 300;
  y1 = 300;
  w1 = 150;
  h1 = 80;
  r1 = 0;

//Little Arrow
  x2 = 300;
  y2 = 300;
  w2 = 100;
  h2 = 70;
  r2 = 0;
}

function draw () {
  background('powderblue');
  image(clock, 50, 50, 500, 500);

  // if (dragging) {
  //   x1 = mouseX + offsetX;
  //   y1 = mouseY + offsetY;
  // }
  // if (dragging2) {
  //   x2 = mouseX + placeX;
  //   y2 = mouseY + placeY;
  // }

  text('r1: ' + r1.toFixed(2), 20, 20);
  text('r2: ' + r2.toFixed(2), 80, 20);

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

  // 12:10 pm
  if (r2 === 90 && r1 === 140) {
    document.getElementById('img1').src = '1.jpeg';
  }
  // 11:15 am
  if (r2 === 60 && r1 === 180) {
    document.getElementById('img2').src = '2.jpeg';
  }
  // 7:45 pm
  if (r2 === 300 && r1 === 0) {
    document.getElementById('img3').src = '3.jpeg';
  }
  // 5:05 am
  if (r2 === 240 && r1 === 120) {
    document.getElementById('img4').src = '4.jpeg';
  }
  // 3:30 pm
  if (r2 === 180 && r1 === 270) {
    document.getElementById('img5').src = '5.jpeg';
  }
  // 9:20 am
  if (r2 === 0 && r1 === 220) {
    document.getElementById('img6').src = '6.jpeg';
  }
}

// function mousePressed () {
//   if (mouseX > x1 - w1 && mouseX < x1 + w1  && mouseY > y1 - (h1 / 2) && mouseY < y1 + (h1 / 2)) {
//     dragging = true;
//
//     offsetX = x1 - mouseX;
//     offsetY = y1 - mouseY;
//   }
//
//   if (mouseX > x2 - w2 && mouseX < x2 + w2  && mouseY > y2 - (h2 / 2) && mouseY < y2 + (h2 / 2)) {
//     dragging2 = true;
//
//     placeX = x2 - mouseX;
//     placeY = y2 - mouseY;
//   }
// }
function keyPressed () {
  if (key === 'ArrowRight') {
    r1 += 10;
    r1 = wrapClock(r1);
  }
  if (key === 'ArrowLeft') {
    r1 -= 10;
    r1 = wrapClock(r1);
  }
  if (key === 'ArrowUp') {
    r2 += 10;
    r2 = wrapClock(r2);
  }
  if (key === 'ArrowDown') {
    r2 -= 10;
    r2 = wrapClock(r2);
  }
}

function wrapClock (r) {
  var rotation = r % 360;
  if (rotation < 0) {
    rotation = 360 + rotation;
  }
  return rotation;
}

function mouseReleased () {
  dragging = false;
  dragging2 = false;
}
