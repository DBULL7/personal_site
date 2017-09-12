const express = require('express')
const r = express.Router() 
module.exports = r
let email = require('./models/email')

r.post('/email', email.msg)