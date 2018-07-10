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


app.use('/', routes)
app.use(express.static('public'))
app.use(express.static('dist'))


app.get('/resume', (req, res) => {
  res.download('./DevonBullResume.pdf', 'DevonBullResume.pdf');
})

app.listen(port, () => {
  process.stdout.write('\033c')
  console.log('Listening at port 3000')
})