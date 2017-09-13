let screenAvailWidth;
window.onload = () => {
  screenAvailWidth = document.body.clientWidth
}

window.onresize = () => {
  screenAvailWidth = document.body.clientWidth
}


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
  let modal = `<div class='popup-background' id='test'>
                <div class='popup'>
                  <h1>${title}</h1>
                  <picture>
                    <source srcset='${p.webp}' type='image/webp'>
                    <source srcset='${p.jpg}' type='image/jpeg'>
                    <img src='${p.jpg}' alt="Movie Tracker Screenshot">
                  </picture>
                  <p>${description}</p>
                  <ul>
                  ${technologies.map(tech => `<li>${tech}</li>`).join('')}
                  </ul
                </div>
              </div>`
  document.body.insertAdjacentHTML('beforeend', modal)
  document.body.style.overflow = 'hidden'
  let test = document.getElementById('test')
  test.addEventListener('click', () => {
    var elem = document.getElementById("test");
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


