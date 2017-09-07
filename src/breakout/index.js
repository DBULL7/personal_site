const Board = require('./Board.js')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let board = new Board({ ctx })
let mute = document.getElementById('mute')


requestAnimationFrame(function gameloop(timer) {
  board.gameDraw(timer)
  if (board.lives > (-1)) {
    requestAnimationFrame(gameloop)
  }
})

window.addEventListener('click', function () {
  if (board.ball.x == 240 && board.ball.y == 440) {
    board.ball.ballStartVelocity()
  }
})


window.addEventListener('keydown', function (event) {
  if (event.keyCode <= 222 && board.ball.x == 240 && board.ball.y == 440 || event.key == typeof str) {
    board.ball.ballStartVelocity()
  }
})


canvas.addEventListener('mousemove', function (e) {
  let mouseLocation = e.offsetX

  if (mouseLocation >= 475) {
    this.x = 450
  } else if (mouseLocation <= 25) {
    this.x = 0
  } else {
    this.x = (mouseLocation - 25)
  }
}.bind(board.paddle))


window.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowRight') {
    board.paddle.x + board.paddle.width > 450 ? board.paddle.x = 450 : board.paddle.x += 40
  } else if (event.key == 'ArrowLeft') {
    board.paddle.x < 50 ? board.paddle.x = 0 : board.paddle.x -= 40
  }
})


mute.addEventListener('click', function () {
  board.gameplaySound.paused ? board.gameplaySound.play() : board.gameplaySound.pause()
})