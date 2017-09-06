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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxXQUFXLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUFmOztBQUVBLElBQUksT0FBTyxTQUFQLElBQU8sQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFxQjtBQUM5QixNQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsQ0FBRCxFQUFPO0FBQ3BCLFFBQUksT0FBTyxNQUFQLElBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCLGNBQVEsS0FBUixHQUFnQixNQUFoQjtBQUNBO0FBQ0Q7QUFDRCxZQUFRLEtBQVIsR0FBZ0IsT0FBTyxTQUFQLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQWhCO0FBQ0EsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFpQixFQUFqQixHQUF1QixDQUFsQyxDQUFYO0FBQ0EsZUFBVyxZQUFZO0FBQUUsYUFBTyxDQUFQO0FBQVksS0FBckMsRUFBdUMsSUFBdkM7QUFDRCxHQVJEO0FBU0EsU0FBTyxDQUFQO0FBQ0QsQ0FYRDtBQVlBLElBQUksT0FBTyw2WUFBWDtBQUNBLEtBQUssSUFBTCxFQUFXLFFBQVg7O0FBRUEsSUFBSSwyVEFBSjtBQUNBLElBQUksU0FBUyxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQyxXQUFTLEtBQVQsR0FBaUIsRUFBakI7QUFDQSxXQUFTLEtBQVQsQ0FBZSxLQUFmLEdBQXVCLFNBQXZCO0FBQ0EsT0FBSyxhQUFMLEVBQW9CLFFBQXBCO0FBQ0QsQ0FKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgdGVybWluYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybWluYWwnKVxuXG5sZXQgdHlwZSA9IChzdHJpbmcsIGVsZW1lbnQpID0+IHtcbiAgY29uc3Qgd3JpdGVyID0gKGkpID0+IHtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA8PSBpKyspIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBzdHJpbmc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQudmFsdWUgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIGkpO1xuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwKSArIDEpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB3cml0ZXIoaSk7IH0sIHJhbmQpO1xuICB9XG4gIHdyaXRlcigwKVxufVxubGV0IHRleHQgPSAnXFxuUHJpbWFyeSBMYW5ndWFnZTogSmF2YXNjcmlwdFxcblxcblxcbkNsaWVudCBTaWRlOlxcdFxcdFxcdEJ1aWxkIFRvb2xzOlxcblxcblJlYWN0IC8gUmVkdXhcXHRcXHRcXHRXZWJwYWNrXFxuUmVhY3QgTmF0aXZlXFx0XFx0XFx0R3VscFxcbmpRdWVyeVxcdFxcdFxcdFxcdEJhYmVsXFxuQ1NTXFx0XFx0XFx0XFx0XFx0QnJvd3NlcmlmeVxcblNhc3NcXG5SZWFjdCBSb3V0ZXJcXG5IdG1sIDUgQ2FudmFzXFxuXFxuXFxuQmFja2VuZDpcXHRcXHRcXHRcXHRUZXN0aW5nIFRvb2xzOlxcblxcbk5vZGUuanNcXHRcXHRcXHRcXHRFbnp5bWVcXG5FeHByZXNzXFx0XFx0XFx0XFx0TW9jaGEgLyBDaGFpXFxuUG9zdGdyZXNcXHRcXHRcXHRcXHRTZWxlbml1bVxcbk1vbmdvREJcXHRcXHRcXHRKZXN0XFxuSlNPTiBXZWItdG9rZW5zXFx0XFx0RmV0Y2gtTW9ja1xcblNvY2tldC5pb1xcdFxcdFxcdFxcdENpcmNsZSBDSSdcbnR5cGUodGV4dCwgdGVybWluYWwpXG5cbmxldCBnaXRodWJDbGlja2VkID0gYFxcblxcblxcblRoYW5rcyBmb3IgY2hlY2tpbmcgb3V0IG15IEdpdGh1YiFcXG5cXG5cXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcblxcbkluIGNhc2UgeW91IG1pc3NlZCB0aGVtIGhlcmUgYXJlIHNvbWUgb2YgbXkgZmF2b3JpdGUgcHJvamVjdHMgc28gZmFyOlxcblxcbmh0dHBzOi8vbW92aWV0cmFja2VyLXR1cmluZy5oZXJva3VhcHAuY29tL1xcblxcbmh0dHBzOi8vdm90ZXItZGF0YS5oZXJva3VhcHAuY29tL2FwaS92MS92b3RlcnNcXG5cXG5odHRwczovL2RidWxsNy5naXRodWIuaW8vYnJlYWtvdXQvYFxubGV0IGdpdGh1YiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRodWInKVxuZ2l0aHViLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0ZXJtaW5hbC52YWx1ZSA9ICcnXG4gIHRlcm1pbmFsLnN0eWxlLmNvbG9yID0gJyMzM0ZGMzknXG4gIHR5cGUoZ2l0aHViQ2xpY2tlZCwgdGVybWluYWwpXG59KVxuXG5cbiJdfQ==
