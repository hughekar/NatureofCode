# Attraction Array with Oscillation - Crawlers

```js
class Crawler {

  constructor() {
    this.acc = createVector();
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.pos = createVector(random(width), random(height));
    this.mass = random(8, 16);
    this.osc = new Oscillator(this.mass * 2);
  }

  applyForce(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  // Method to update position
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // Multiplying by 0 sets the all the components to 0
    this.acc.mult(0);
    this.osc.update(this.vel.mag() / 10);
  }
```


```js
// Method to display
display() {
  let angle = this.vel.heading();
  push();
  translate(this.pos.x, this.pos.y);
  rotate(angle);
  ellipseMode(CENTER);
  stroke(0);
  fill(175, 100);
  ellipse(0, 0, this.mass * 2, this.mass * 2);
  this.osc.display(this.pos);
  pop();
}
}
```
