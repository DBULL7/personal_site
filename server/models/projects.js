const projects = (req, res) => {
  allProjects.forEach(project => {
    if (project.name === req.body.project) {
      let num = allProjects.indexOf(project)
      let result = allProjects[num]
      res.json({project: result})
    }
  })
  // let result = allProjects.name === req.body.project 
}

module.exports = {
  projects: projects
}

let allProjects = [
  { name: "movie-tracker", description: 'See the latest movies and favorite ones you want to see.', technologies: ['Javascript', 'React', 'Redux', 'React Router'], webp: '../assets/img/md/movie-tracker.webp', jpg: '../assets/jpg-md/movie-tracker.jpg'},
  { name: 'voter-data', description: '56k Public Voter Records of Colorado', technologies: ['MongoDB', 'Javascript', 'Express', 'CircleCI'], webp: '../assets/img/md/voter-data.webp', jpg: "../assets/jpg-md/voterdata.jpg"},
  { name: 'weathrly', description: 'Get current weather for your location or a 7 day forecast', technologies: ['React', 'Webpack', 'Enzyme'], webp: '../assets/img/md/weathrly.webp', jpg: '../assets/jpg-md/weathrly.jpg'},
  { name: 'code-sport', description: 'Real time code challenges against other users', technologies: ['MongoDB', 'Postgres', 'React', 'Redux', 'React-Router', 'Socket.IO'], webp: '../assets/img/md/codesport.webp', jpg: '../assets/jpg-md/codesport.jpg'},
  { name: '2DoBox', description: 'Small project to sort data from local storage', technologies: ['Selenium', 'jQuery'], webp: '../assets/img/md/2DoBox.webp', jpg: '../assets/jpg-md/2dobox.jpg'},
  { name: 'jetfuel', description: 'Place to store links.', technologies: ['jQuery', 'Express', 'Mocha', 'Postgres'], webp: '../assets/img/md/jetfuel.webp', jpg: '../assets/jpg-md/jetfuel.jpg'},
  { name: 'breakout', description: 'Atari Replica Game', technologies: ['Javascript', 'Canvas'], webp: '../assets/breakout-md.webp', jpg: '../assets/breakout-md.jpg'},
  { name: 'Static Comp 3', description: 'Static Comp 3', technologies: ['Flexbox', 'CSS'], webp: '../assets/img/md/static-comp3.webp', jpg: '../assets/jpg-md/static_comp3.jpg'}
]