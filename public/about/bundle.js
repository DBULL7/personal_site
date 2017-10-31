(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var terminal = document.getElementById('terminal');

var type = function type(string, element) {
  element.value = '';
  var writer = function writer(i) {
    if (string.length <= i++) {
      element.value = string;
      setTimeout(function () {
        type(text, terminal);
      }, 9000);
      return;
    }
    element.value = string.substring(0, i);
    var rand = Math.floor(Math.random() * 50 + 1);
    setTimeout(function () {
      writer(i);
    }, rand);
  };
  writer(0);
};
var text = '\n  Primary Language: Javascript\n\n\n  Client Side:\t\t\tBuild Tools:\n\n  React / Redux\t\tWebpack\n  React Native\t\t\tGulp\n  jQuery\t\t\t\tBabel\n  CSS\t\t\t\tBrowserify\n  Sass\n  React Router\n  Html 5 Canvas\n\n\n  Backend:\t\t\tTesting Tools:\n\n  Node.js\t\t\t\tEnzyme\n  Express\t\t\t\tMocha / Chai\n  Postgres\t\t\tSelenium\n  MongoDB\t\t\tJest\n  JSON Web-tokens\t\tFetch-Mock\n  Socket.io\t\t\tCircle CI';
type(text, terminal);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWJvdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksV0FBVyxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFJLE9BQU8sU0FBUCxJQUFPLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBcUI7QUFDOUIsVUFBUSxLQUFSLEdBQWdCLEVBQWhCO0FBQ0EsTUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLENBQUQsRUFBTztBQUNwQixRQUFJLE9BQU8sTUFBUCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QixjQUFRLEtBQVIsR0FBZ0IsTUFBaEI7QUFDQSxpQkFBVyxZQUFXO0FBQ3BCLGFBQUssSUFBTCxFQUFXLFFBQVg7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7QUFDRCxZQUFRLEtBQVIsR0FBZ0IsT0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQWhCO0FBQ0EsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFpQixFQUFqQixHQUF1QixDQUFsQyxDQUFYO0FBQ0EsZUFBVyxZQUFZO0FBQUUsYUFBTyxDQUFQO0FBQVksS0FBckMsRUFBdUMsSUFBdkM7QUFDRCxHQVhEO0FBWUEsU0FBTyxDQUFQO0FBQ0QsQ0FmRDtBQWdCQSxJQUFJLE9BQU8sbWFBQVg7QUFDQSxLQUFLLElBQUwsRUFBVyxRQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB0ZXJtaW5hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtaW5hbCcpXG5cbmxldCB0eXBlID0gKHN0cmluZywgZWxlbWVudCkgPT4ge1xuICBlbGVtZW50LnZhbHVlID0gJydcbiAgY29uc3Qgd3JpdGVyID0gKGkpID0+IHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8PSBpKyspIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBzdHJpbmc7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0eXBlKHRleHQsIHRlcm1pbmFsKVxuICAgICAgfSwgOTAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQudmFsdWUgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIGkpO1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwKSArIDEpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB3cml0ZXIoaSk7IH0sIHJhbmQpO1xuICB9XG4gIHdyaXRlcigwKVxufVxubGV0IHRleHQgPSAnXFxuXFx1MDAyMFxcdTAwMjBQcmltYXJ5IExhbmd1YWdlOiBKYXZhc2NyaXB0XFxuXFxuXFxuXFx1MDAyMFxcdTAwMjBDbGllbnQgU2lkZTpcXHRcXHRcXHRCdWlsZCBUb29sczpcXG5cXG5cXHUwMDIwXFx1MDAyMFJlYWN0IC8gUmVkdXhcXHRcXHRXZWJwYWNrXFxuXFx1MDAyMFxcdTAwMjBSZWFjdCBOYXRpdmVcXHRcXHRcXHRHdWxwXFxuXFx1MDAyMFxcdTAwMjBqUXVlcnlcXHRcXHRcXHRcXHRCYWJlbFxcblxcdTAwMjBcXHUwMDIwQ1NTXFx0XFx0XFx0XFx0QnJvd3NlcmlmeVxcblxcdTAwMjBcXHUwMDIwU2Fzc1xcblxcdTAwMjBcXHUwMDIwUmVhY3QgUm91dGVyXFxuXFx1MDAyMFxcdTAwMjBIdG1sIDUgQ2FudmFzXFxuXFxuXFxuXFx1MDAyMFxcdTAwMjBCYWNrZW5kOlxcdFxcdFxcdFRlc3RpbmcgVG9vbHM6XFxuXFxuXFx1MDAyMFxcdTAwMjBOb2RlLmpzXFx0XFx0XFx0XFx0RW56eW1lXFxuXFx1MDAyMFxcdTAwMjBFeHByZXNzXFx0XFx0XFx0XFx0TW9jaGEgLyBDaGFpXFxuXFx1MDAyMFxcdTAwMjBQb3N0Z3Jlc1xcdFxcdFxcdFNlbGVuaXVtXFxuXFx1MDAyMFxcdTAwMjBNb25nb0RCXFx0XFx0XFx0SmVzdFxcblxcdTAwMjBcXHUwMDIwSlNPTiBXZWItdG9rZW5zXFx0XFx0RmV0Y2gtTW9ja1xcblxcdTAwMjBcXHUwMDIwU29ja2V0LmlvXFx0XFx0XFx0Q2lyY2xlIENJJ1xudHlwZSh0ZXh0LCB0ZXJtaW5hbClcbiJdfQ==
