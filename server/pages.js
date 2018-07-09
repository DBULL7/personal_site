const express = require('express')
const r = express.Router()
const path = require('path')
module.exports = r


r.get('/about', (req, res) => res.sendFile(path.join(__dirname, '../public/views/about.html')))
r.get('/projects', (req, res) => res.sendFile(path.join(__dirname, '../public/views/projects.html')))
r.get('/contact', (req, res) => res.sendFile(path.join(__dirname, '../public/views/contact.html')))
r.get('/games', (req, res) => res.sendFile(path.join(__dirname, '../public/views/games.html')))
r.get('/games/breakout', (req, res) => res.sendFile(path.join(__dirname, '../public/views/breakout.html')))
r.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/views/index.html')))