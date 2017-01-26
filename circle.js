
var Circle = function(radius, initx, inity, acc, limit, generation) {


  this.r = radius;
  this.x = initx;
  this.y = inity;
  this.acc = acc / 10000;
  this.vel = 1;
  this.color = 1;
  this.bright = random(10, 90);
  this.sat = random(10, 90);

  if (!limit) {
    this.limit = random(500, 1000);
  } else {
    this.limit = limit;
  }
  if (!generation) {
    this.generation = 0;
  } else {
    this.generation = generation;
  }
  this.growing = true;
  this.kill = false;
  this.reproduced = false;
  this.babycircles = []

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

        if (!this.reproduced && this.generation <= 6) {
          this.explode(circles);
          this.reproduced = true;
        }


      }
      this.vel += this.acc;
      this.bright += this.acc;
      this.sat += this.acc;
    }

    if (this.babycircles) {
      for (var i = 0; i < this.babycircles.length; i++) {
        this.babycircles[i].draw();
      }
    }
  }
  this.explode = function() {
    console.log("EXPLODE")
    var offset = sin(45) * this.r / 2
    var circle1 = new Circle(1, (this.x - offset), this.y - offset, this.acc,
      this.limit / 2, this.generation + 1);
    var circle2 = new Circle(1, this.x + offset, this.y - offset, this.acc,
      this.limit / 2, this.generation + 1);
    var circle3 = new Circle(1, this.x - offset, this.y + offset, this.acc,
      this.limit / 2, this.generation + 1);
    var circle4 = new Circle(1, this.x + offset, this.y + offset, this.acc,
      this.limit / 2, this.generation + 1);
    console.log(circle1.x);
    this.babycircles.push(circle1);
    this.babycircles.push(circle2);
    this.babycircles.push(circle3);
    this.babycircles.push(circle4);
    console.log(this.babycircles);
  }
}
