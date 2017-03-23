// Bubble Constructor
function Bubble(xPos, yPos, xDiam, yDiam) {
	// Position of the ellipse
	this.xPos = xPos;
	this.yPos = yPos;

	// Width and height of an ellipse
	this.xDiam = xDiam;
	this.yDiam = yDiam;

	// Other Variables
	this.colorVal = color(255, 150);
	this.clickFlag = 0;

	this.display = function() {
		// stroke(255); // No outline
		fill(this.colorVal);
		ellipse(this.xPos, this.yPos, this.xDiam, this.yDiam);
	}

	this.move = function() {
		this.xPos += random(-1	,1);
		this.yPos += random(-1, 1);
	}

	this.switchColor = function() {
		this.clickFlag += 1;
		if (this.clickFlag % 2 === 0) {
			this.colorVal = color(255, 150);
		} else {
			this.colorVal = color(255, 0, 200);
		}
	}

	// this.switchShape = function() {

	// }
}
