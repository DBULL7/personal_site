(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var subheader = document.getElementById('example');

var examples = ['React Native Apps', 'Command Line Applications', 'Landing Pages', 'APIs', 'React Apps', 'Javascript Applications'];
var description = 0;

var deleteLine = function deleteLine(element, string) {
  var deleter = function deleter(i) {
    i--;
    if (i < 0) {
      element.value = '';
      description++;
      if (description === 6) description = 0;
      var currentExample = examples[description];
      type(currentExample, subheader);
      return;
    }
    element.innerText = string.substring(0, i);
    var rand = 25;
    setTimeout(function () {
      deleter(i);
    }, rand);
  };
  deleter(string.length + 1);
};

var type = function type(string, element) {
  var writer = function writer(i) {
    if (string.length <= i++) {
      element.value = string;
      setTimeout(function () {
        deleteLine(subheader, string);
      }, 1200);
      return;
    }
    element.innerText = string.substring(0, i);
    var rand = Math.floor(Math.random() * 50 + 1);
    setTimeout(function () {
      writer(i);
    }, rand);
  };
  writer(0);
};
var text = 'Javascript Applications';
type(text, subheader);

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var Star = require('./star');
var allStars = [];
var starColors = ['#ff851b', '#ffdc00', '#00BFFF', '#ff4136', '#f012be', '#2ecc40'];
var generate = function generate() {
  allStars = [];
  for (var i = 0; i <= 300; i++) {
    var name = 'star' + i;
    var rand = Math.floor(Math.random() * canvas.width + 1);
    var randColor = Math.floor(Math.random() * starColors.length + 0);
    name = new Star(rand, i * 5, 5, 5, starColors[randColor]);
    allStars.push(name);
  }
  setTimeout(function () {
    generate();
  }, 5000);
};
generate();
var gameLoop = function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  allStars.forEach(function (star) {
    star.draw(context, canvas);
  });
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

window.addEventListener('scroll', function handler(ev) {

  var someDiv = document.getElementById('new');
  var distanceToTop = someDiv.getBoundingClientRect().top;
  if (distanceToTop <= 0) {
    someDiv.style.bottom = 'auto';
    someDiv.style.position = 'fixed';
    someDiv.style.top = '0';
    document.getElementById('down-icon').href = '#game';
    document.getElementsByClassName('bg')[0].style.paddingTop = '30px';
    window.removeEventListener('scroll', handler);
  }
});

},{"./star":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Star = function () {
  function Star(x, y, width, height, color) {
    _classCallCheck(this, Star);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color || '#00BFFF';
    this.vx = 0;
    this.vy = 0;
  }

  _createClass(Star, [{
    key: 'draw',
    value: function draw(context, canvas) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
      this.move(canvas);
      return this;
    }
  }, {
    key: 'move',
    value: function move(canvas) {
      this.vx = -1;
      if (this.x === 0) {
        this.x = canvas.width - 10;
      }
      this.x += this.vx;
    }
  }]);

  return Star;
}();

module.exports = Star;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaG9tZS9pbmRleC5qcyIsInNyYy9ob21lL3N0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksWUFBWSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7O0FBRUEsSUFBSSxXQUFXLENBQUMsbUJBQUQsRUFBc0IsMkJBQXRCLEVBQW1ELGVBQW5ELEVBQW9FLE1BQXBFLEVBQTRFLFlBQTVFLEVBQXlGLHlCQUF6RixDQUFmO0FBQ0EsSUFBSSxjQUFjLENBQWxCOztBQUVBLElBQUksYUFBYSxTQUFiLFVBQWEsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNwQyxNQUFNLFVBQVUsU0FBVixPQUFVLENBQUMsQ0FBRCxFQUFPO0FBQ3JCO0FBQ0EsUUFBSSxJQUFJLENBQVIsRUFBVztBQUNULGNBQVEsS0FBUixHQUFnQixFQUFoQjtBQUNBO0FBQ0EsVUFBSSxnQkFBZ0IsQ0FBcEIsRUFBdUIsY0FBYyxDQUFkO0FBQ3ZCLFVBQUksaUJBQWlCLFNBQVMsV0FBVCxDQUFyQjtBQUNBLFdBQUssY0FBTCxFQUFxQixTQUFyQjtBQUNBO0FBQ0Q7QUFDRCxZQUFRLFNBQVIsR0FBb0IsT0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXBCO0FBQ0EsUUFBSSxPQUFPLEVBQVg7QUFDQSxlQUFXLFlBQVk7QUFBRSxjQUFRLENBQVI7QUFBYSxLQUF0QyxFQUF3QyxJQUF4QztBQUNELEdBYkQ7QUFjQSxVQUFRLE9BQU8sTUFBUCxHQUFnQixDQUF4QjtBQUNELENBaEJEOztBQW1CQSxJQUFJLE9BQU8sU0FBUCxJQUFPLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBcUI7QUFDOUIsTUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLENBQUQsRUFBTztBQUNwQixRQUFJLE9BQU8sTUFBUCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QixjQUFRLEtBQVIsR0FBZ0Is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LEtBQWpDLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxTQUFTLFNBQXRCO0FBQ0EsU0FBSyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUssRUFBTCxHQUFVLENBQVY7QUFDRDs7Ozt5QkFFSSxPLEVBQVMsTSxFQUFRO0FBQ3BCLGNBQVEsU0FBUixHQUFvQixLQUFLLEtBQXpCO0FBQ0EsY0FBUSxRQUFSLENBQWlCLEtBQUssQ0FBdEIsRUFBeUIsS0FBSyxDQUE5QixFQUFpQyxLQUFLLEtBQXRDLEVBQTZDLEtBQUssTUFBbEQ7QUFDQSxXQUFLLElBQUwsQ0FBVSxNQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozt5QkFFSSxNLEVBQVE7QUFDWCxXQUFLLEVBQUwsR0FBVSxDQUFDLENBQVg7QUFDQSxVQUFJLEtBQUssQ0FBTCxLQUFXLENBQWYsRUFBa0I7QUFDaEIsYUFBSyxDQUFMLEdBQVMsT0FBTyxLQUFQLEdBQWUsRUFBeEI7QUFDRDtBQUNELFdBQUssQ0FBTCxJQUFVLEtBQUssRUFBZjtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsSUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHN1YmhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcblxubGV0IGV4YW1wbGVzID0gWydSZWFjdCBOYXRpdmUgQXBwcycsICdDb21tYW5kIExpbmUgQXBwbGljYXRpb25zJywgJ0xhbmRpbmcgUGFnZXMnLCAnQVBJcycsICdSZWFjdCBBcHBzJywnSmF2YXNjcmlwdCBBcHBsaWNhdGlvbnMnXVxubGV0IGRlc2NyaXB0aW9uID0gMDtcblxubGV0IGRlbGV0ZUxpbmUgPSAoZWxlbWVudCwgc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZXIgPSAoaSkgPT4ge1xuICAgIGktLVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgZGVzY3JpcHRpb24rK1xuICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSA2KSBkZXNjcmlwdGlvbiA9IDBcbiAgICAgIGxldCBjdXJyZW50RXhhbXBsZSA9IGV4YW1wbGVzW2Rlc2NyaXB0aW9uXVxuICAgICAgdHlwZShjdXJyZW50RXhhbXBsZSwgc3ViaGVhZGVyKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgaSk7XG4gICAgbGV0IHJhbmQgPSAyNVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICBkZWxldGVyKHN0cmluZy5sZW5ndGggKyAxKVxufVxuXG5cbmxldCB0eXBlID0gKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICBjb25zdCB3cml0ZXIgPSAoaSkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDw9IGkrKykge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHN0cmluZztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVMaW5lKHN1YmhlYWRlciwgc3RyaW5nKTsgfSwgMTIwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBpKTtcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCkgKyAxKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgd3JpdGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICB3cml0ZXIoMClcbn1cbmxldCB0ZXh0ID0gJ0phdmFzY3JpcHQgQXBwbGljYXRpb25zJ1xudHlwZSh0ZXh0LCBzdWJoZWFkZXIpXG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBTdGFyID0gcmVxdWlyZSgnLi9zdGFyJylcbmxldCBhbGxTdGFycyA9IFtdXG5sZXQgc3RhckNvbG9ycyA9IFsnI2ZmODUxYicsICcjZmZkYzAwJywgJyMwMEJGRkYnLCAnI2ZmNDEzNicsICcjZjAxMmJlJywgJyMyZWNjNDAnXVxubGV0IGdlbmVyYXRlID0gKCkgPT4ge1xuICBhbGxTdGFycyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDMwMDsgaSsrKSB7XG4gICAgbGV0IG5hbWUgPSBgc3RhciR7aX1gXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoKSArIDEpO1xuICAgIGxldCByYW5kQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3RhckNvbG9ycy5sZW5ndGgpICsgMCk7XG4gICAgbmFtZSA9IG5ldyBTdGFyKHJhbmQsIGkqNSwgNSwgNSwgc3RhckNvbG9yc1tyYW5kQ29sb3JdKVxuICAgIGFsbFN0YXJzLnB1c2gobmFtZSlcbiAgfVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGdlbmVyYXRlKClcbiAgfSwgNTAwMCk7XG59XG5nZW5lcmF0ZSgpXG5sZXQgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGFsbFN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgc3Rhci5kcmF3KGNvbnRleHQsIGNhbnZhcylcbiAgfSlcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIGhhbmRsZXIgKGV2KSB7XG5cbiAgdmFyIHNvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gIHZhciBkaXN0YW5jZVRvVG9wID0gc29tZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIGlmIChkaXN0YW5jZVRvVG9wIDw9IDApIHtcbiAgICBzb21lRGl2LnN0eWxlLmJvdHRvbSA9ICdhdXRvJ1xuICAgc29tZURpdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgIHNvbWVEaXYuc3R5bGUudG9wID0gJzAnXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bi1pY29uJykuaHJlZiA9ICcjZ2FtZSdcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnJylbMF0uc3R5bGUucGFkZGluZ1RvcCA9ICczMHB4J1xuICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpXG4gIH0gXG59KTtcbiIsImNsYXNzIFN0YXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgJyMwMEJGRkYnXG4gICAgdGhpcy52eCA9IDBcbiAgICB0aGlzLnZ5ID0gMFxuICB9XG5cbiAgZHJhdyhjb250ZXh0LCBjYW52YXMpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgdGhpcy5tb3ZlKGNhbnZhcylcbiAgICByZXR1cm4gdGhpcyBcbiAgfTtcblxuICBtb3ZlKGNhbnZhcykge1xuICAgIHRoaXMudnggPSAtMVxuICAgIGlmICh0aGlzLnggPT09IDApIHtcbiAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAtIDEwXG4gICAgfSBcbiAgICB0aGlzLnggKz0gdGhpcy52eCBcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFyICJdfQ==
