var bubbles = [];  // Array of bubbles
var boxes = [];  // Array of Boxes
var crowdSize = 5;  // Starting population
var userRadius = 24;  // Radius of Shapes

function setup() {
  var canvasObj = createCanvas(600, 400);
  for (var i=0; i < crowdSize; i++) {
    bubbles.push(new Bubble(random(width), random(height), userRadius));
  }
}

function draw() {
  background(0);
  for (var i=0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
    for (var j=0; j < bubbles.length; j++) {
      if (i !== j && bubbles[i].intersects(bubbles[j])) {
        // console.log('Bubble ' + i + ' intersects Bubble ' + j);
      }
    }
  }
  for (var i=0; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].update();
  }
}

function mousePressed() {
  boxify();
}

function boxify() {
  for (var i=bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].distFromMouse()) {
      boxes.push(new Box(bubbles[i].xPos, bubbles[i].yPos, bubbles[i].radius));
      bubbles.splice(i, 1);
    }
  }
}
