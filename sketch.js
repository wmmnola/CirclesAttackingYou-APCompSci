var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  offset = random(windowWidth);
  colorMode(HSB);
  noStroke();
  var circle = new Circle(.01, windowWidth / 2, windowHeight / 2,
    random(1000), windowHeight);
  circles.push(circle);

}

function draw() {

  for (var i = 0; i < circles.length; i++) {
    circles[i].draw(circles);


  }


}
