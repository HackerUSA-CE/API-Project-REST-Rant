require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))

app.listen(process.env.PORT)