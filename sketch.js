var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  offset = random(windowWidth);
  colorMode(HSB);
  noStroke();
  var circle = new Circle(.01, random(windowWidth), random(windowHeight),
    random(1000));
  circles.push(circle);

}

function draw() {

  for (var i = 0; i < circles.length; i++) {
    circles[i].draw(circles);

  }


}
