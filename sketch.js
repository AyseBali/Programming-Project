/* globals createCanvas, background, image */

var rightTime = false;

var clock;

var arrow1;
var arrow2;

var x1, y1, w1, h1, r1;
var x2, y2, w2, h2, r2;

function preload () {
  clock = loadImage('clock.png');
  arrow1 = loadImage('croppedarrow.png');
  arrow2 = loadImage('croppedarrow2.png');
}

function setup () {
  var canvas =
  createCanvas(550, 550);
  canvas.parent('sketch-holder');
  angleMode(DEGREES);

  // magic to make the browser not scroll with the arrow keys
  window.addEventListener('keydown', function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  }, false);

  //  Big Arrow
  x1 = 300;
  y1 = 300;
  w1 = 150;
  h1 = 80;
  r1 = 0;

  //  Little Arrow
  x2 = 300;
  y2 = 300;
  w2 = 100;
  h2 = 70;
  r2 = 0;
}

function draw () {
  background('powderblue');
  image(clock, 50, 50, 500, 500);
  text('r1: ' + r1.toFixed(1), 510, 460);
  text('r2: ' + r2.toFixed(1), 510, 500);
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
  if (r1 === 150 && r2 === 90) {
    document.getElementById('img1').src = '1.jpeg';
    rightTime = true;
  } else {
    rightTime = false;
  }
  // 11:15 am
  if (r1 === 180 && r2 === 60) {
    document.getElementById('img2').src = '2.jpeg';
    rightTime = true;
  }

  // 7:45 pm
  if (r1 === 0 && r2 === 300) {
    document.getElementById('img3').src = '3.jpeg';
    rightTime = true;
  }
  // 5:05 am
  if (r1 === 120 && r2 === 240) {
    document.getElementById('img4').src = '4.jpeg';
    rightTime = true;
  }
  // 3:30 pm
  if (r1 === 270 && r2 === 180) {
    document.getElementById('img5').src = '5.jpeg';
    rightTime = true;
  }
  // 9:20 am
  if (r1 === 210 && r2 === 0) {
    document.getElementById('img6').src = '6.jpeg';
    rightTime = true;
  }
  if (rightTime) {
    push();
    fill('red');
    textSize(35);
    text('Congrats!!!', 200, 30);
    pop();
  }
}

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
