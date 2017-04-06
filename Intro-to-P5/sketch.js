var bubbles = [];  // Array of bubbles
var boxes = [];  // Array of Boxes
var crowdSize = 51;  // Starting population
var userRadius = 24;  // Radius of Shapes
var canvasObj;

function setup() {
  canvasObj = createCanvas(window.innerWidth, window.innerHeight);
  infinity = 0;
  while (bubbles.length < crowdSize) {
    var overlap = false;
    var tempB = new Bubble(random(width), random(height), userRadius);
    for (var j=0; j < bubbles.length; j++) {
      if (tempB.intersects(bubbles[j])) {
        overlap = true;
      }
    }
    if (!overlap) {
      bubbles.push(tempB);
    }
    infinity++;
    if (infinity > 1000) {
      break;
    }
  }
}

function draw() {
  background(0);
  for (var i=bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].update();
    for (var j=bubbles.length - 1; j >= 0; j--) {
      if (i !== j && bubbles[i].intersects(bubbles[j])) {
        boxes.push(new Box(bubbles[i].xPos, bubbles[i].yPos, userRadius));
        boxes.push(new Box(bubbles[j].xPos, bubbles[j].yPos, userRadius));
        bubbles.splice(i, 1);
        bubbles.splice(j, 1);
      }
    }
  }
  for (var i=0; i < boxes.length; i++) {
    boxes[i].display();
    (i % 2 === 0) ? boxes[i].fall() : boxes[i].rise();
  }
}

function mousePressed() {
  boxifyOnClick();
}

function windowResized() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function boxifyOnClick() {
  for (var i=bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].distFromMouse()) {
      boxes.push(new Box(bubbles[i].xPos, bubbles[i].yPos, bubbles[i].radius));
      bubbles.splice(i, 1);
    }
  }
}
