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
var x = 50;
var y = 50;
context.fillStyle = "rgba(0, 255, 0, 1)"
context.fillRect(x, y, 10, 10);

let gameLoop = () => {
  context.fillRect(x++, y, 10, 10);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
