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


let flicker = () => {
  let job = document.getElementById('job')
  job.style.paddingRight = '50px'
  job.style.color = 'red'
  setTimeout(() => {
    job.style.paddingRight = '0'
    job.style.color = '#fff'
    test()
  }, 90);
  setTimeout(function () { flicker(); }, 5000);
}
setTimeout(function() {
  flicker()
}, 3500);
