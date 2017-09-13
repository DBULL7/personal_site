const express = require('express')
const r = express.Router() 
module.exports = r
let email = require('./models/email')
let projects = require('./models/projects')

r.post('/email', email.msg)
r.post('/projects', projects.projects)