require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world home page')
})

app.use('/places', require('./controllers/places'))

app.listen(process.env.PORT)