function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(225);

  let period = 120;
  let amplitude = 300;

  // Calculating horizontal position according to formula for simple harmonic motion
  let x = amplitude * sin(TWO_PI * frameCount / period);

  stroke(0);
  strokeWeight(3);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  ellipse(x, 0, 48, 48);
}
