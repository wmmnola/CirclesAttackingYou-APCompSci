var color = 1;
var fib = [1, 1];
var index = 0;
var x = 0;
var y = 0;
var r = 1;
var acc = 1;
var offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  offset = random(windowWidth);
  colorMode(HSB);
  noStroke();
}

function draw() {
  if (r < 100 + offset && acc < 100) {
    ellipse(width / 2, height / 2, r, r);
    fill(r % 360, 50, color);
    r += acc;
    acc += .001;
    color += .1;
    console.log(acc);
  } else {
    r = 1;
    offset = random(windowWidth);
  }
}
