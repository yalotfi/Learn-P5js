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
  for (var i=0; i < bubbles.length; i++) {
    bubbles[i].switchColor();
  }
  checkBox();
}

function checkBox() {
  /*
  **
  Better check for radius
  **
  */
  for (var i=bubbles.length - 1; i >= 0; i--) {
    var xPos = bubbles[i].xPos;
    var yPos = bubbles[i].yPos;
    var distance = dist(xPos, yPos, mouseX, mouseY);
    if (distance < xPos / 2) {
      bubbles.splice(i, 1);
      boxes.push(new Box(xPos, yPos));
      console.log('Boxified!');
    }
  }
}
