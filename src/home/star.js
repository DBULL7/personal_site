class Star {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color || '#00BFFF'
    this.vx = 0
    this.vy = 0
  }

  draw(context, canvas) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height);
    this.move(canvas)
    return this 
  };

  move(canvas) {
    this.vx = -1
    if (this.x === 0) {
      this.x = canvas.width - 10
    } 
    this.x += this.vx 
  };
}

module.exports = Star 