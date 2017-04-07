var t=0;   // Theta
var r=130;  // Radius of moving circle
var R=150;  // Radius of fixed circle
var d=130;  // Point distance from center of moving circle

function setup() {
  createCanvas(600, 400);
  background(100);
}

function draw() {
  translate(width/2, height/2);
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(0,0,R*2);
  strokeWeight(2);
  stroke(255, 0, 200);
  point(x(t), y(t));
  t++;
}

var diff = R - r;
function x(t) {
  return diff * cos(t) + d * cos(diff / r * t);
}

function y(t) {
  return diff * sin(t) - d * sin(diff / r * t);
}