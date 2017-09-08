let express = require('express')
let app = express()
let port = (process.env.PORT || 3000)
let path = require('path')
let bodyParser = require('body-parser')
let compression = require('compression')
let helmet = require('helmet')


app.use(bodyParser.json())
app.use(compression())
app.use(helmet())


const routes = require('./routes')
const pages = require('./pages')

// let age = 86400000
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('public', {maxAge: age} ))
// } else {
//   app.use(express.static('public'))
// }
app.use('/api/v1', routes)
app.use('/', pages)
app.use(express.static('public'))
app.get('/resume', (req, res) => {
  res.download('./DevonBullResume.pdf', 'DevonBullResume.pdf');
})

app.listen(port, () => {
  process.stdout.write('\033c')
  console.log('Listening at port 3000')
})