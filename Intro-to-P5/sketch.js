var bubbles = [];  // Array of bubbles
var boxes = [];  // Array of Boxes
var dimensions = [48, 48];  // Full Width x Height
var crowdSize = 10;  // Starting population

function setup() {
  var canvasObj = createCanvas(600, 400);
	for (var i=0; i < crowdSize; i++) {
    var xPos = random(width);
    var yPos = random(height);
    var xDiam = dimensions[0];
    var yDiam = dimensions[1];
		bubbles.push(new Bubble(xPos, yPos, xDiam, yDiam));
	}
}

function mousePressed() {
  for (var i=0; i < bubbles.length; i++) {
    bubbles[i].switchColor();
  }
}

function draw() {
	background(0);
	for (var i=0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].display();
	}
}