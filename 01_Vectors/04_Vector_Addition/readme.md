# Vector Addition

```js
var position;
var velocity;

function setup() {
  createCanvas(640, 360);
  position = createVector(100, 100);
  velocity = createVector(2, 2);  
}
```

```js
function draw() {
  background(51);

  //Add the current speed to the position.
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if (( position.y > height) || (position.y < 0 )) {
    velocity.y = velocity.y * -1;
  }
    //Display circle at x position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, 48, 48);
}
```

<img src ="img/vectors.gif"/>
