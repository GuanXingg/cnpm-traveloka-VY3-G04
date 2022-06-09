const express = require('express')
const router = express.Router()
const booksController = require('../app/Controller/BooksController')


router.post('/createTrip', booksController.createTrip)
router.get('/editTrip/:id', booksController.editTrip)
router.put('/updateTrip/:id', booksController.updateTrip)
router.delete('/deleteTrip/:id', booksController.deleteTrip)
router.get('/getAllTrip', booksController.getAllTrip)

module.exports = router