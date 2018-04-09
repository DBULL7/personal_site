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
  document.getElementById('unaveeV2-container').addEventListener('click', function () {
    makeRequest('UnaveeV2');
  });
  document.getElementById('crx-container').addEventListener('click', function () {
    makeRequest('CRX');
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

var crx = document.getElementById('crx-btn');
crx.addEventListener('click', function () {
  makeRequest('CRX');
});

var unaveeV2 = document.getElementById('unaveeV2-btn');
unaveeV2.addEventListener('click', function () {
  makeRequest('UnaveeV2');
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE9BQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBUyxZQUFULEdBQXdCO0FBQzVELE1BQUksUUFBUSxTQUFTLHNCQUFULENBQWdDLGFBQWhDLENBQVo7QUFDQSxTQUFPLE1BQU0sTUFBYixFQUFxQjtBQUNuQixVQUFNLENBQU4sRUFBUyxNQUFUO0FBQ0Q7QUFDRCxXQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFlBQU07QUFDdkUsZ0JBQVksZUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLGdCQUE5QyxDQUErRCxPQUEvRCxFQUF3RSxZQUFNO0FBQzVFLGdCQUFZLFVBQVo7QUFDRCxHQUZEO0FBR0EsV0FBUyxjQUFULENBQXdCLG1CQUF4QixFQUE2QyxnQkFBN0MsQ0FBOEQsT0FBOUQsRUFBdUUsWUFBTTtBQUMzRSxnQkFBWSxTQUFaO0FBQ0QsR0FGRDtBQUdBLFdBQVMsY0FBVCxDQUF3QixrQkFBeEIsRUFBNEMsZ0JBQTVDLENBQTZELE9BQTdELEVBQXNFLFlBQU07QUFDMUUsZ0JBQVksUUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MsZ0JBQXhDLENBQXlELE9BQXpELEVBQWtFLFlBQU07QUFDdEUsZ0JBQVksWUFBWjtBQUNELEdBRkQ7QUFHQSxXQUFTLGNBQVQsQ0FBd0Isb0JBQXhCLEVBQThDLGdCQUE5QyxDQUErRCxPQUEvRCxFQUF3RSxZQUFNO0FBQzVFLGdCQUFZLFVBQVo7QUFDRCxHQUZEO0FBR0EsV0FBUyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsWUFBTTtBQUM5RSxnQkFBWSxZQUFaO0FBQ0Qs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LGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbEMsY0FBWSxRQUFaO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJLEtBQUssU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQVQ7QUFDQSxHQUFHLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsY0FBWSxTQUFaO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJLFdBQVcsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDdkMsY0FBWSxVQUFaO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJLE1BQU0sU0FBUyxjQUFULENBQXdCLFNBQXhCLENBQVY7QUFDQSxJQUFJLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbEMsY0FBWSxlQUFaO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIG9uRmlyc3RUb3VjaCgpIHtcbiAgdmFyIHBhcmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaG92ZXItbGF5ZXInKTtcbiAgd2hpbGUgKHBhcmFzLmxlbmd0aCkge1xuICAgIHBhcmFzWzBdLnJlbW92ZSgpXG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjMy1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnU3RhdGljIENvbXAgMycpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmVha291dC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnYnJlYWtvdXQnKVxuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamV0ZnVlbC1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnamV0ZnVlbCcpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcyRG9Cb3gtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFrZVJlcXVlc3QoJzJEb0JveCcpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcy1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnY29kZS1zcG9ydCcpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aHJseS1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnd2VhdGhybHknKVxuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZXItZGF0YS1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgndm90ZXItZGF0YScpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZS10cmFja2VyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdtb3ZpZS10cmFja2VyJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuYXZlZS1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgndW5hdmVlJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Vob29wcy1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgndWhvb3BzJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhYi1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtYWtlUmVxdWVzdCgnZGFiJylcbiAgfSlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuYXZlZVYyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1ha2VSZXF1ZXN0KCdVbmF2ZWVWMicpXG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcngtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWFrZVJlcXVlc3QoJ0NSWCcpXG4gIH0pXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25GaXJzdFRvdWNoLCBmYWxzZSk7XG59LCBmYWxzZSk7XG5cblxubGV0IG1ha2VSZXF1ZXN0ID0gKG5hbWUpID0+IHtcbiAgZmV0Y2goJy9hcGkvdjEvcHJvamVjdHMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHByb2plY3Q6IG5hbWVcbiAgICB9KVxuICB9KVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgcG9wdXAocmVzdWx0cylcbiAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG59XG5cbmxldCBwb3B1cCA9IChwcm9qZWN0KSA9PiB7XG4gIGxldCBwID0gcHJvamVjdC5wcm9qZWN0XG4gIGxldCB0aXRsZSA9IHAubmFtZSBcbiAgbGV0IGRlc2NyaXB0aW9uID0gcC5kZXNjcmlwdGlvblxuICBsZXQgdGVjaG5vbG9naWVzID0gcC50ZWNobm9sb2dpZXNcbiAgbGV0IGdoID0gcC5naXRodWJcbiAgbGV0IHNpdGUgPSBwLnNpdGVcbiAgbGV0IG1vZGFsID0gYDxkaXYgY2xhc3M9J3BvcHVwLWJhY2tncm91bmQnIGlkPSdwb3AnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BvcHVwJz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSdwb3B1cC10aXRsZSc+JHt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmNzZXQ9JyR7cC53ZWJwfScgdHlwZT0naW1hZ2Uvd2VicCc+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3Jjc2V0PScke3AuanBnfScgdHlwZT0naW1hZ2UvanBlZyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9J2xhcmdlLWltZycgc3JjPScke3AuanBnfScgYWx0PVwicHJvamVjdCBzY3JlZW5zaG90XCI+XG4gICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICA8cD4ke2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz0ndGVjaC1saXN0Jz5cbiAgICAgICAgICAgICAgICAgICR7dGVjaG5vbG9naWVzLm1hcCh0ZWNoID0+IGA8bGkgY2xhc3M9J3RlY2gnPiR7dGVjaH08L2xpPmApLmpvaW4oJycpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyR7Z2h9JyB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz0ncG9wdXAtbGlua3MnPkdpdGh1YjwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyR7c2l0ZX0nIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPSdwb3B1cC1saW5rcyc+V2Vic2l0ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+YFxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbW9kYWwpXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICBsZXQgcG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcCcpXG4gIHBvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wXCIpO1xuICAgIGVsZW0ucmVtb3ZlKClcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nXG4gIH0pXG59XG5cbmxldCBjcnggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3J4LWJ0bicpXG5jcnguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCdDUlgnKVxufSlcblxuXG5sZXQgdW5hdmVlVjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5hdmVlVjItYnRuJylcbnVuYXZlZVYyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnVW5hdmVlVjInKVxufSlcblxubGV0IGRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWItYnRuJylcbmRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJ0RlbnZlcl9BZHZpc29yeV9Cb2FyZCcpXG59KVxuXG5sZXQgdWhvb3BzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Vob29wcy1idG4nKVxudWhvb3BzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgndWhvb3BzJylcbn0pXG5cbmxldCB1bmF2ZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5hdmVlLWJ0bicpXG51bmF2ZWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCd1bmF2ZWUnKVxufSlcblxubGV0IG1vdmllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllLXRyYWNrZXItYnRuJylcbm1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnbW92aWUtdHJhY2tlcicpXG59KVxuXG5sZXQgdm90ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZXItZGF0YS1idG4nKVxudm90ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1ha2VSZXF1ZXN0KCd2b3Rlci1kYXRhJylcbn0pXG5cbmxldCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRocmx5LWJ0bicpXG53ZWF0aGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnd2VhdGhybHknKVxufSlcblxubGV0IGNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzLWJ0bicpXG5jcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJ2NvZGUtc3BvcnQnKVxufSlcblxubGV0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gtYnRuJylcbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJzJEb0JveCcpXG59KVxuXG5sZXQgamYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamYtYnRuJylcbmpmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnamV0ZnVlbCcpXG59KVxuXG5sZXQgYnJlYWtvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJlYWtvdXQtYnRuJylcbmJyZWFrb3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYWtlUmVxdWVzdCgnYnJlYWtvdXQnKVxufSlcblxubGV0IHNjMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYzMtYnRuJylcbnNjMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWFrZVJlcXVlc3QoJ1N0YXRpYyBDb21wIDMnKVxufSlcblxuXG4iXX0=
