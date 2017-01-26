var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  offset = random(windowWidth);
  colorMode(HSB);
  noStroke();

}

function draw() {
  var circle = new Circle(.01, random(windowWidth), random(windowHeight),
    random(1000));
  circles.push(circle);
  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
    for (var j = 0; j < circles.length; j++) {
      if (!(circles[j].x == circles[i].x) && !(circles[j].y == circles[i].x)) {
        var d = dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y);

        if (d <= (circles[i].r / 2 + circles[j].r / 2)) {
          circles[i].growing = false;
          circles[j].growing = false
        }
      }
      if (circles[i].kill) {
        circles = circles.splice(i);
      }
    }
  }


}
