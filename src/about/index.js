let terminal = document.getElementById('terminal')

let type = (string, element) => {
  const writer = (i) => {
    if (string.length <= i++) {
      element.value = string;
      return;
    }
    element.value = string.substring(0, i);
    let rand = Math.floor(Math.random() * (50) + 1);
    setTimeout(function () { writer(i); }, rand);
  }
  writer(0)
}
let text = '\nPrimary Language: Javascript\n\n\nClient Side:\t\t\tBuild Tools:\n\nReact / Redux\t\t\tWebpack\nReact Native\t\t\tGulp\njQuery\t\t\t\tBabel\nCSS\t\t\t\t\tBrowserify\nSass\nReact Router\nHtml 5 Canvas\n\n\nBackend:\t\t\t\tTesting Tools:\n\nNode.js\t\t\t\tEnzyme\nExpress\t\t\t\tMocha / Chai\nPostgres\t\t\t\tSelenium\nMongoDB\t\t\tJest\nJSON Web-tokens\t\tFetch-Mock\nSocket.io\t\t\t\tCircle CI'
type(text, terminal)

let githubClicked = `\n\n\nThanks for checking out my Github!\n\n\n********************************************\n\nIn case you missed them here are some of my favorite projects so far:\n\nhttps://movietracker-turing.herokuapp.com/\n\nhttps://voter-data.herokuapp.com/api/v1/voters\n\nhttps://dbull7.github.io/breakout/`
let github = document.getElementById('github')
github.addEventListener('click', () => {
  terminal.value = ''
  terminal.style.color = '#33FF39'
  type(githubClicked, terminal)
})