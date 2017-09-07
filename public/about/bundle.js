(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var terminal = document.getElementById('terminal');

var type = function type(string, element) {
  var writer = function writer(i) {
    if (string.length <= i++) {
      element.value = string;
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
var text = '\nPrimary Language: Javascript\n\n\nClient Side:\t\t\tBuild Tools:\n\nReact / Redux\t\t\tWebpack\nReact Native\t\t\tGulp\njQuery\t\t\t\tBabel\nCSS\t\t\t\t\tBrowserify\nSass\nReact Router\nHtml 5 Canvas\n\n\nBackend:\t\t\t\tTesting Tools:\n\nNode.js\t\t\t\tEnzyme\nExpress\t\t\t\tMocha / Chai\nPostgres\t\t\t\tSelenium\nMongoDB\t\t\tJest\nJSON Web-tokens\t\tFetch-Mock\nSocket.io\t\t\t\tCircle CI';
type(text, terminal);

var githubClicked = '\n\n\nThanks for checking out my Github!\n\n\n********************************************\n\nIn case you missed them here are some of my favorite projects so far:\n\nhttps://movietracker-turing.herokuapp.com/\n\nhttps://voter-data.herokuapp.com/api/v1/voters\n\nhttps://dbull7.github.io/breakout/';
var github = document.getElementById('github');
github.addEventListener('click', function () {
  terminal.value = '';
  terminal.style.color = '#33FF39';
  type(githubClicked, terminal);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWJvdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksV0FBVyxTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFJLE9BQU8sU0FBUCxJQUFPLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBcUI7QUFDOUIsTUFBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLENBQUQsRUFBTztBQUNwQixRQUFJLE9BQU8sTUFBUCxJQUFpQixHQUFyQixFQUEwQjtBQUN4QixjQUFRLEtBQVIsR0FBZ0IsTUFBaEI7QUFDQTtBQUNEO0FBQ0QsWUFBUSxLQUFSLEdBQWdCLE9BQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFoQjtBQUNBLFFBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBaUIsRUFBakIsR0FBdUIsQ0FBbEMsQ0FBWDtBQUNBLGVBQVcsWUFBWTtBQUFFLGFBQU8sQ0FBUDtBQUFZLEtBQXJDLEVBQXVDLElBQXZDO0FBQ0QsR0FSRDtBQVNBLFNBQU8sQ0FBUDtBQUNELENBWEQ7QUFZQSxJQUFJLE9BQU8sNllBQVg7QUFDQSxLQUFLLElBQUwsRUFBVyxRQUFYOztBQUVBLElBQUksMlRBQUo7QUFDQSxJQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxPQUFPLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckMsV0FBUyxLQUFULEdBQWlCLEVBQWpCO0FBQ0EsV0FBUyxLQUFULENBQWUsS0FBZixHQUF1QixTQUF2QjtBQUNBLE9BQUssYUFBTCxFQUFvQixRQUFwQjtBQUNELENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IHRlcm1pbmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlcm1pbmFsJylcblxubGV0IHR5cGUgPSAoc3RyaW5nLCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHdyaXRlciA9IChpKSA9PiB7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPD0gaSsrKSB7XG4gICAgICBlbGVtZW50LnZhbHVlID0gc3RyaW5nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LnZhbHVlID0gc3RyaW5nLnN1YnN0cmluZygwLCBpKTtcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1MCkgKyAxKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgd3JpdGVyKGkpOyB9LCByYW5kKTtcbiAgfVxuICB3cml0ZXIoMClcbn1cbmxldCB0ZXh0ID0gJ1xcblByaW1hcnkgTGFuZ3VhZ2U6IEphdmFzY3JpcHRcXG5cXG5cXG5DbGllbnQgU2lkZTpcXHRcXHRcXHRCdWlsZCBUb29sczpcXG5cXG5SZWFjdCAvIFJlZHV4XFx0XFx0XFx0V2VicGFja1xcblJlYWN0IE5hdGl2ZVxcdFxcdFxcdEd1bHBcXG5qUXVlcnlcXHRcXHRcXHRcXHRCYWJlbFxcbkNTU1xcdFxcdFxcdFxcdFxcdEJyb3dzZXJpZnlcXG5TYXNzXFxuUmVhY3QgUm91dGVyXFxuSHRtbCA1IENhbnZhc1xcblxcblxcbkJhY2tlbmQ6XFx0XFx0XFx0XFx0VGVzdGluZyBUb29sczpcXG5cXG5Ob2RlLmpzXFx0XFx0XFx0XFx0RW56eW1lXFxuRXhwcmVzc1xcdFxcdFxcdFxcdE1vY2hhIC8gQ2hhaVxcblBvc3RncmVzXFx0XFx0XFx0XFx0U2VsZW5pdW1cXG5Nb25nb0RCXFx0XFx0XFx0SmVzdFxcbkpTT04gV2ViLXRva2Vuc1xcdFxcdEZldGNoLU1vY2tcXG5Tb2NrZXQuaW9cXHRcXHRcXHRcXHRDaXJjbGUgQ0knXG50eXBlKHRleHQsIHRlcm1pbmFsKVxuXG5sZXQgZ2l0aHViQ2xpY2tlZCA9IGBcXG5cXG5cXG5UaGFua3MgZm9yIGNoZWNraW5nIG91dCBteSBHaXRodWIhXFxuXFxuXFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG5cXG5JbiBjYXNlIHlvdSBtaXNzZWQgdGhlbSBoZXJlIGFyZSBzb21lIG9mIG15IGZhdm9yaXRlIHByb2plY3RzIHNvIGZhcjpcXG5cXG5odHRwczovL21vdmlldHJhY2tlci10dXJpbmcuaGVyb2t1YXBwLmNvbS9cXG5cXG5odHRwczovL3ZvdGVyLWRhdGEuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdm90ZXJzXFxuXFxuaHR0cHM6Ly9kYnVsbDcuZ2l0aHViLmlvL2JyZWFrb3V0L2BcbmxldCBnaXRodWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0aHViJylcbmdpdGh1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGVybWluYWwudmFsdWUgPSAnJ1xuICB0ZXJtaW5hbC5zdHlsZS5jb2xvciA9ICcjMzNGRjM5J1xuICB0eXBlKGdpdGh1YkNsaWNrZWQsIHRlcm1pbmFsKVxufSkiXX0=
