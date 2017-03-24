// Bubble Constructor
function Bubble(xPos, yPos) {
	this.xPos = xPos;
	this.yPos = yPos;
	this.wVal = 48;
	this.hVal = 48;
	this.colorVal = color(255, 150);
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

	// Method to switch the bubble's color
	this.switchColor = function() {
		this.clickFlag += 1;
		if (this.clickFlag % 2 === 0) {
			this.colorVal = color(255, 150);
		} else {
			this.colorVal = color(255, 0, 200);
		}
	}
}
