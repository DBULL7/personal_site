const express = require('express')
const r = express.Router()
const path = require('path')
module.exports = r


r.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../public/about/index.html')))
r.get('/projects', (req, res) => res.sendFile(path.join(__dirname, '../public/projects/index.html')))
r.get('/contact', (req, res) => res.sendFile(path.join(__dirname, '../public/contact/index.html')))
r.get('/games', (req, res) => res.sendFile(path.join(__dirname, '../public/games/index.html')))
r.get('/games/breakout', (req, res) => res.sendFile(path.join(__dirname, '../public/games/breakout/index.html')))
r.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home/index.html')))