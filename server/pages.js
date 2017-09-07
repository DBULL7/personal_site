const express = require('express')
const r = express.Router()
const path = require('path')
module.exports = r

r.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../public/about/index.html')))
r.get('/breakout', (req, res) => res.sendFile(path.join(__dirname, '../public/breakout/index.html')))
r.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home/index.html')))