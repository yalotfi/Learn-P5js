var t = 0;  // Parameter, t
var a = 1;  // Ratio of a to b
var b = 2;  // Ratio of a to b
var d = ((b - a) / b) * (Math.PI / 2);  // Delta term
var k_x = 3;  // Constant of x
var k_y = 2;  // Constant of y
var scalePixels = 100; // Scale by pixels

function setup() {
  createCanvas(800, 800);
  background(200);
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(3);
  stroke(255, 0, 200);
  point(x(t), y(t));
  t++;
}

function x(t) {
  return a * cos(k_x * t) * scalePixels;
}

function y(t) {
  return b * sin(k_y * t) * scalePixels;
}