var t = 0;
var scalePixels = 200;

function setup() {
  createCanvas(600,600);
  background(20);
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(2);
  stroke(255, 0, 200);
  point(x(t), y(t));
  t++;
}

function x(t) {
  return sin(t / 18) * scalePixels;
}

function y(t) {
  return cos(2 * t / 20) * scalePixels;
} 