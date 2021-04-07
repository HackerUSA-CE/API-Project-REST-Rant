// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
const places = express.Router()
const Place = require('../models/place.js')

places.get('/', (req, res) => {
  Place.find({}, (error, allPlaces)=> {
    if (error) {
      console.log(error)
    }
    res.render('places/index.jsx', {
      places: allPlaces
    })
  })

})

module.exports = places
