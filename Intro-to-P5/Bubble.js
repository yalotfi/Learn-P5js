// Bubble Constructor
function Bubble(xPos, yPos) {
	this.xPos = xPos;
	this.yPos = yPos;
	this.wVal = 48;
	this.hVal = 48;
	this.colorVal = color(255, 0, 200);
	this.clickFlag = 0;

	// Method to display the bubble
	this.display = function() {
		fill(this.colorVal);
		ellipse(this.xPos, this.yPos, this.wVal, this.hVal);
	}

	// Method to move the bubble's position
	this.update = function() {
		this.xPos += random(-1,1);
		this.yPos += random(-1,1);
	}

	this.distFromMouse = function() {
		var radius = this.wVal / 2;
		var distance = dist(mouseX, mouseY, this.xPos, this.yPos);
		return (distance < radius) ? true : false;
	}
}
