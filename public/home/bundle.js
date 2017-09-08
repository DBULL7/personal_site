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
var x = 50;
var y = 50;
context.fillStyle = "rgba(0, 255, 0, 1)";
context.fillRect(x, y, 10, 10);

var gameLoop = function gameLoop() {
  context.fillRect(x++, y, 10, 10);
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxZQUFZLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFoQjs7QUFFQSxJQUFJLFdBQVcsQ0FBQyxtQkFBRCxFQUFzQiwyQkFBdEIsRUFBbUQsZUFBbkQsRUFBb0UsTUFBcEUsRUFBNEUsWUFBNUUsRUFBeUYseUJBQXpGLENBQWY7QUFDQSxJQUFJLGNBQWMsQ0FBbEI7O0FBRUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLE1BQU0sVUFBVSxTQUFWLE9BQVUsQ0FBQyxDQUFELEVBQU87QUFDckI7QUFDQSxRQUFJLElBQUksQ0FBUixFQUFXO0FBQ1QsY0FBUSxLQUFSLEdBQWdCLEVBQWhCO0FBQ0E7QUFDQSxVQUFJLGdCQUFnQixDQUFwQixFQUF1QixjQUFjLENBQWQ7QUFDdkIsVUFBSSxpQkFBaUIsU0FBUyxXQUFULENBQXJCO0FBQ0EsV0FBSyxjQUFMLEVBQXFCLFNBQXJCO0FBQ0E7QUFDRDtBQUNELFlBQVEsU0FBUixHQUFvQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBcEI7QUFDQSxRQUFJLE9BQU8sRUFBWDtBQUNBLGVBQVcsWUFBWTtBQUFFLGNBQVEsQ0FBUjtBQUFhLEtBQXRDLEVBQXdDLElBQXhDO0FBQ0QsR0FiRDtBQWNBLFVBQVEsT0FBTyxNQUFQLEdBQWdCLENBQXhCO0FBQ0QsQ0FoQkQ7O0FBbUJBLElBQUksT0FBTyxTQUFQLElBQU8sQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFxQjtBQUM5QixNQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsQ0FBRCxFQUFPO0FBQ3BCLFFBQUksT0FBTyxNQUFQLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGNBQVEsS0FBUixHQUFnQixNQUFoQjtBQUNBLGlCQUFXLFlBQVk7QUFBRSxtQkFBVyxTQUFYLEVBQXNCLE1BQXRCO0FBQWdDLE9BQXpELEVBQTJELElBQTNEO0FBQ0E7QUFDRDtBQUNELFlBQVEsU0FBUixHQUFvQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBcEI7QUFDQSxRQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWlCLEVBQWpCLEdBQXVCLENBQWxDLENBQVg7QUFDQSxlQUFXLFlBQVk7QUFBRSxhQUFPLENBQVA7QUFBWSxLQUFyQyxFQUF1QyxJQUF2QztBQUNELEdBVEQ7QUFVQSxTQUFPLENBQVA7QUFDRCxDQVpEO0FBYUEsSUFBSSxPQUFPLHlCQUFYO0FBQ0EsS0FBSyxJQUFMLEVBQVcsU0FBWDs7QUFFQSxJQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxJQUFJLFVBQVUsT0FBTyxVQUFQLENBQWtCLElBQWxCLENBQWQ7QUFDQSxJQUFJLElBQUksRUFBUjtBQUNBLElBQUksSUFBSSxFQUFSO0FBQ0EsUUFBUSxTQUFSLEdBQW9CLG9CQUFwQjtBQUNBLFFBQVEsUUFBUixDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixFQUF2QixFQUEyQixFQUEzQjs7QUFFQSxJQUFJLFdBQVcsU0FBWCxRQUFXLEdBQU07QUFDbkIsVUFBUSxRQUFSLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCO0FBQ0Esd0JBQXNCLFFBQXRCO0FBQ0QsQ0FIRDs7QUFLQSxzQkFBc0IsUUFBdEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHN1YmhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcblxubGV0IGV4YW1wbGVzID0gWydSZWFjdCBOYXRpdmUgQXBwcycsICdDb21tYW5kIExpbmUgQXBwbGljYXRpb25zJywgJ0xhbmRpbmcgUGFnZXMnLCAnQVBJcycsICdSZWFjdCBBcHBzJywnSmF2YXNjcmlwdCBBcHBsaWNhdGlvbnMnXVxubGV0IGRlc2NyaXB0aW9uID0gMDtcblxubGV0IGRlbGV0ZUxpbmUgPSAoZWxlbWVudCwgc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZXIgPSAoaSkgPT4ge1xuICAgIGktLVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgZGVzY3JpcHRpb24rK1xuICAgICAgaWYgKGRlc2NyaXB0aW9uID09PSA2KSBkZXNjcmlwdGlvbiA9IDBcbiAgICAgIGxldCBjdXJyZW50RXhhbXBsZSA9IGV4YW1wbGVzW2Rlc2NyaXB0aW9uXVxuICAgICAgdHlwZShjdXJyZW50RXhhbXBsZSwgc3ViaGVhZGVyKVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgaSk7XG4gICAgbGV0IHJhbmQgPSAyNVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICBkZWxldGVyKHN0cmluZy5sZW5ndGggKyAxKVxufVxuXG5cbmxldCB0eXBlID0gKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICBjb25zdCB3cml0ZXIgPSAoaSkgPT4ge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoIDw9IGkrKykge1xuICAgICAgZWxlbWVudC52YWx1ZSA9IHN0cmluZztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBkZWxldGVMaW5lKHN1YmhlYWRlciwgc3RyaW5nKTsgfSwgMTIwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBpKTtcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCkgKyAxKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgd3JpdGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICB3cml0ZXIoMClcbn1cbmxldCB0ZXh0ID0gJ0phdmFzY3JpcHQgQXBwbGljYXRpb25zJ1xudHlwZSh0ZXh0LCBzdWJoZWFkZXIpXG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xudmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbnZhciB4ID0gNTA7XG52YXIgeSA9IDUwO1xuY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMjU1LCAwLCAxKVwiXG5jb250ZXh0LmZpbGxSZWN0KHgsIHksIDEwLCAxMCk7XG5cbmxldCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgY29udGV4dC5maWxsUmVjdCh4KyssIHksIDEwLCAxMCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4iXX0=
