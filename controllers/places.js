const React = require('react')
const express = require('express');
const { Router } = require('express');
const res = require('express/lib/response');
const app = express();
const places = require('../models/places.js')
const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
  db.Place.find()
      .then((places) => {
          res.render('places/index', { places })
      })
      .catch(err => {
          res.render('error404')
      })
})

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

// New Place
router.get('/new', (req, res) => {
  res.render('places/new')
})

// Show Route
router.get('/:id', (req, res) => {
  db.Place.findOne({ _id: req.params.id })
  .populate('comments')
      .then(place => {
        console.log(place.comments)
          res.render('places/show', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})

//Single route
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          res.render('error404')
      })
})

// Edit Route
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
})

//Delete Route
router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }  
  else {
    places.splice(id, 1)
    res.send('DELETE /places/:id stub')
  }
})

// Comment route
router.post("/:id/comment", (req, res) => {
  if (req.body.rant) {
    req.body.rant = true;
  } else {
    req.body.rant = false;
  }
  db.Place.findById(req.params.id)
    .then((place) => {
      console.log(db.Comment);
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

//RANT route
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// Delete Rant
router.delete('/:id/rant/rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
