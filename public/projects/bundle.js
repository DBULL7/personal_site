(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.addEventListener('touchstart', function onFirstTouch() {
  var paras = document.getElementsByClassName('hover-layer');
  while (paras.length) {
    paras[0].remove();
  }
  document.getElementById('sc3-container').addEventListener('click', function () {
    makeRequest('Static Comp 3');
  });
  document.getElementById('breakout-container').addEventListener('click', function () {
    makeRequest('breakout');
  });
  document.getElementById('jetfuel-container').addEventListener('click', function () {
    makeRequest('jetfuel');
  });
  document.getElementById('2DoBox-container').addEventListener('click', function () {
    makeRequest('2DoBox');
  });
  document.getElementById('cs-container').addEventListener('click', function () {
    makeRequest('code-sport');
  });
  document.getElementById('weathrly-container').addEventListener('click', function () {
    makeRequest('weathrly');
  });
  document.getElementById('voter-data-container').addEventListener('click', function () {
    makeRequest('voter-data');
  });
  document.getElementById('movie-tracker-container').addEventListener('click', function () {
    makeRequest('movie-tracker');
  });
  document.getElementById('unavee-container').addEventListener('click', function () {
    makeRequest('unavee');
  });
  document.getElementById('uhoops-container').addEventListener('click', function () {
    makeRequest('uhoops');
  });
  document.getElementById('dab-container').addEventListener('click', function () {
    makeRequest('dab');
  });
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

var makeRequest = function makeRequest(name) {
  fetch('/api/v1/projects', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project: name
    })
  }).then(function (res) {
    return res.json();
  }).then(function (results) {
    popup(results);
  }).catch(function (err) {
    return console.log(err);
  });
};

var popup = function popup(project) {
  var p = project.project;
  var title = p.name;
  var description = p.description;
  var technologies = p.technologies;
  var gh = p.github;
  var site = p.site;
  var modal = '<div class=\'popup-background\' id=\'pop\'>\n                <div class=\'popup\'>\n                  <p class=\'popup-title\'>' + title + '</p>\n                  <picture>\n                    <source srcset=\'' + p.webp + '\' type=\'image/webp\'>\n                    <source srcset=\'' + p.jpg + '\' type=\'image/jpeg\'>\n                    <img id=\'large-img\' src=\'' + p.jpg + '\' alt="project screenshot">\n                  </picture>\n                  <p>' + description + '</p>\n                  <ul class=\'tech-list\'>\n                  ' + technologies.map(function (tech) {
    return '<li class=\'tech\'>' + tech + '</li>';
  }).join('') + '\n                  </ul>\n                  <a href=\'' + gh + '\' target="_blank" class=\'popup-links\'>Github</a>\n                  <a href=\'' + site + '\' target="_blank" class=\'popup-links\'>Website</a>\n                </div>\n              </div>';
  document.body.insertAdjacentHTML('beforeend', modal);
  document.body.style.overflow = 'hidden';
  var pop = document.getElementById('pop');
  pop.addEventListener('click', function () {
    var elem = document.getElementById("pop");
    elem.remove();
    document.body.style.overflow = 'auto';
  });
};

var dab = document.getElementById('dab-btn');
dab.addEventListener('click', function () {
  makeRequest('Denver_Advisory_Board');
});

var uhoops = document.getElementById('uhoops-btn');
uhoops.addEventListener('click', function () {
  makeRequest('uhoops');
});

var unavee = document.getElementById('unavee-btn');
unavee.addEventListener('click', function () {
  makeRequest('unavee');
});

var movie = document.getElementById('movie-tracker-btn');
movie.addEventListener('click', function () {
  makeRequest('movie-tracker');
});

var voter = document.getElementById('voter-data-btn');
voter.addEventListener('click', function () {
  makeRequest('voter-data');
});

var weather = document.getElementById('weathrly-btn');
weather.addEventListener('click', function () {
  makeRequest('weathrly');
});

var cs = document.getElementById('cs-btn');
cs.addEventListener('click', function () {
  makeRequest('code-sport');
});

var box = document.getElementById('box-btn');
box.addEventListener('click', function () {
  makeRequest('2DoBox');
});

var jf = document.getElementById('jf-btn');
jf.addEventListener('click', function () {
  makeRequest('jetfuel');
});

var breakout = document.getElementById('breakout-btn');
breakout.addEventListener('click', function () {
  makeRequest('breakout');
});

var sc3 = document.getElementById('sc3-btn');
sc3.addEventListener('click', function () {
  makeRequest('Static Comp 3');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBUyxZQUFULEdBQXdCO0FBQzVELE1BQUksUUFBUSxTQUFTLHNCQUFULENBQWdDLGFBQWhDLENBQVo7QUFDQSxTQUFPLE1BQU0sTUFBYixFQUFxQjtBQUNuQixVQUFNLENBQU4sRUFBUyxNQUFUO0FBQ0Q7QUFDRCxXQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFlBQU07QUFDdkUsZ0JBQVksZUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLGdCQUE5QyxDQUErRCxPQUEvRCxFQUF3RSxZQUFNO0FBQzVFLGdCQUFZLFVBQVo7QUFDRCxHQUZEO0FBR0EsV0FBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxnQkFBN0MsQ0FBOEQsT0FBOUQsRUFBdUUsWUFBTTtBQUMzRSxnQkFBWSxTQUFaO0FBQ0QsR0FGRDtBQUdBLFdBQVMsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEMsZ0JBQTVDLENBQTZELE9BQTdELEVBQXNFLFlBQU07QUFDMUUsZ0JBQVksUUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFlBQU07QUFDdEUsZ0JBQVksWUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLGdCQUE5QyxDQUErRCxPQUEvRCxFQUF3RSxZQUFNO0FBQzVFLGdCQUFZLFVBQVo7QUFDRCxHQUZEO0FBR0EsV0FBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsWUFBTTtBQUM5RSxnQkFBWSxZQUFaO0FBQ0Qs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ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gb25GaXJzdFRvdWNoKCkge1xuICB2YXIgcGFyYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdob3Zlci1sYXllcicpO1xuICB3aGlsZSAocGFyYXMubGVuZ3RoKSB7XG4gICAgcGFyYXNbMF0ucmVtb3ZlKClcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2MzLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdTdGF0aWMgQ29tcCAzJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JyZWFrb3V0LWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdicmVha291dCcpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZXRmdWVsLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdqZXRmdWVsJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJzJEb0JveC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnMkRvQm94JylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdjb2RlLXNwb3J0JylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRocmx5LWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCd3ZWF0aHJseScpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3Rlci1kYXRhLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCd2b3Rlci1kYXRhJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLXRyYWNrZXItY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFrZVJlcXVlc3QoJ21vdmllLXRyYWNrZXInKVxuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5hdmVlLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCd1bmF2ZWUnKVxuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndWhvb3BzLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCd1aG9vcHMnKVxuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFiLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdkYWInKVxuICB9KVxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRmlyc3RUb3VjaCwgZmFsc2UpO1xufSwgZmFsc2UpO1xuXG5cbmxldCBtYWtlUmVxdWVzdCA9IChuYW1lKSA9PiB7XG4gIGZldGNoKCcvYXBpL3YxL3Byb2plY3RzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBwcm9qZWN0OiBuYW1lXG4gICAgfSlcbiAgfSlcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKHJlc3VsdHMgPT4ge1xuICAgIHBvcHVwKHJlc3VsdHMpXG4gIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5sZXQgcG9wdXAgPSAocHJvamVjdCkgPT4ge1xuICBsZXQgcCA9IHByb2plY3QucHJvamVjdFxuICBsZXQgdGl0bGUgPSBwLm5hbWUgXG4gIGxldCBkZXNjcmlwdGlvbiA9IHAuZGVzY3JpcHRpb25cbiAgbGV0IHRlY2hub2xvZ2llcyA9IHAudGVjaG5vbG9naWVzXG4gIGxldCBnaCA9IHAuZ2l0aHViXG4gIGxldCBzaXRlID0gcC5zaXRlXG4gIGxldCBtb2RhbCA9IGA8ZGl2IGNsYXNzPSdwb3B1cC1iYWNrZ3JvdW5kJyBpZD0ncG9wJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdwb3B1cCc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ncG9wdXAtdGl0bGUnPiR7dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3Jjc2V0PScke3Aud2VicH0nIHR5cGU9J2ltYWdlL3dlYnAnPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyY3NldD0nJHtwLmpwZ30nIHR5cGU9J2ltYWdlL2pwZWcnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPSdsYXJnZS1pbWcnIHNyYz0nJHtwLmpwZ30nIGFsdD1cInByb2plY3Qgc2NyZWVuc2hvdFwiPlxuICAgICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgICAgICAgICAgPHA+JHtkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9J3RlY2gtbGlzdCc+XG4gICAgICAgICAgICAgICAgICAke3RlY2hub2xvZ2llcy5tYXAodGVjaCA9PiBgPGxpIGNsYXNzPSd0ZWNoJz4ke3RlY2h9PC9saT5gKS5qb2luKCcnKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScke2dofScgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9J3BvcHVwLWxpbmtzJz5HaXRodWI8L2E+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScke3NpdGV9JyB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz0ncG9wdXAtbGlua3MnPldlYnNpdGU8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PmBcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vZGFsKVxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgbGV0IHBvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AnKVxuICBwb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFwiKTtcbiAgICBlbGVtLnJlbW92ZSgpXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJ1xuICB9KVxufVxuXG5sZXQgZGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhYi1idG4nKVxuZGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnRGVudmVyX0Fkdmlzb3J5X0JvYXJkJylcbn0pXG5cbmxldCB1aG9vcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndWhvb3BzLWJ0bicpXG51aG9vcHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCd1aG9vcHMnKVxufSlcblxubGV0IHVuYXZlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmF2ZWUtYnRuJylcbnVuYXZlZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJ3VuYXZlZScpXG59KVxuXG5sZXQgbW92aWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWUtdHJhY2tlci1idG4nKVxubW92aWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCdtb3ZpZS10cmFja2VyJylcbn0pXG5cbmxldCB2b3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3Rlci1kYXRhLWJ0bicpXG52b3Rlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJ3ZvdGVyLWRhdGEnKVxufSlcblxubGV0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhybHktYnRuJylcbndlYXRoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCd3ZWF0aHJseScpXG59KVxuXG5sZXQgY3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3MtYnRuJylcbmNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnY29kZS1zcG9ydCcpXG59KVxuXG5sZXQgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JveC1idG4nKVxuYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnMkRvQm94Jylcbn0pXG5cbmxldCBqZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZi1idG4nKVxuamYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCdqZXRmdWVsJylcbn0pXG5cbmxldCBicmVha291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVha291dC1idG4nKVxuYnJlYWtvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCdicmVha291dCcpXG59KVxuXG5sZXQgc2MzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjMy1idG4nKVxuc2MzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnU3RhdGljIENvbXAgMycpXG59KVxuXG5cbiJdfQ==
