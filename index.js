// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
     console.log('connected to mongo: ', process.env.MONGO_URI)
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

// Places
const placesController = require('./controllers/places.js')
app.use('/places', placesController)

// 404
app.get('*', (req, res) => {
  res.render('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log(PORT)
})
