import './main.css'

let terminal = document.getElementById('terminal')

let type = (string, element) => {
  element.value = ''
  const writer = (i) => {
    if (string.length <= i++) {
      element.value = string;
      setTimeout(function() {
        type(text, terminal)
      }, 9000);
      return;
    }
    element.value = string.substring(0, i);
    let rand = Math.floor(Math.random() * (50) + 1);
    setTimeout(function () { writer(i); }, rand);
  }
  writer(0)
}
let text = '\n\u0020\u0020Primary Language: Javascript\n\n\n\u0020\u0020Client Side:\t\t\tBuild Tools:\n\n\u0020\u0020React / Redux\t\tWebpack\n\u0020\u0020React Native\t\t\tGulp\n\u0020\u0020jQuery\t\t\t\tBabel\n\u0020\u0020CSS\t\t\t\tBrowserify\n\u0020\u0020Sass\n\u0020\u0020React Router\n\u0020\u0020Html 5 Canvas\n\n\n\u0020\u0020Backend:\t\t\tTesting Tools:\n\n\u0020\u0020Node.js\t\t\t\tEnzyme\n\u0020\u0020Express\t\t\t\tMocha / Chai\n\u0020\u0020Postgres\t\t\tSelenium\n\u0020\u0020MongoDB\t\t\tJest\n\u0020\u0020JSON Web-tokens\t\tFetch-Mock\n\u0020\u0020Socket.io\t\t\tCircle CI'
type(text, terminal)
