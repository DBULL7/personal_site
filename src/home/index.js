let subheader = document.getElementById('example')

let examples = ['React Native Apps', 'Command Line Applications', 'Landing Pages', 'APIs', 'React Apps','Javascript Applications']
let description = 0;

let deleteLine = (element, string) => {
  const deleter = (i) => {
    i--
    if (i < 0) {
      element.value = '';
      description++
      if (description === 6) description = 0
      let currentExample = examples[description]
      type(currentExample, subheader)
      return;
    }
    element.innerText = string.substring(0, i);
    let rand = 25
    setTimeout(function () { deleter(i); }, rand);
  }
  deleter(string.length + 1)
}


let type = (string, element) => {
  const writer = (i) => {
    if (string.length <= i++) {
      element.value = string;
      setTimeout(function () { deleteLine(subheader, string); }, 1200);
      return;
    }
    element.innerText = string.substring(0, i);
    let rand = Math.floor(Math.random() * (50) + 1);
    setTimeout(function () { writer(i); }, rand);
  }
  writer(0)
}
let text = 'Javascript Applications'
type(text, subheader)

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
let Star = require('./star')
let allStars = []
let starColors = ['#ff851b', '#ffdc00', '#00BFFF', '#ff4136', '#f012be', '#2ecc40']
let generate = () => {
  allStars = []
  for (let i = 0; i <= 300; i++) {
    let name = `star${i}`
    let rand = Math.floor(Math.random() * (canvas.width) + 1);
    let randColor = Math.floor(Math.random() * (starColors.length) + 0);
    name = new Star(rand, i*5, 5, 5, starColors[randColor])
    allStars.push(name)
  }
  setTimeout(function() {
    generate()
  }, 5000);
}
generate()
let gameLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  allStars.forEach(star => {
    star.draw(context, canvas)
  })
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

window.addEventListener('scroll', function handler (ev) {

  var someDiv = document.getElementById('new');
  var distanceToTop = someDiv.getBoundingClientRect().top;
  if (distanceToTop <= 0) {
    someDiv.style.bottom = 'auto'
   someDiv.style.position = 'fixed'
   someDiv.style.top = '0'
   window.removeEventListener('scroll', handler)
  } 
});
