const React = require('react')
const express = require('express');
const { Router } = require('express');
const res = require('express/lib/response');
const app = express();
//const places = require('../models/places.js')
const router = require('express').Router()


app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]

    res.render('places/index', { places })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


// New Place
app.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = app
