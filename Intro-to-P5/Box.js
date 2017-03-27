// Box Constructor (inherit position and dimension from Bubble)
function Box(xPos, yPos, radius) {
  Bubble.call(this, xPos, yPos, radius)
  this.display = function() {
    rectMode(CENTER);
    fill(255);
    rect(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
  }

  this.checkEdge = function() {
    if (this.yPos >= canvasObj.height) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.xPos = this.xPos;
    if (this.checkEdge()) {
      this.yPos = canvasObj.height;
    } else {
      this.yPos += 2;
    }
  }
}
