(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y,
        color = _ref.color;

    _classCallCheck(this, Ball);

    this.height = height || 10;
    this.width = width || 10;
    this.x = x;
    this.y = y;
    this.color = color || '#bc3654';
    this.vx = 0;
    this.vy = 0;
  }

  _createClass(Ball, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.height, this.width);
      this.move();
      this.collision();
      return this;
    }
  }, {
    key: 'move',
    value: function move() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }, {
    key: 'collision',
    value: function collision() {
      if (this.y <= 0) {
        this.vy = -this.vy;
      }
      if (this.y + this.height >= 500) {
        this.y = this.y - 1;
        this.vy = 0;
        this.vx = 0;
      }
      if (this.x <= 0 || this.x + this.width >= 500) {
        this.vx = -this.vx;
      }
      return this;
    }
  }, {
    key: 'ballStartVelocity',
    value: function ballStartVelocity() {
      this.vx = 4;
      this.vy = -4;
    }
  }]);

  return Ball;
}();

module.exports = Ball;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(_ref) {
    var x = _ref.x,
        y = _ref.y,
        height = _ref.height,
        width = _ref.width,
        color = _ref.color;

    _classCallCheck(this, Block);

    this.x = x || 0;
    this.y = y || 0;
    this.height = height || 25;
    this.width = width || 50;
    this.color = color || 'green';
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
      return this;
    }
  }]);

  return Block;
}();

module.exports = Block;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = require('./Paddle.js');
var Ball = require('./Ball.js');
var Levels = require('./Levels.js');
var start = null;

var Board = function () {
  function Board(_ref) {
    var ctx = _ref.ctx;

    _classCallCheck(this, Board);

    this.width = 500;
    this.height = 500;
    this.paddle = new Paddle({ x: 225, height: 10, width: 50 });
    this.block = new Levels().level1();
    this.level = 1;
    this.score = 0;
    this.lives = 5;
    this.ball = new Ball({ x: 240, y: 440, width: 10, height: 10, color: '#bc3654' });
    this.context = ctx;

    this.blockDestroySound = new Audio("breakout/Explosion6.wav");
    this.paddleHitSound = new Audio("breakout/sfx_sounds_impact13.wav");
    this.gameplaySound = new Audio("breakout/Visager_-_04_-_Factory_Time.mp3");
  }

  _createClass(Board, [{
    key: 'drawBrickLoop',
    value: function drawBrickLoop() {
      if (this.score === 120) {
        for (var j = 0; j < 90; j++) {
          this.block = new Levels().winGame();
          this.block[j].draw(this.context);
          this.ball.x = 240;
          this.ball.y = 440;
          this.ball.vx = 0;
          this.ball.vy = 0;
        }
      } else if (this.score == 60) {
        for (var i = 0; i < 60; i++) {
          this.block = new Levels().level2();
          this.block[i].draw(this.context);
          this.ball.color = '#00BFFF';
        }
      } else if (this.score == 0) {
        for (var _i = 0; _i < this.block.length; _i++) {
          this.block[_i].draw(this.context);
        }
      } else {
        for (var _i2 = 0; _i2 < this.block.length; _i2++) {
          this.block[_i2].draw(this.context);
        }
      }
    }
  }, {
    key: 'blockCollision',
    value: function blockCollision() {
      for (var i = 0; i < this.block.length; i++) {
        if (this.ball.x + this.ball.width >= this.block[i].x && this.ball.x - this.ball.width <= this.block[i].x + this.block[i].width && this.ball.y + this.ball.height >= this.block[i].y && this.ball.y + this.ball.height <= this.block[i].y + this.block[i].height) {
          this.ball.vy = -this.ball.vy;
          this.block.splice(i, 1);
          this.changeScoreAndLevel();
          this.blockDestroySound.play();
        }
      }
    }
  }, {
    key: 'levelTwoBallRestart',
    value: function levelTwoBallRestart() {
      if (this.level == 2 && this.ball.vx == 4 && this.ball.vy == -4 && this.ball.x >= 240) {
        this.ball.vx = 6;
        this.ball.vy = -6;
      }
    }
  }, {
    key: 'lifeCounter',
    value: function lifeCounter() {
      var lives = document.getElementById('lives');

      this.lives--;
      lives.innerText = this.lives;
    }
  }, {
    key: 'changeScoreAndLevel',
    value: function changeScoreAndLevel() {
      var scoreHtml = document.getElementById('score');
      var levelHtml = document.getElementById('level');

      this.score++;
      scoreHtml.innerText = this.score;

      if (this.score == 60) {
        this.level++;
        levelHtml.innerText = this.level;
        this.ball.x = 240;
        this.ball.y = 440;
        this.ball.vy = -4;
      }
    }
  }, {
    key: 'paddleCollisionTopLeft',
    value: function paddleCollisionTopLeft() {
      if (this.ball.x <= this.paddle.x + 10 && this.ball.x + this.ball.width >= this.paddle.x && this.ball.y < this.paddle.y + this.paddle.height && this.ball.height + this.ball.y > this.paddle.y) {
        this.ball.vy = -this.ball.vy;

        if (this.ball.vx > 0) {
          this.ball.vx = -this.ball.vx;
          this.paddleHitSound.play();
        }
      }
    }
  }, {
    key: 'paddleCollisionTopCenter',
    value: function paddleCollisionTopCenter() {
      if (this.ball.x <= this.paddle.x + 10 + (this.paddle.width - 20) && this.ball.x > this.paddle.x + 10 && this.ball.y < this.paddle.y + this.paddle.height && this.ball.height + this.ball.y > this.paddle.y) {
        this.ball.vy = -this.ball.vy;
        this.paddleHitSound.play();
      }
    }
  }, {
    key: 'paddleCollisionTopRight',
    value: function paddleCollisionTopRight() {
      if (this.ball.x < this.paddle.x + 40 + (this.paddle.width - 40) && this.ball.x > this.paddle.x + 40 && this.ball.y < this.paddle.y + this.paddle.height && this.ball.height + this.ball.y > this.paddle.y) {
        this.ball.vy = -this.ball.vy;

        if (this.ball.vx < 0) {
          this.ball.vx = -this.ball.vx;
          this.paddleHitSound.play();
        }
      }
    }
  }, {
    key: 'restartBall',
    value: function restartBall(timer) {
      if (this.ball.vx === 0 && this.ball.vy === 0 && this.ball.y == 491 && !start) {
        start = timer;
      }

      var delay = timer - start;

      if (this.ball.vx === 0 && this.ball.vy === 0 && this.ball.y == 489 && delay > 1500) {
        this.ball.x = 240;
        this.ball.y = 440;
        start = null;
        this.lifeCounter();
      }

      if (this.ball.vx === 0 && this.ball.vy === 0 && this.ball.y == 489 && 0 < this.lives < 5) {
        if (this.lives == 0) {
          var result = confirm('Game Over. Want to Play Again?');

          this.ball.vx = 0;
          this.ball.vy = 0;
          this.ball.x = 240;
          this.ball.y = 520;
          this.lives = 101;
          if (result == true) {
            window.location.reload(true);
          }
        }
      }
    }
  }, {
    key: 'gameDraw',
    value: function gameDraw(timer) {
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.paddle.draw(this.context);
      this.ball.draw(this.context);
      this.paddleCollisionTopCenter();
      this.paddleCollisionTopLeft();
      this.paddleCollisionTopRight();
      this.drawBrickLoop();
      this.blockCollision();
      this.levelTwoBallRestart();
      this.restartBall(timer, this.context);
    }
  }]);

  return Board;
}();

module.exports = Board;

},{"./Ball.js":1,"./Levels.js":4,"./Paddle.js":5}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = require('./Block.js');

var Levels = function () {
  function Levels() {
    _classCallCheck(this, Levels);
  }

  _createClass(Levels, [{
    key: 'level1',
    value: function level1() {
      var blockArray = [];
      var z = 1;
      var c = -1;

      for (var i = 0; i < 60; i++) {
        var x = i % 10 * 50;

        if (i % 10 === 0) {
          z++;
          c++;
        }
        var y = z * 25;
        var blockColors = ['#bc3654', '#bc2e24', '#bc4b24', '#bcae24', '#24be24', '#2436bc'];

        blockArray.push(new Block({ x: x, y: y, width: 50, height: 25, color: blockColors[c] }));
      }
      return blockArray;
    }
  }, {
    key: 'level2',
    value: function level2() {
      var blockArray = [];
      var z = 1;
      var c = -1;

      for (var i = 0; i < 60; i++) {
        var x = i % 10 * 50;

        if (i % 10 === 0) {
          z++;
          c++;
        }
        var y = z * 25;
        var blockColors = ['#2436bc', '#24be24', '#bcae24', '#bc4b24', '#bc2e24', '#bc3654'];

        blockArray.push(new Block({ x: x, y: y, width: 50, height: 25, color: blockColors[c] }));
      }
      return blockArray;
    }
  }, {
    key: 'winGame',
    value: function winGame() {
      var winArray = [1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 1, 0, 1, 0, 1, 2, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2, 1, 1, 0, 1, 1, 0, 1, 0, 1, 2, 1, 1, 1, 1, 1, 0, 1, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 0, 1];

      var z = 1;

      for (var i = 0; i < 90; i++) {
        var x = i % 10 * 50;

        if (i % 10 === 0) {
          z++;
        }
        var y = z * 25;

        if (winArray[i] == 0) {
          winArray.splice(i, 1, new Block({ x: x, y: y, width: 50, height: 25, color: '#040204' }));
        } else if (winArray[i] == 1) {
          winArray.splice(i, 1, new Block({ x: x, y: y, width: 50, height: 25, color: '#bc3654' }));
        } else if (winArray[i] == 2) {
          winArray.splice(i, 1, new Block({ x: x, y: y, width: 50, height: 25, color: '#bc4b24' }));
        }
      }
      return winArray;
    }
  }]);

  return Levels;
}();

module.exports = Levels;

},{"./Block.js":2}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = function () {
  function Paddle(_ref) {
    var x = _ref.x,
        y = _ref.y,
        height = _ref.height,
        width = _ref.width;

    _classCallCheck(this, Paddle);

    this.x = x || 225;
    this.y = y || 450;
    this.height = height || 10;
    this.width = width || 50;
  }

  _createClass(Paddle, [{
    key: 'draw',
    value: function draw(context) {
      context.fillStyle = '#bc3654';
      context.fillRect(this.x, this.y, this.width, this.height);
      return this;
    }
  }]);

  return Paddle;
}();

module.exports = Paddle;

},{}],6:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Board = require('./Board.js');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var board = new Board({ ctx: ctx });
var mute = document.getElementById('mute');

requestAnimationFrame(function gameloop(timer) {
  board.gameDraw(timer);
  if (board.lives > -1) {
    requestAnimationFrame(gameloop);
  }
});

window.addEventListener('click', function () {
  if (board.ball.x == 240 && board.ball.y == 440) {
    board.ball.ballStartVelocity();
  }
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode <= 222 && board.ball.x == 240 && board.ball.y == 440 || event.key == (typeof str === 'undefined' ? 'undefined' : _typeof(str))) {
    board.ball.ballStartVelocity();
  }
});

canvas.addEventListener('mousemove', function (e) {
  var mouseLocation = e.offsetX;

  if (mouseLocation >= 475) {
    this.x = 450;
  } else if (mouseLocation <= 25) {
    this.x = 0;
  } else {
    this.x = mouseLocation - 25;
  }
}.bind(board.paddle));

window.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowRight') {
    board.paddle.x + board.paddle.width > 450 ? board.paddle.x = 450 : board.paddle.x += 40;
  } else if (event.key == 'ArrowLeft') {
    board.paddle.x < 50 ? board.paddle.x = 0 : board.paddle.x -= 40;
  }
});

mute.addEventListener('click', function () {
  board.gameplaySound.paused ? board.gameplaySound.play() : board.gameplaySound.pause();
});

},{"./Board.js":3}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYnJlYWtvdXQvQmFsbC5qcyIsInNyYy9icmVha291dC9CbG9jay5qcyIsInNyYy9icmVha291dC9Cb2FyZC5qcyIsInNyYy9icmVha291dC9MZXZlbHMuanMiLCJzcmMvYnJlYWtvdXQvUGFkZGxlLmpzIiwic3JjL2JyZWFrb3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sSTtBQUNKLHNCQUE0QztBQUFBLFFBQTlCLE1BQThCLFFBQTlCLE1BQThCO0FBQUEsUUFBdEIsS0FBc0IsUUFBdEIsS0FBc0I7QUFBQSxRQUFmLENBQWUsUUFBZixDQUFlO0FBQUEsUUFBWixDQUFZLFFBQVosQ0FBWTtBQUFBLFFBQVQsS0FBUyxRQUFULEtBQVM7O0FBQUE7O0FBQzFDLFNBQUssTUFBTCxHQUFjLFVBQVUsRUFBeEI7QUFDQSxTQUFLLEtBQUwsR0FBYSxTQUFTLEVBQXRCO0FBQ0EsU0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxTQUFTLFNBQXRCO0FBQ0EsU0FBSyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUssRUFBTCxHQUFVLENBQVY7QUFDRDs7Ozt5QkFHSSxPLEVBQVM7QUFDWixjQUFRLFNBQVIsR0FBb0IsS0FBSyxLQUF6QjtBQUNBLGNBQVEsUUFBUixDQUFpQixLQUFLLENBQXRCLEVBQXlCLEtBQUssQ0FBOUIsRUFBaUMsS0FBSyxNQUF0QyxFQUE4QyxLQUFLLEtBQW5EO0FBQ0EsV0FBSyxJQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzsyQkFHTTtBQUNMLFdBQUssQ0FBTCxJQUFVLEtBQUssRUFBZjtBQUNBLFdBQUssQ0FBTCxJQUFVLEtBQUssRUFBZjtBQUNEOzs7Z0NBR1c7QUFDVixVQUFJLEtBQUssQ0FBTCxJQUFVLENBQWQsRUFBaUI7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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBCYWxsIHtcbiAgY29uc3RydWN0b3IoeyBoZWlnaHQsIHdpZHRoLCB4LCB5LCBjb2xvciB9KSB7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMTBcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgMTBcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuY29sb3IgPSBjb2xvciB8fCAnI2JjMzY1NCdcbiAgICB0aGlzLnZ4ID0gMFxuICAgIHRoaXMudnkgPSAwXG4gIH1cblxuXG4gIGRyYXcoY29udGV4dCkge1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvclxuICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoKVxuICAgIHRoaXMubW92ZSgpXG4gICAgdGhpcy5jb2xsaXNpb24oKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudnhcbiAgICB0aGlzLnkgKz0gdGhpcy52eVxuICB9XG5cblxuICBjb2xsaXNpb24oKSB7XG4gICAgaWYgKHRoaXMueSA8PSAwKSB7XG4gICAgICB0aGlzLnZ5ID0gLXRoaXMudnlcbiAgICB9XG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID49IDUwMCkge1xuICAgICAgdGhpcy55ID0gdGhpcy55IC0gMVxuICAgICAgdGhpcy52eSA9IDBcbiAgICAgIHRoaXMudnggPSAwXG4gICAgfVxuICAgIGlmICh0aGlzLnggPD0gMCB8fCB0aGlzLnggKyB0aGlzLndpZHRoID49IDUwMCkge1xuICAgICAgdGhpcy52eCA9IC10aGlzLnZ4XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBiYWxsU3RhcnRWZWxvY2l0eSgpIHtcbiAgICB0aGlzLnZ4ID0gNFxuICAgIHRoaXMudnkgPSAtNFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQmFsbCIsImNsYXNzIEJsb2NrIHtcbiAgY29uc3RydWN0b3IoeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9KSB7XG4gICAgdGhpcy54ID0geCB8fCAwXG4gICAgdGhpcy55ID0geSB8fCAwXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgfHwgMjVcbiAgICB0aGlzLndpZHRoID0gd2lkdGggfHwgNTBcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgJ2dyZWVuJ1xuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2NrIiwiY29uc3QgUGFkZGxlID0gcmVxdWlyZSgnLi9QYWRkbGUuanMnKVxuY29uc3QgQmFsbCA9IHJlcXVpcmUoJy4vQmFsbC5qcycpXG5jb25zdCBMZXZlbHMgPSByZXF1aXJlKCcuL0xldmVscy5qcycpXG5sZXQgc3RhcnQgPSBudWxsXG5cblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3Rvcih7IGN0eCB9KSB7XG4gICAgdGhpcy53aWR0aCA9IDUwMFxuICAgIHRoaXMuaGVpZ2h0ID0gNTAwXG4gICAgdGhpcy5wYWRkbGUgPSBuZXcgUGFkZGxlKHsgeDogMjI1LCBoZWlnaHQ6IDEwLCB3aWR0aDogNTAgfSlcbiAgICB0aGlzLmJsb2NrID0gbmV3IExldmVscygpLmxldmVsMSgpXG4gICAgdGhpcy5sZXZlbCA9IDFcbiAgICB0aGlzLnNjb3JlID0gMFxuICAgIHRoaXMubGl2ZXMgPSA1XG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwoeyB4OiAyNDAsIHk6IDQ0MCwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLCBjb2xvcjogJyNiYzM2NTQnIH0pXG4gICAgdGhpcy5jb250ZXh0ID0gY3R4XG5cbiAgICB0aGlzLmJsb2NrRGVzdHJveVNvdW5kID0gbmV3IEF1ZGlvKFwiYnJlYWtvdXQvRXhwbG9zaW9uNi53YXZcIilcbiAgICB0aGlzLnBhZGRsZUhpdFNvdW5kICAgID0gbmV3IEF1ZGlvKFwiYnJlYWtvdXQvc2Z4X3NvdW5kc19pbXBhY3QxMy53YXZcIilcbiAgICB0aGlzLmdhbWVwbGF5U291bmQgICAgID0gbmV3IEF1ZGlvKFwiYnJlYWtvdXQvVmlzYWdlcl8tXzA0Xy1fRmFjdG9yeV9UaW1lLm1wM1wiKVxuICB9XG5cblxuICBkcmF3QnJpY2tMb29wKCkge1xuICAgIGlmICh0aGlzLnNjb3JlID09PSAxMjApIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTA7IGorKykge1xuICAgICAgICB0aGlzLmJsb2NrID0gbmV3IExldmVscygpLndpbkdhbWUoKVxuICAgICAgICB0aGlzLmJsb2NrW2pdLmRyYXcodGhpcy5jb250ZXh0KVxuICAgICAgICB0aGlzLmJhbGwueCA9IDI0MFxuICAgICAgICB0aGlzLmJhbGwueSA9IDQ0MFxuICAgICAgICB0aGlzLmJhbGwudnggPSAwXG4gICAgICAgIHRoaXMuYmFsbC52eSA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPT0gNjApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgICB0aGlzLmJsb2NrID0gbmV3IExldmVscygpLmxldmVsMigpXG4gICAgICAgIHRoaXMuYmxvY2tbaV0uZHJhdyh0aGlzLmNvbnRleHQpXG4gICAgICAgIHRoaXMuYmFsbC5jb2xvciA9ICcjMDBCRkZGJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSA9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmxvY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ibG9ja1tpXS5kcmF3KHRoaXMuY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJsb2NrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmxvY2tbaV0uZHJhdyh0aGlzLmNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmxvY2tDb2xsaXNpb24oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJsb2NrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYmFsbC54ICsgdGhpcy5iYWxsLndpZHRoID49IHRoaXMuYmxvY2tbaV0ueCAmJlxuICAgICAgICB0aGlzLmJhbGwueCAtIHRoaXMuYmFsbC53aWR0aCA8PSB0aGlzLmJsb2NrW2ldLnggKyB0aGlzLmJsb2NrW2ldLndpZHRoICYmXG4gICAgICAgIHRoaXMuYmFsbC55ICsgdGhpcy5iYWxsLmhlaWdodCA+PSB0aGlzLmJsb2NrW2ldLnkgJiZcbiAgICAgICAgdGhpcy5iYWxsLnkgKyB0aGlzLmJhbGwuaGVpZ2h0IDw9IHRoaXMuYmxvY2tbaV0ueSArIHRoaXMuYmxvY2tbaV0uaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuYmFsbC52eSA9IC10aGlzLmJhbGwudnlcbiAgICAgICAgdGhpcy5ibG9jay5zcGxpY2UoaSwgMSlcbiAgICAgICAgdGhpcy5jaGFuZ2VTY29yZUFuZExldmVsKClcbiAgICAgICAgdGhpcy5ibG9ja0Rlc3Ryb3lTb3VuZC5wbGF5KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGxldmVsVHdvQmFsbFJlc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPT0gMiAmJiB0aGlzLmJhbGwudnggPT0gNCAmJiB0aGlzLmJhbGwudnkgPT0gLTQgJiYgdGhpcy5iYWxsLnggPj0gMjQwKSB7XG4gICAgICB0aGlzLmJhbGwudnggPSA2XG4gICAgICB0aGlzLmJhbGwudnkgPSAtNlxuICAgIH1cbiAgfVxuXG5cbiAgbGlmZUNvdW50ZXIoKSB7XG4gICAgbGV0IGxpdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmVzJylcblxuICAgIHRoaXMubGl2ZXMtLVxuICAgIGxpdmVzLmlubmVyVGV4dCA9IHRoaXMubGl2ZXNcbiAgfVxuXG5cbiAgY2hhbmdlU2NvcmVBbmRMZXZlbCgpIHtcbiAgICBsZXQgc2NvcmVIdG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJylcbiAgICBsZXQgbGV2ZWxIdG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJylcblxuICAgIHRoaXMuc2NvcmUrK1xuICAgIHNjb3JlSHRtbC5pbm5lclRleHQgPSB0aGlzLnNjb3JlXG5cbiAgICBpZiAodGhpcy5zY29yZSA9PSA2MCkge1xuICAgICAgdGhpcy5sZXZlbCsrXG4gICAgICBsZXZlbEh0bWwuaW5uZXJUZXh0ID0gdGhpcy5sZXZlbFxuICAgICAgdGhpcy5iYWxsLnggPSAyNDBcbiAgICAgIHRoaXMuYmFsbC55ID0gNDQwXG4gICAgICB0aGlzLmJhbGwudnkgPSAtNFxuICAgIH1cbiAgfVxuXG5cbiAgcGFkZGxlQ29sbGlzaW9uVG9wTGVmdCgpIHtcbiAgICBpZiAodGhpcy5iYWxsLnggPD0gdGhpcy5wYWRkbGUueCArIDEwICYmXG4gICAgICB0aGlzLmJhbGwueCArIHRoaXMuYmFsbC53aWR0aCA+PSB0aGlzLnBhZGRsZS54ICYmXG4gICAgICB0aGlzLmJhbGwueSA8IHRoaXMucGFkZGxlLnkgKyB0aGlzLnBhZGRsZS5oZWlnaHQgJiZcbiAgICAgIHRoaXMuYmFsbC5oZWlnaHQgKyB0aGlzLmJhbGwueSA+IHRoaXMucGFkZGxlLnlcbiAgICApIHtcbiAgICAgIHRoaXMuYmFsbC52eSA9IC10aGlzLmJhbGwudnlcblxuICAgICAgaWYgKHRoaXMuYmFsbC52eCA+IDApIHtcbiAgICAgICAgdGhpcy5iYWxsLnZ4ID0gLXRoaXMuYmFsbC52eFxuICAgICAgICB0aGlzLnBhZGRsZUhpdFNvdW5kLnBsYXkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcGFkZGxlQ29sbGlzaW9uVG9wQ2VudGVyKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuYmFsbC54IDw9ICh0aGlzLnBhZGRsZS54ICsgMTApICsgKHRoaXMucGFkZGxlLndpZHRoIC0gMjApICYmXG4gICAgICB0aGlzLmJhbGwueCA+IHRoaXMucGFkZGxlLnggKyAxMCAmJlxuICAgICAgdGhpcy5iYWxsLnkgPCB0aGlzLnBhZGRsZS55ICsgdGhpcy5wYWRkbGUuaGVpZ2h0ICYmXG4gICAgICB0aGlzLmJhbGwuaGVpZ2h0ICsgdGhpcy5iYWxsLnkgPiB0aGlzLnBhZGRsZS55KSB7XG4gICAgICB0aGlzLmJhbGwudnkgPSAtdGhpcy5iYWxsLnZ5XG4gICAgICB0aGlzLnBhZGRsZUhpdFNvdW5kLnBsYXkoKVxuICAgIH1cbiAgfVxuXG5cbiAgcGFkZGxlQ29sbGlzaW9uVG9wUmlnaHQoKSB7XG4gICAgaWYgKHRoaXMuYmFsbC54IDwgKHRoaXMucGFkZGxlLnggKyA0MCkgKyAodGhpcy5wYWRkbGUud2lkdGggLSA0MCkgJiZcbiAgICAgIHRoaXMuYmFsbC54ID4gdGhpcy5wYWRkbGUueCArIDQwICYmXG4gICAgICB0aGlzLmJhbGwueSA8IHRoaXMucGFkZGxlLnkgKyB0aGlzLnBhZGRsZS5oZWlnaHQgJiZcbiAgICAgIHRoaXMuYmFsbC5oZWlnaHQgKyB0aGlzLmJhbGwueSA+IHRoaXMucGFkZGxlLnlcbiAgICApIHtcbiAgICAgIHRoaXMuYmFsbC52eSA9IC10aGlzLmJhbGwudnlcblxuICAgICAgaWYgKHRoaXMuYmFsbC52eCA8IDApIHtcbiAgICAgICAgdGhpcy5iYWxsLnZ4ID0gLXRoaXMuYmFsbC52eFxuICAgICAgICB0aGlzLnBhZGRsZUhpdFNvdW5kLnBsYXkoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcmVzdGFydEJhbGwodGltZXIpIHtcbiAgICBpZiAodGhpcy5iYWxsLnZ4ID09PSAwICYmIHRoaXMuYmFsbC52eSA9PT0gMCAmJiB0aGlzLmJhbGwueSA9PSA0OTEgJiYgIXN0YXJ0KSB7XG4gICAgICBzdGFydCA9IHRpbWVyXG4gICAgfVxuXG4gICAgbGV0IGRlbGF5ID0gdGltZXIgLSBzdGFydFxuXG4gICAgaWYgKHRoaXMuYmFsbC52eCA9PT0gMCAmJiB0aGlzLmJhbGwudnkgPT09IDAgJiYgdGhpcy5iYWxsLnkgPT0gNDg5ICYmIGRlbGF5ID4gMTUwMCkge1xuICAgICAgdGhpcy5iYWxsLnggPSAyNDBcbiAgICAgIHRoaXMuYmFsbC55ID0gNDQwXG4gICAgICBzdGFydCA9IG51bGxcbiAgICAgIHRoaXMubGlmZUNvdW50ZXIoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJhbGwudnggPT09IDAgJiYgdGhpcy5iYWxsLnZ5ID09PSAwICYmIHRoaXMuYmFsbC55ID09IDQ4OSAmJiAwIDwgdGhpcy5saXZlcyA8IDUpIHtcbiAgICAgIGlmICh0aGlzLmxpdmVzID09IDApIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvbmZpcm0oJ0dhbWUgT3Zlci4gV2FudCB0byBQbGF5IEFnYWluPycpXG5cbiAgICAgICAgdGhpcy5iYWxsLnZ4ID0gMFxuICAgICAgICB0aGlzLmJhbGwudnkgPSAwXG4gICAgICAgIHRoaXMuYmFsbC54ID0gMjQwXG4gICAgICAgIHRoaXMuYmFsbC55ID0gNTIwXG4gICAgICAgIHRoaXMubGl2ZXMgPSAxMDFcbiAgICAgICAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBnYW1lRHJhdyh0aW1lcikge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIHRoaXMucGFkZGxlLmRyYXcodGhpcy5jb250ZXh0KVxuICAgIHRoaXMuYmFsbC5kcmF3KHRoaXMuY29udGV4dClcbiAgICB0aGlzLnBhZGRsZUNvbGxpc2lvblRvcENlbnRlcigpXG4gICAgdGhpcy5wYWRkbGVDb2xsaXNpb25Ub3BMZWZ0KClcbiAgICB0aGlzLnBhZGRsZUNvbGxpc2lvblRvcFJpZ2h0KClcbiAgICB0aGlzLmRyYXdCcmlja0xvb3AoKVxuICAgIHRoaXMuYmxvY2tDb2xsaXNpb24oKVxuICAgIHRoaXMubGV2ZWxUd29CYWxsUmVzdGFydCgpXG4gICAgdGhpcy5yZXN0YXJ0QmFsbCh0aW1lciwgdGhpcy5jb250ZXh0KVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZCIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jay5qcycpXG5cblxuY2xhc3MgTGV2ZWxzIHtcbiAgbGV2ZWwxKCkge1xuICAgIGxldCBibG9ja0FycmF5ID0gW11cbiAgICBsZXQgeiA9IDFcbiAgICBsZXQgYyA9IC0xXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGxldCB4ID0gKGkgJSAxMCkgKiA1MFxuXG4gICAgICBpZiAoaSAlIDEwID09PSAwKSB7XG4gICAgICAgIHorK1xuICAgICAgICBjKytcbiAgICAgIH1cbiAgICAgIGxldCB5ID0geiAqIDI1XG4gICAgICBsZXQgYmxvY2tDb2xvcnMgPSBbJyNiYzM2NTQnLCAnI2JjMmUyNCcsICcjYmM0YjI0JywgJyNiY2FlMjQnLCAnIzI0YmUyNCcsICcjMjQzNmJjJ11cblxuICAgICAgYmxvY2tBcnJheS5wdXNoKG5ldyBCbG9jayh7IHgsIHksIHdpZHRoOiA1MCwgaGVpZ2h0OiAyNSwgY29sb3I6IGJsb2NrQ29sb3JzW2NdIH0pKVxuICAgIH1cbiAgICByZXR1cm4gYmxvY2tBcnJheVxuICB9XG5cbiAgbGV2ZWwyKCkge1xuICAgIGxldCBibG9ja0FycmF5ID0gW11cbiAgICBsZXQgeiA9IDFcbiAgICBsZXQgYyA9IC0xXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGxldCB4ID0gKGkgJSAxMCkgKiA1MFxuXG4gICAgICBpZiAoaSAlIDEwID09PSAwKSB7XG4gICAgICAgIHorK1xuICAgICAgICBjKytcbiAgICAgIH1cbiAgICAgIGxldCB5ID0geiAqIDI1XG4gICAgICBsZXQgYmxvY2tDb2xvcnMgPSBbJyMyNDM2YmMnLCAnIzI0YmUyNCcsICcjYmNhZTI0JywgJyNiYzRiMjQnLCAnI2JjMmUyNCcsICcjYmMzNjU0J11cblxuICAgICAgYmxvY2tBcnJheS5wdXNoKG5ldyBCbG9jayh7IHgsIHksIHdpZHRoOiA1MCwgaGVpZ2h0OiAyNSwgY29sb3I6IGJsb2NrQ29sb3JzW2NdIH0pKVxuICAgIH1cbiAgICByZXR1cm4gYmxvY2tBcnJheVxuICB9XG5cbiAgd2luR2FtZSgpIHtcbiAgICBsZXQgd2luQXJyYXkgPSBbXG4gICAgICAxLCAwLCAwLCAwLCAxLCAyLCAxLCAwLCAwLCAxLFxuICAgICAgMSwgMCwgMCwgMCwgMSwgMiwgMSwgMCwgMCwgMSxcbiAgICAgIDEsIDAsIDEsIDAsIDEsIDIsIDEsIDEsIDAsIDEsXG4gICAgICAxLCAwLCAxLCAwLCAxLCAyLCAxLCAxLCAwLCAxLFxuICAgICAgMSwgMCwgMSwgMCwgMSwgMiwgMSwgMSwgMSwgMSxcbiAgICAgIDEsIDAsIDEsIDAsIDEsIDIsIDEsIDAsIDEsIDEsXG4gICAgICAxLCAxLCAxLCAxLCAxLCAyLCAxLCAwLCAxLCAxLFxuICAgICAgMSwgMSwgMCwgMSwgMSwgMiwgMSwgMCwgMCwgMSxcbiAgICAgIDEsIDAsIDAsIDAsIDEsIDIsIDEsIDAsIDAsIDFdXG5cbiAgICBsZXQgeiA9IDFcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgbGV0IHggPSAoaSAlIDEwKSAqIDUwXG5cbiAgICAgIGlmIChpICUgMTAgPT09IDApIHtcbiAgICAgICAgeisrXG4gICAgICB9XG4gICAgICBsZXQgeSA9IHogKiAyNVxuXG4gICAgICBpZiAod2luQXJyYXlbaV0gPT0gMCkge1xuICAgICAgICB3aW5BcnJheS5zcGxpY2UoaSwgMSwgbmV3IEJsb2NrKHsgeCwgeSwgd2lkdGg6IDUwLCBoZWlnaHQ6IDI1LCBjb2xvcjogJyMwNDAyMDQnIH0pKVxuICAgICAgfSBlbHNlIGlmICh3aW5BcnJheVtpXSA9PSAxKSB7XG4gICAgICAgIHdpbkFycmF5LnNwbGljZShpLCAxLCBuZXcgQmxvY2soeyB4LCB5LCB3aWR0aDogNTAsIGhlaWdodDogMjUsIGNvbG9yOiAnI2JjMzY1NCcgfSkpXG4gICAgICB9IGVsc2UgaWYgKHdpbkFycmF5W2ldID09IDIpIHtcbiAgICAgICAgd2luQXJyYXkuc3BsaWNlKGksIDEsIG5ldyBCbG9jayh7IHgsIHksIHdpZHRoOiA1MCwgaGVpZ2h0OiAyNSwgY29sb3I6ICcjYmM0YjI0JyB9KSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdpbkFycmF5XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbHMiLCJjbGFzcyBQYWRkbGUge1xuICBjb25zdHJ1Y3Rvcih7IHgsIHksIGhlaWdodCwgd2lkdGggfSkge1xuICAgIHRoaXMueCA9IHggfHwgMjI1XG4gICAgdGhpcy55ID0geSB8fCA0NTBcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodCB8fCAxMFxuICAgIHRoaXMud2lkdGggPSB3aWR0aCB8fCA1MFxuICB9XG5cbiAgZHJhdyhjb250ZXh0KSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2JjMzY1NCdcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBQYWRkbGUiLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQuanMnKVxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxubGV0IGJvYXJkID0gbmV3IEJvYXJkKHsgY3R4IH0pXG5sZXQgbXV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdXRlJylcblxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gZ2FtZWxvb3AodGltZXIpIHtcbiAgYm9hcmQuZ2FtZURyYXcodGltZXIpXG4gIGlmIChib2FyZC5saXZlcyA+ICgtMSkpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZWxvb3ApXG4gIH1cbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGJvYXJkLmJhbGwueCA9PSAyNDAgJiYgYm9hcmQuYmFsbC55ID09IDQ0MCkge1xuICAgIGJvYXJkLmJhbGwuYmFsbFN0YXJ0VmVsb2NpdHkoKVxuICB9XG59KVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlIDw9IDIyMiAmJiBib2FyZC5iYWxsLnggPT0gMjQwICYmIGJvYXJkLmJhbGwueSA9PSA0NDAgfHwgZXZlbnQua2V5ID09IHR5cGVvZiBzdHIpIHtcbiAgICBib2FyZC5iYWxsLmJhbGxTdGFydFZlbG9jaXR5KClcbiAgfVxufSlcblxuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IG1vdXNlTG9jYXRpb24gPSBlLm9mZnNldFhcblxuICBpZiAobW91c2VMb2NhdGlvbiA+PSA0NzUpIHtcbiAgICB0aGlzLnggPSA0NTBcbiAgfSBlbHNlIGlmIChtb3VzZUxvY2F0aW9uIDw9IDI1KSB7XG4gICAgdGhpcy54ID0gMFxuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IChtb3VzZUxvY2F0aW9uIC0gMjUpXG4gIH1cbn0uYmluZChib2FyZC5wYWRkbGUpKVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXkgPT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgYm9hcmQucGFkZGxlLnggKyBib2FyZC5wYWRkbGUud2lkdGggPiA0NTAgPyBib2FyZC5wYWRkbGUueCA9IDQ1MCA6IGJvYXJkLnBhZGRsZS54ICs9IDQwXG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09ICdBcnJvd0xlZnQnKSB7XG4gICAgYm9hcmQucGFkZGxlLnggPCA1MCA/IGJvYXJkLnBhZGRsZS54ID0gMCA6IGJvYXJkLnBhZGRsZS54IC09IDQwXG4gIH1cbn0pXG5cblxubXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgYm9hcmQuZ2FtZXBsYXlTb3VuZC5wYXVzZWQgPyBib2FyZC5nYW1lcGxheVNvdW5kLnBsYXkoKSA6IGJvYXJkLmdhbWVwbGF5U291bmQucGF1c2UoKVxufSkiXX0=
