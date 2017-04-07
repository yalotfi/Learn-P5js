var t = 0;
var a = 1;
var b = 3;
var k_x = 3;
var k_y = 2;

function setup() {
  createCanvas(600, 400);
  background(20);
}

function draw() {
  translate(width/2, height/2);
  strokeWeight(3);
  stroke(255, 0, 200);
  point(x(t), y(t));
  t++;
}

function x(t) {
  return a * cos(k_x * t);
}

function y(t) {
  return b * cos(k_y * t);
}