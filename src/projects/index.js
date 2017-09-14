window.addEventListener('touchstart', function onFirstTouch() {
  var paras = document.getElementsByClassName('hover-layer');
  while (paras.length) {
    paras[0].remove()
  }
  document.getElementById('sc3-container').addEventListener('click', () => {
    makeRequest('Static Comp 3')
  })
  document.getElementById('breakout-container').addEventListener('click', () => {
    makeRequest('breakout')
  })
  document.getElementById('jetfuel-container').addEventListener('click', () => {
    makeRequest('jetfuel')
  })
  document.getElementById('2DoBox-container').addEventListener('click', () => {
    makeRequest('2DoBox')
  })
  document.getElementById('cs-container').addEventListener('click', () => {
    makeRequest('code-sport')
  })
  document.getElementById('weathrly-container').addEventListener('click', () => {
    makeRequest('weathrly')
  })
  document.getElementById('voter-data-container').addEventListener('click', () => {
    makeRequest('voter-data')
  })
  document.getElementById('movie-tracker-container').addEventListener('click', () => {
    makeRequest('movie-tracker')
  })
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);


let makeRequest = (name) => {
  fetch('/api/v1/projects', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project: name
    })
  })
  .then(res => res.json())
  .then(results => {
    popup(results)
  }).catch(err => console.log(err))
}

let popup = (project) => {
  let p = project.project
  let title = p.name 
  let description = p.description
  let technologies = p.technologies
  let gh = p.github
  let site = p.site
  let modal = `<div class='popup-background' id='pop'>
                <div class='popup'>
                  <p class='popup-title'>${title}</p>
                  <picture>
                    <source srcset='${p.webp}' type='image/webp'>
                    <source srcset='${p.jpg}' type='image/jpeg'>
                    <img id='large-img' src='${p.jpg}' alt="Movie Tracker Screenshot">
                  </picture>
                  <p>${description}</p>
                  <ul class='tech-list'>
                  ${technologies.map(tech => `<li class='tech'>${tech}</li>`).join('')}
                  </ul>
                  <a href='${gh}' target="_blank" class='popup-links'>Github</a>
                  <a href='${site}' target="_blank" class='popup-links'>Website</a>
                </div>
              </div>`
  document.body.insertAdjacentHTML('beforeend', modal)
  document.body.style.overflow = 'hidden'
  let pop = document.getElementById('pop')
  pop.addEventListener('click', () => {
    var elem = document.getElementById("pop");
    elem.remove()
    document.body.style.overflow = 'auto'
  })
}

let movie = document.getElementById('movie-tracker-btn')
movie.addEventListener('click', () => {
  makeRequest('movie-tracker')
})

let voter = document.getElementById('voter-data-btn')
voter.addEventListener('click', () => {
  makeRequest('voter-data')
})

let weather = document.getElementById('weathrly-btn')
weather.addEventListener('click', () => {
  makeRequest('weathrly')
})

let cs = document.getElementById('cs-btn')
cs.addEventListener('click', () => {
  makeRequest('code-sport')
})

let box = document.getElementById('box-btn')
box.addEventListener('click', () => {
  makeRequest('2DoBox')
})

let jf = document.getElementById('jf-btn')
jf.addEventListener('click', () => {
  makeRequest('jetfuel')
})

let breakout = document.getElementById('breakout-btn')
breakout.addEventListener('click', () => {
  makeRequest('breakout')
})

let sc3 = document.getElementById('sc3-btn')
sc3.addEventListener('click', () => {
  makeRequest('Static Comp 3')
})


