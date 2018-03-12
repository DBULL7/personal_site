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
  { name: 'Denver_Advisory_Board', description: 'Website for Denver Advisory Board', technologies: ['Javascript', 'React', 'Redux', 'Express', 'Passport.js', 'Mongoose', 'MongoDB'], webp: '../assets/img/md/dab.webp', jpg: '../assets/jpg/dab.jpg', github: 'https://github.com/DBULL7/Denver_Advisory_Board', site: 'https://denver-ab.herokuapp.com'},
  { name: 'uhoops', description: 'LinkedIn style social network for basketball players', technologies: ['Javascript', 'React', 'Redux', 'Express', 'MongoDB'], webp: '../assets/img/md/uhoops.webp', jpg: '../assets/jpg/uhoops.jpg', github: 'https://github.com/DBULL7/uhoops', site: 'https://uhoops.herokuapp.com'},
  { name: 'unavee', description: 'Search for people by email to get their social media profiles', technologies: ['Javascript', 'React', 'Redux', 'Postgres' ], webp: '../assets/img/md/unavee.webp', jpg: '../assets/jpg/unavee.jpg', github: 'https://github.com/DBULL7/unavee', site: 'https://unavee.herokuapp.com'},
  { name: "movie-tracker", description: 'See the latest movies and favorite ones you want to see.', technologies: ['Javascript', 'React', 'Redux', 'React Router'], webp: '../assets/img/large/movie-tracker.webp', jpg: '../assets/jpg/movie-tracker.png', github: 'https://github.com/DBULL7/movie_tracker', site: 'https://movietracker-turing.herokuapp.com/'},
  { name: 'voter-data', description: '56k Public Voter Records of Colorado', technologies: ['MongoDB', 'Javascript', 'Express', 'CircleCI'], webp: '../assets/img/large/voter-data.webp', jpg: "../assets/jpg-md/voterdata.jpg", github: 'https://github.com/DBULL7/VoterData', site: 'https://voter-data.herokuapp.com/api/v1/voters'},
  { name: 'weathrly', description: 'Get current weather for your location or a 7 day forecast', technologies: ['React', 'Webpack', 'Enzyme'], webp: '../assets/img/large/weathrly.webp', jpg: '../assets/jpg/weathrly.png', github: 'https://github.com/DBULL7/weathrly', site: 'https://weathrly-dbull.herokuapp.com/'},
  { name: 'code-sport', description: 'Real time code challenges against other users', technologies: ['MongoDB', 'Postgres', 'React', 'Redux', 'React-Router', 'Socket.IO'], webp: '../assets/img/large/codesport.webp', jpg: '../assets/jpg/codesport.png', github: 'https://github.com/DBULL7/CodeSport', site: 'https://sleepy-anchorage-74386.herokuapp.com/'},
  { name: '2DoBox', description: 'Small project to sort data from local storage', technologies: ['Selenium', 'jQuery'], webp: '../assets/img/large/2DoBox.webp', jpg: '../assets/jpg/2DoBox.png', github: 'https://github.com/DBULL7/2DoBox-pivot', site: 'https://dbull7.github.io/2DoBox-pivot/'},
  { name: 'jetfuel', description: 'Place to store links.', technologies: ['jQuery', 'Express', 'Mocha', 'Postgres'], webp: '../assets/img/large/jetfuel.webp', jpg: '../assets/jpg/jetfuel.png', github: 'https://github.com/DBULL7/jetFuel', site: 'http://a.shrtee.co'},
  { name: 'breakout', description: 'Atari Replica Game', technologies: ['Javascript', 'Canvas'], webp: '../assets/breakout-md.webp', jpg: '../assets/breakout-md.jpg', github: 'https://github.com/DBULL7/breakout', site: '/games/breakout'},
  { name: 'Static Comp 3', description: 'Static Comp 3', technologies: ['Flexbox', 'CSS'], webp: '../assets/img/large/static-comp3.webp', jpg: '../assets/jpg/static_comp3.png', github: 'https://github.com/DBULL7/db-comp-challenge-3', site: 'https://dbull7.github.io/db-comp-challenge-3/'}
]