var Circle = function(radius, initx, inity, acc) {
  this.r = radius;
  this.x = initx;
  this.y = inity;
  this.acc = acc / 10000;
  this.vel = 1;
  this.color = 1;
  this.bright = random(10, 90);
  this.sat = random(10, 90);
  this.limit = random(500, 1000);
  this.growing = true;
  this.kill = false;

  this.draw = function(circles) {
    if (this.growing) {
      fill(this.color % 120, this.sat % 100, this.bright % 100, 100);
      this.color += this.vel
      if (this.r < this.limit) {
        push();
        ellipse(this.x, this.y, this.r, this.r)
        this.r += this.vel;
        pop();
      } else {
        this.explode();
      }
      this.vel += this.acc;
      this.bright += this.acc;
      this.sat += this.acc;
    }
  }
  this.explode = function(circles) {
    console.log("EXPLODE")
    var offset = sin(45) * this.r
    var circle1 = Circle(1, (this.x - offset), this.y - offset, this.acc);
    var circle2 = Circle(1, this.x + offset, this.y - offset, this.acc);
    var circle3 = Circle(1, this.x - offset, this.y + offset, this.acc);
    var circle4 = Circle(1, this.x + offset, this.y + offset, this.acc);
    circles.push(circle1);
    circles.push(circle2);
    circles.push(circle3);
    circles.push(circle4);
  }
}
