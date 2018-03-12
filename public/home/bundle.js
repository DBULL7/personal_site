(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var subheader = document.getElementById('example');

var examples = ['React Native Apps', 'React Apps', 'Vue Apps', 'Command Line Applications', 'Landing Pages', 'APIs'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaG9tZS9pbmRleC5qcyIsInNyYy9ob21lL3N0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksWUFBWSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7O0FBRUEsSUFBSSxXQUFXLENBQUMsbUJBQUQsRUFBc0IsWUFBdEIsRUFBb0MsVUFBcEMsRUFBZ0QsMkJBQWhELEVBQTZFLGVBQTdFLEVBQThGLE1BQTlGLENBQWY7QUFDQSxJQUFJLGNBQWMsQ0FBbEI7O0FBRUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLE1BQU0sVUFBVSxTQUFWLE9BQVUsQ0FBQyxDQUFELEVBQU87QUFDckI7QUFDQSxRQUFJLElBQUksQ0FBUixFQUFXO0FBQ1QsY0FBUSxLQUFSLEdBQWdCLEVBQWhCO0FBQ0E7QUFDQSxVQUFJLGdCQUFnQixDQUFwQixFQUF1QixjQUFjLENBQWQ7QUFDdkIsVUFBSSxpQkFBaUIsU0FBUyxXQUFULENBQXJCO0FBQ0EsV0FBSyxjQUFMLEVBQXFCLFNBQXJCO0FBQ0E7QUFDRDtBQUNELFlBQVEsU0FBUixHQUFvQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBcEI7QUFDQSxRQUFJLE9BQU8sRUFBWDtBQUNBLGVBQVcsWUFBWTtBQUFFLGNBQVEsQ0FBUjtBQUFhLEtBQXRDLEVBQXdDLElBQXhDO0FBQ0QsR0FiRDtBQWNBLFVBQVEsT0FBTyxNQUFQLEdBQWdCLENBQXhCO0FBQ0QsQ0FoQkQ7O0FBbUJBLElBQUksT0FBTyxTQUFQLElBQU8sQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFxQjtBQUM5QixNQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsQ0FBRCxFQUFPO0FBQ3BCLFFBQUksT0FBTyxNQUFQLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGNBQVEsS0FBUixHQUFnQixN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S0FBakMsRUFBd0M7QUFBQTs7QUFDdEMsU0FBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFNBQUssS0FBTCxHQUFhLFNBQVMsU0FBdEI7QUFDQSxTQUFLLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBSyxFQUFMLEdBQVUsQ0FBVjtBQUNEOzs7O3lCQUVJLE8sRUFBUyxNLEVBQVE7QUFDcEIsY0FBUSxTQUFSLEdBQW9CLEtBQUssS0FBekI7QUFDQSxjQUFRLFFBQVIsQ0FBaUIsS0FBSyxDQUF0QixFQUF5QixLQUFLLENBQTlCLEVBQWlDLEtBQUssS0FBdEMsRUFBNkMsS0FBSyxNQUFsRDtBQUNBLFdBQUssSUFBTCxDQUFVLE1BQVY7QUFDQSxhQUFPLElBQVA7QUFDRDs7O3lCQUVJLE0sRUFBUTtBQUNYLFdBQUssRUFBTCxHQUFVLENBQUMsQ0FBWDtBQUNBLFVBQUksS0FBSyxDQUFMLEtBQVcsQ0FBZixFQUFrQjtBQUNoQixhQUFLLENBQUwsR0FBUyxPQUFPLEtBQVAsR0FBZSxFQUF4QjtBQUNEO0FBQ0QsV0FBSyxDQUFMLElBQVUsS0FBSyxFQUFmO0FBQ0Q7Ozs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixJQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc3ViaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuXG5sZXQgZXhhbXBsZXMgPSBbJ1JlYWN0IE5hdGl2ZSBBcHBzJywgJ1JlYWN0IEFwcHMnLCAnVnVlIEFwcHMnLCAnQ29tbWFuZCBMaW5lIEFwcGxpY2F0aW9ucycsICdMYW5kaW5nIFBhZ2VzJywgJ0FQSXMnXVxubGV0IGRlc2NyaXB0aW9uID0gMDtcblxubGV0IGRlbGV0ZUxpbmUgPSAoZWxlbWVudCwgc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZXIgPSAoaSkgPT4ge1xuICAgIGktLVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgZGVzY3JpcHRpb24rK1xuICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSA2KSBkZXNjcmlwdGlvbiA9IDBcbiAgICAgIGxldCBjdXJyZW50RXhhbXBsZSA9IGV4YW1wbGVzW2Rlc2NyaXB0aW9uXVxuICAgICAgdHlwZShjdXJyZW50RXhhbXBsZSwgc3ViaGVhZGVyKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgaSk7XG4gICAgbGV0IHJhbmQgPSAyNVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICBkZWxldGVyKHN0cmluZy5sZW5ndGggKyAxKVxufVxuXG5cbmxldCB0eXBlID0gKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICBjb25zdCB3cml0ZXIgPSAoaSkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDw9IGkrKykge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHN0cmluZztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVMaW5lKHN1YmhlYWRlciwgc3RyaW5nKTsgfSwgMTIwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBpKTtcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCkgKyAxKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgd3JpdGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICB3cml0ZXIoMClcbn1cbmxldCB0ZXh0ID0gJ0phdmFzY3JpcHQgQXBwbGljYXRpb25zJ1xudHlwZSh0ZXh0LCBzdWJoZWFkZXIpXG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBTdGFyID0gcmVxdWlyZSgnLi9zdGFyJylcbmxldCBhbGxTdGFycyA9IFtdXG5sZXQgc3RhckNvbG9ycyA9IFsnI2ZmODUxYicsICcjZmZkYzAwJywgJyMwMEJGRkYnLCAnI2ZmNDEzNicsICcjZjAxMmJlJywgJyMyZWNjNDAnXVxubGV0IGdlbmVyYXRlID0gKCkgPT4ge1xuICBhbGxTdGFycyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDMwMDsgaSsrKSB7XG4gICAgbGV0IG5hbWUgPSBgc3RhciR7aX1gXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoKSArIDEpO1xuICAgIGxldCByYW5kQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3RhckNvbG9ycy5sZW5ndGgpICsgMCk7XG4gICAgbmFtZSA9IG5ldyBTdGFyKHJhbmQsIGkqNSwgNSwgNSwgc3RhckNvbG9yc1tyYW5kQ29sb3JdKVxuICAgIGFsbFN0YXJzLnB1c2gobmFtZSlcbiAgfVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGdlbmVyYXRlKClcbiAgfSwgNTAwMCk7XG59XG5nZW5lcmF0ZSgpXG5sZXQgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGFsbFN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgc3Rhci5kcmF3KGNvbnRleHQsIGNhbnZhcylcbiAgfSlcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uIGhhbmRsZXIgKGV2KSB7XG5cbiAgdmFyIHNvbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Jyk7XG4gIHZhciBkaXN0YW5jZVRvVG9wID0gc29tZURpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIGlmIChkaXN0YW5jZVRvVG9wIDw9IDApIHtcbiAgICBzb21lRGl2LnN0eWxlLmJvdHRvbSA9ICdhdXRvJ1xuICAgc29tZURpdi5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgIHNvbWVEaXYuc3R5bGUudG9wID0gJzAnXG4gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bi1pY29uJykuaHJlZiA9ICcjZ2FtZSdcbiAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JnJylbMF0uc3R5bGUucGFkZGluZ1RvcCA9ICczMHB4J1xuICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpXG4gIH0gXG59KTtcbiIsImNsYXNzIFN0YXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLmNvbG9yID0gY29sb3IgfHwgJyMwMEJGRkYnXG4gICAgdGhpcy52eCA9IDBcbiAgICB0aGlzLnZ5ID0gMFxuICB9XG5cbiAgZHJhdyhjb250ZXh0LCBjYW52YXMpIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3JcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgdGhpcy5tb3ZlKGNhbnZhcylcbiAgICByZXR1cm4gdGhpcyBcbiAgfTtcblxuICBtb3ZlKGNhbnZhcykge1xuICAgIHRoaXMudnggPSAtMVxuICAgIGlmICh0aGlzLnggPT09IDApIHtcbiAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAtIDEwXG4gICAgfSBcbiAgICB0aGlzLnggKz0gdGhpcy52eCBcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGFyICJdfQ==
