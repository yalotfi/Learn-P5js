// Box Constructor (inherit position and dimension from Bubble)
function Box(xPos, yPos, radius) {
  Bubble.call(this, xPos, yPos, radius)

  this.display = function() {
    rectMode(CENTER);
    fill(255);
    rect(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
  }

  this.checkBottom = function() {
    return (this.yPos >= height - this.radius) ? true : false;
  }

  this.checkTop = function() {
    return (this.yPos <= this.radius) ? true : false;
  }

  this.fall = function() {
    this.xPos = this.xPos;
    if (this.checkBottom()) {
      this.yPos = height - this.radius;
    } else {
      this.yPos += 2;
    }
  }

  this.rise = function() {
    this.xPos = this.xPos;
    if (this.checkTop()) {
      this.yPos = this.radius;
    } else {
      this.yPos -= 2;
    }
  }
}
