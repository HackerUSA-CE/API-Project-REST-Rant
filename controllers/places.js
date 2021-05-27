const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }

    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    res.render('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


module.exports = router