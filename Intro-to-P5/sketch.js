var bubbles = [];  // Array of bubbles
var boxes = [];  // Array of Boxes
var crowdSize = 10;  // Starting population

function setup() {
  var canvasObj = createCanvas(600, 400);
	for (var i=0; i < crowdSize; i++) {
    var xPos = random(width);
    var yPos = random(height);
		bubbles.push(new Bubble(xPos, yPos));
	}
}

function draw() {
  background(0);
  for (var i=0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
  for (var i=0; i < boxes.length; i++) {
    boxes[i].update();
    boxes[i].display();
  }
}

function mousePressed() {
  boxify();
}

function boxify() {
  for (var i=bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].distFromMouse()) {
      boxes.push(new Box(bubbles[i].xPos, bubbles[i].yPos));
      bubbles.splice(i, 1);
    }
  }
}
