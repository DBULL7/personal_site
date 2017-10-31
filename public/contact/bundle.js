(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var sendButton = document.getElementById('send');

sendButton.addEventListener('click', function () {
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  if (email === '') {
    badInput('email');
  }
  if (subject === '') {
    badInput('subject');
  }
  if (message === '') {
    badInput('message');
  }
  if (email === '' || subject === '' || message === '') return;
  fetch('/api/v1/email', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      subject: subject,
      message: message
    })
  }).then(function (res) {
    return res.json();
  }).then(function (result) {
    return console.log(result);
  }).catch(function (err) {
    return console.log(err);
  });
});

var badInput = function badInput(elementName) {
  var element = document.getElementById(elementName);
  element.style.borderBottom = '2px solid red';
  setTimeout(function () {
    element.style.borderBottom = '2px solid #D3C8C8';
  }, 2000);
};

var email = document.getElementById('email');
var emailLabel = document.getElementById('email-label');
email.addEventListener('focus', function () {
  emailLabel.style.color = '#39F';
  emailLabel.style.top = '-45px';
  emailLabel.style.fontSize = '12px';
});
email.addEventListener('blur', function () {
  emailLabel.style.color = '#dff937';
  emailLabel.style.fontSize = '22px';
  var pixels = emailLabel.style.top;
  blur(pixels, emailLabel);
});

var subject = document.getElementById('subject');
var subjectLabel = document.getElementById('subject-label');
subject.addEventListener('focus', function () {
  subjectLabel.style.color = '#39F';
  subjectLabel.style.top = '-45px';
  subjectLabel.style.fontSize = '12px';
});
subject.addEventListener('blur', function () {
  subjectLabel.style.color = '#dff937';
  subjectLabel.style.fontSize = '22px';
  var pixels = subjectLabel.style.top;
  blur(pixels, subjectLabel);
});

var message = document.getElementById('message');
var messageLabel = document.getElementById('message-label');
message.addEventListener('focus', function () {
  messageLabel.style.color = '#39F';
  messageLabel.style.top = '-45px';
  messageLabel.style.fontSize = '12px';
});
message.addEventListener('blur', function () {
  messageLabel.style.color = '#dff937';
  var pixels = messageLabel.style.top;
  blur(pixels, messageLabel);
  messageLabel.style.fontSize = '22px';
});

var blur = function blur(pixels, elem) {
  var value = parseInt(pixels, 10);
  var absolute = Math.abs(value);
  for (var i = value; i <= -20; i++) {
    elem.style.top = i + 'px';
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29udGFjdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQjs7QUFFQSxXQUFXLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekMsTUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixFQUFpQyxLQUE3QztBQUNBLE1BQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBakQ7QUFDQSxNQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLEVBQW1DLEtBQWpEO0FBQ0EsTUFBSSxVQUFVLEVBQWQsRUFBa0I7QUFDaEIsYUFBUyxPQUFUO0FBQ0Q7QUFDRCxNQUFJLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsYUFBUyxTQUFUO0FBQ0Q7QUFDRCxNQUFJLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsYUFBUyxTQUFUO0FBQ0Q7QUFDRCxNQUFJLFVBQVUsRUFBVixJQUFnQixZQUFZLEVBQTVCLElBQWtDLFlBQVksRUFBbEQsRUFBc0Q7QUFDdEQsUUFBTSxlQUFOLEVBQXVCO0FBQ3RCLFlBQVEsTUFEYztBQUV0QixhQUFTLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUZhO0FBR3RCLFVBQU0sS0FBSyxTQUFMLENBQWU7QUFDbkIsYUFBTyxLQURZO0FBRW5CLGVBQVMsT0FGVTtBQUduQixlQUFTO0FBSFUsS0FBZjtBQUhnQixHQUF2QixFQVFHLElBUkgsQ0FRUTtBQUFBLFdBQU8sSUFBSSxJQUFKLEVBQVA7QUFBQSxHQVJSLEVBU0MsSUFURCxDQVNNO0FBQUEsV0FBVSxRQUFRLEdBQVIsQ0FBWSxNQUFaLENBQVY7QUFBQSxHQVROLEVBVUMsS0FWRCxDQVVPO0FBQUEsV0FBTyxRQUFRLEdBQVIsQ0FBWSxHQUFaLENBQVA7QUFBQSxHQVZQO0FBV0QsQ0F6QkQ7O0FBMkJBLElBQUksV0FBVyxTQUFYLFFBQVcsQ0FBQyxXQUFELEVBQWlCO0FBQzlCLE1BQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZDtBQUNBLFVBQVEsS0FBUixDQUFjLFlBQWQsR0FBNkIsZUFBN0I7QUFDQSxhQUFXLFlBQVc7QUFDcEIsWUFBUSxLQUFSLENBQWMsWUFBZCxHQUE2QixtQkFBN0I7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdELENBTkQ7O0FBUUEsSUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsSUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixhQUF4QixDQUFqQjtBQUNBLE1BQU0sZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtBQUNwQyxhQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUIsTUFBekI7QUFDQSxhQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBdUIsT0FBdkI7QUFDQSxhQUFXLEtBQVgsQ0FBaUIsUUFBakIsR0FBNEIsTUFBNUI7QUFDRCxDQUpEO0FBS0EsTUFBTSxnQkFBTixDQUF1QixNQUF2QixFQUErQixZQUFNO0FBQ25DLGFBQVcsS0FBWCxDQUFpQixLQUFqQixHQUF5QixTQUF6QjtBQUNBLGFBQVcsS0FBWCxDQUFpQixRQUFqQixHQUE0QixNQUE1QjtBQUNBLE1BQUksU0FBUyxXQUFXLEtBQVgsQ0FBaUIsR0FBOUI7QUFDQSxPQUFLLE1BQUwsRUFBYSxVQUFiO0FBQ0QsQ0FMRDs7QUFRQSxJQUFJLFVBQVUsU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxJQUFJLGVBQWUsU0FBUyxjQUFULENBQXdCLGVBQXhCLENBQW5CO0FBQ0EsUUFBUSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDLGVBQWEsS0FBYixDQUFtQixLQUFuQixHQUEyQixNQUEzQjtBQUNBLGVBQWEsS0FBYixDQUFtQixHQUFuQixHQUF5QixPQUF6QjtBQUNBLGVBQWEsS0FBYixDQUFtQixRQUFuQixHQUE4QixNQUE5QjtBQUNELENBSkQ7QUFLQSxRQUFRLGdCQUFSLENBQXlCLE1BQXpCLEVBQWlDLFlBQU07QUFDckMsZUFBYSxLQUFiLENBQW1CLEtBQW5CLEdBQTJCLFNBQTNCO0FBQ0EsZUFBYSxLQUFiLENBQW1CLFFBQW5CLEdBQThCLE1BQTlCO0FBQ0EsTUFBSSxTQUFTLGFBQWEsS0FBYixDQUFtQixHQUFoQztBQUNBLE9BQUssTUFBTCxFQUFhLFlBQWI7QUFDRCxDQUxEOztBQVFBLElBQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQUksZUFBZSxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBbkI7QUFDQSxRQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsZUFBYSxLQUFiLENBQW1CLEtBQW5CLEdBQTJCLE1BQTNCO0FBQ0EsZUFBYSxLQUFiLENBQW1CLEdBQW5CLEdBQXlCLE9BQXpCO0FBQ0EsZUFBYSxLQUFiLENBQW1CLFFBQW5CLEdBQThCLE1BQTlCO0FBQ0QsQ0FKRDtBQUtBLFFBQVEsZ0JBQVIsQ0FBeUIsTUFBekIsRUFBaUMsWUFBTTtBQUNyQyxlQUFhLEtBQWIsQ0FBbUIsS0FBbkIsR0FBMkIsU0FBM0I7QUFDQSxNQUFJLFNBQVMsYUFBYSxLQUFiLENBQW1CLEdBQWhDO0FBQ0EsT0FBSyxNQUFMLEVBQWEsWUFBYjtBQUNBLGVBQWEsS0FBYixDQUFtQixRQUFuQixHQUE4QixNQUE5QjtBQUNELENBTEQ7O0FBUUEsSUFBSSxPQUFPLFNBQVAsSUFBTyxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWtCO0FBQzNCLE1BQUksUUFBUSxTQUFTLE1BQVQsRUFBaUIsRUFBakIsQ0FBWjtBQUNBLE1BQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWY7QUFDQSxPQUFLLElBQUksSUFBSSxLQUFiLEVBQW9CLEtBQUssQ0FBQyxFQUExQixFQUE4QixHQUE5QixFQUFtQztBQUNqQyxTQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQW9CLENBQXBCO0FBQ0Q7QUFDRixDQU5EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCBzZW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQnKVxuXG5zZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZVxuICBsZXQgc3ViamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0JykudmFsdWVcbiAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpLnZhbHVlXG4gIGlmIChlbWFpbCA9PT0gJycpIHtcbiAgICBiYWRJbnB1dCgnZW1haWwnKVxuICB9IFxuICBpZiAoc3ViamVjdCA9PT0gJycpIHtcbiAgICBiYWRJbnB1dCgnc3ViamVjdCcpIFxuICB9IFxuICBpZiAobWVzc2FnZSA9PT0gJycpIHsgXG4gICAgYmFkSW5wdXQoJ21lc3NhZ2UnKSBcbiAgfVxuICBpZiAoZW1haWwgPT09ICcnIHx8IHN1YmplY3QgPT09ICcnIHx8IG1lc3NhZ2UgPT09ICcnKSByZXR1cm4gXG4gIGZldGNoKCcvYXBpL3YxL2VtYWlsJywge1xuICAgbWV0aG9kOiAnUE9TVCcsXG4gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgfSlcbiAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbn0pXG5cbmxldCBiYWRJbnB1dCA9IChlbGVtZW50TmFtZSkgPT4ge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnROYW1lKVxuICBlbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcycHggc29saWQgcmVkJ1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gJzJweCBzb2xpZCAjRDNDOEM4J1xuICB9LCAyMDAwKTtcbn1cblxubGV0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJylcbmxldCBlbWFpbExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWxhYmVsJylcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBlbWFpbExhYmVsLnN0eWxlLmNvbG9yID0gJyMzOUYnXG4gIGVtYWlsTGFiZWwuc3R5bGUudG9wID0gJy00NXB4J1xuICBlbWFpbExhYmVsLnN0eWxlLmZvbnRTaXplID0gJzEycHgnXG59KVxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgZW1haWxMYWJlbC5zdHlsZS5jb2xvciA9ICcjZGZmOTM3J1xuICBlbWFpbExhYmVsLnN0eWxlLmZvbnRTaXplID0gJzIycHgnXG4gIGxldCBwaXhlbHMgPSBlbWFpbExhYmVsLnN0eWxlLnRvcFxuICBibHVyKHBpeGVscywgZW1haWxMYWJlbClcbn0pXG5cblxubGV0IHN1YmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViamVjdCcpXG5sZXQgc3ViamVjdExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3QtbGFiZWwnKVxuc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgc3ViamVjdExhYmVsLnN0eWxlLmNvbG9yID0gJyMzOUYnXG4gIHN1YmplY3RMYWJlbC5zdHlsZS50b3AgPSAnLTQ1cHgnXG4gIHN1YmplY3RMYWJlbC5zdHlsZS5mb250U2l6ZSA9ICcxMnB4J1xufSlcbnN1YmplY3QuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgc3ViamVjdExhYmVsLnN0eWxlLmNvbG9yID0gJyNkZmY5MzcnXG4gIHN1YmplY3RMYWJlbC5zdHlsZS5mb250U2l6ZSA9ICcyMnB4J1xuICBsZXQgcGl4ZWxzID0gc3ViamVjdExhYmVsLnN0eWxlLnRvcFxuICBibHVyKHBpeGVscywgc3ViamVjdExhYmVsKVxufSlcblxuXG5sZXQgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJylcbmxldCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1sYWJlbCcpXG5tZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICBtZXNzYWdlTGFiZWwuc3R5bGUuY29sb3IgPSAnIzM5RidcbiAgbWVzc2FnZUxhYmVsLnN0eWxlLnRvcCA9ICctNDVweCdcbiAgbWVzc2FnZUxhYmVsLnN0eWxlLmZvbnRTaXplID0gJzEycHgnXG59KVxubWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICBtZXNzYWdlTGFiZWwuc3R5bGUuY29sb3IgPSAnI2RmZjkzNydcbiAgbGV0IHBpeGVscyA9IG1lc3NhZ2VMYWJlbC5zdHlsZS50b3BcbiAgYmx1cihwaXhlbHMsIG1lc3NhZ2VMYWJlbClcbiAgbWVzc2FnZUxhYmVsLnN0eWxlLmZvbnRTaXplID0gJzIycHgnXG59KVxuXG5cbmxldCBibHVyID0gKHBpeGVscywgZWxlbSkgPT4ge1xuICBsZXQgdmFsdWUgPSBwYXJzZUludChwaXhlbHMsIDEwKVxuICBsZXQgYWJzb2x1dGUgPSBNYXRoLmFicyh2YWx1ZSlcbiAgZm9yIChsZXQgaSA9IHZhbHVlOyBpIDw9IC0yMDsgaSsrKSB7XG4gICAgZWxlbS5zdHlsZS50b3AgPSBgJHtpfXB4YFxuICB9XG59Il19
