// https://mongoosejs.com/docs/guide.html
const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  cuisines: String,
  pic: String
}, {timestamps: true})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
