const React = require('react')
const express = require('express');
const { Router } = require('express');
const res = require('express/lib/response');
const app = express();
const places = require('../models/places.js')
const router = require('express').Router()


app.get('/', (req, res) => {
    res.render('places/index', { places })
})

app.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// New Place
app.get('/new', (req, res) => {
  res.render('places/new')
})

//Show Route
app.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]){
    res.render('error404')
  }  
  else {
    res.render('places/show', { place: places[id]})
  }
})

module.exports = app
