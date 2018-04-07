[Forces with Arbitrary](./)

# Forces with Arbitrary - Mover


```js
class Mover {

  constructor(m, x, y) {
    this.mass = m;
    this.position = createVector(x, y);
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
```


```js
update() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.aAcceleration = this.acceleration.x / 10.0;
  this.aVelocity += this.aAcceleration;
  this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
  this.angle += this.aVelocity;
  this.acceleration.mult(0);
}

display() {
  stroke(0);
  fill(175, 200);
  rectMode(CENTER);
  push();
  translate(this.position.x, this.position.y);
  rotate(this.angle);
  rect(0, 0, this.mass * 16, this.mass * 16);
  pop();
  }
}

```