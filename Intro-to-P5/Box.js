// Box Constructor (inherit position and dimension from Bubble)
function Box(xPos, yPos, wVal, hVal) {
  Bubble.call(this, xPos, yPos, wVal, hVal);
  this.display = function() {
    fill(255);
    rect(this.xPos, this.yPos, this.wVal, this.hVal);
  }

  this.update = function() {
    this.xPos += random(-1,1);
    this.yPos += random(-1,1);
  }
}
