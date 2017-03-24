// Bubble Constructor
function Bubble(x, y, r) {
	this.xPos = x;  // Random X coordinate
	this.yPos = y;  // Random Y coordinate
	this.radius = r;  // Radius Default
	this.colorVal = color(255, 0, 200);  // Purple-Pink Default

	// Display the bubble
	this.display = function() {
		fill(this.colorVal);
		ellipse(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
	}

	// Randomly move the bubble's position
	this.update = function() {
		this.xPos += random(-1,1);
		this.yPos += random(-1,1);
	}

	// Check the distance between the mouse coordinates and Bubble center
	this.distFromMouse = function() {
		var distance = dist(mouseX, mouseY, this.xPos, this.yPos);
		return (distance < this.radius) ? true : false;
	}

	// Check intersection between to Bubble objects
	this.intersects = function(other) {
		var thisRadius =  this.radius * 2;
		var otherRadius = other.radius * 2;
		var distance = dist(this.xPos, this.yPos, other.xPos, other.yPos);
		return (distance < thisRadius + otherRadius) ? true : false;
	}
}
