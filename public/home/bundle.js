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

var flicker = function flicker() {
  var job = document.getElementById('job');
  job.style.paddingRight = '50px';
  job.style.color = 'red';
  setTimeout(function () {
    job.style.paddingRight = '0';
    job.style.color = '#fff';
  }, 90);
  setTimeout(function () {
    flicker();
  }, 5000);
};
flicker();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxZQUFZLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUFoQjs7QUFFQSxJQUFJLFdBQVcsQ0FBQyxtQkFBRCxFQUFzQiwyQkFBdEIsRUFBbUQsZUFBbkQsRUFBb0UsTUFBcEUsRUFBNEUsWUFBNUUsRUFBeUYseUJBQXpGLENBQWY7QUFDQSxJQUFJLGNBQWMsQ0FBbEI7O0FBRUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLE1BQU0sVUFBVSxTQUFWLE9BQVUsQ0FBQyxDQUFELEVBQU87QUFDckI7QUFDQSxRQUFJLElBQUksQ0FBUixFQUFXO0FBQ1QsY0FBUSxLQUFSLEdBQWdCLEVBQWhCO0FBQ0E7QUFDQSxVQUFJLGdCQUFnQixDQUFwQixFQUF1QixjQUFjLENBQWQ7QUFDdkIsVUFBSSxpQkFBaUIsU0FBUyxXQUFULENBQXJCO0FBQ0EsV0FBSyxjQUFMLEVBQXFCLFNBQXJCO0FBQ0E7QUFDRDtBQUNELFlBQVEsU0FBUixHQUFvQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBcEI7QUFDQSxRQUFJLE9BQU8sRUFBWDtBQUNBLGVBQVcsWUFBWTtBQUFFLGNBQVEsQ0FBUjtBQUFhLEtBQXRDLEVBQXdDLElBQXhDO0FBQ0QsR0FiRDtBQWNBLFVBQVEsT0FBTyxNQUFQLEdBQWdCLENBQXhCO0FBQ0QsQ0FoQkQ7O0FBbUJBLElBQUksT0FBTyxTQUFQLElBQU8sQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFxQjtBQUM5QixNQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsQ0FBRCxFQUFPO0FBQ3BCLFFBQUksT0FBTyxNQUFQLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGNBQVEsS0FBUixHQUFnQixNQUFoQjtBQUNBLGlCQUFXLFlBQVk7QUFBRSxtQkFBVyxTQUFYLEVBQXNCLE1BQXRCO0FBQWdDLE9BQXpELEVBQTJELElBQTNEO0FBQ0E7QUFDRDtBQUNELFlBQVEsU0FBUixHQUFvQixPQUFPLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBcEI7QUFDQSxRQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWlCLEVBQWpCLEdBQXVCLENBQWxDLENBQVg7QUFDQSxlQUFXLFlBQVk7QUFBRSxhQUFPLENBQVA7QUFBWSxLQUFyQyxFQUF1QyxJQUF2QztBQUNELEdBVEQ7QUFVQSxTQUFPLENBQVA7QUFDRCxDQVpEO0FBYUEsSUFBSSxPQUFPLHlCQUFYO0FBQ0EsS0FBSyxJQUFMLEVBQVcsU0FBWDs7QUFHQSxJQUFJLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDbEIsTUFBSSxNQUFNLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFWO0FBQ0EsTUFBSSxLQUFKLENBQVUsWUFBVixHQUF5QixNQUF6QjtBQUNBLE1BQUksS0FBSixDQUFVLEtBQVYsR0FBa0IsS0FBbEI7QUFDQSxhQUFXLFlBQU07QUFDZixRQUFJLEtBQUosQ0FBVSxZQUFWLEdBQXlCLEdBQXpCO0FBQ0EsUUFBSSxLQUFKLENBQVUsS0FBVixHQUFrQixNQUFsQjtBQUNELEdBSEQsRUFHRyxFQUhIO0FBSUEsYUFBVyxZQUFZO0FBQUU7QUFBWSxHQUFyQyxFQUF1QyxJQUF2QztBQUNELENBVEQ7QUFVQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgc3ViaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGUnKVxuXG5sZXQgZXhhbXBsZXMgPSBbJ1JlYWN0IE5hdGl2ZSBBcHBzJywgJ0NvbW1hbmQgTGluZSBBcHBsaWNhdGlvbnMnLCAnTGFuZGluZyBQYWdlcycsICdBUElzJywgJ1JlYWN0IEFwcHMnLCdKYXZhc2NyaXB0IEFwcGxpY2F0aW9ucyddXG5sZXQgZGVzY3JpcHRpb24gPSAwO1xuXG5sZXQgZGVsZXRlTGluZSA9IChlbGVtZW50LCBzdHJpbmcpID0+IHtcbiAgY29uc3QgZGVsZXRlciA9IChpKSA9PiB7XG4gICAgaS0tXG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICBkZXNjcmlwdGlvbisrXG4gICAgICBpZiAoZGVzY3JpcHRpb24gPT09IDYpIGRlc2NyaXB0aW9uID0gMFxuICAgICAgbGV0IGN1cnJlbnRFeGFtcGxlID0gZXhhbXBsZXNbZGVzY3JpcHRpb25dXG4gICAgICB0eXBlKGN1cnJlbnRFeGFtcGxlLCBzdWJoZWFkZXIpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBpKTtcbiAgICBsZXQgcmFuZCA9IDI1XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGRlbGV0ZXIoaSk7IH0sIHJhbmQpO1xuICB9XG4gIGRlbGV0ZXIoc3RyaW5nLmxlbmd0aCArIDEpXG59XG5cblxubGV0IHR5cGUgPSAoc3RyaW5nLCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdyaXRlciA9IChpKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPD0gaSsrKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gc3RyaW5nO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGRlbGV0ZUxpbmUoc3ViaGVhZGVyLCBzdHJpbmcpOyB9LCAxMjAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIGkpO1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwKSArIDEpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB3cml0ZXIoaSk7IH0sIHJhbmQpO1xuICB9XG4gIHdyaXRlcigwKVxufVxubGV0IHRleHQgPSAnSmF2YXNjcmlwdCBBcHBsaWNhdGlvbnMnXG50eXBlKHRleHQsIHN1YmhlYWRlcilcblxuXG5sZXQgZmxpY2tlciA9ICgpID0+IHtcbiAgbGV0IGpvYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2InKVxuICBqb2Iuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzUwcHgnXG4gIGpvYi5zdHlsZS5jb2xvciA9ICdyZWQnXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGpvYi5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMCdcbiAgICBqb2Iuc3R5bGUuY29sb3IgPSAnI2ZmZidcbiAgfSwgOTApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgZmxpY2tlcigpOyB9LCA1MDAwKTtcbn1cbmZsaWNrZXIoKVxuIl19
