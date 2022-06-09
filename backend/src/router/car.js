const express = require('express');
const router = express.Router();
const CarsController = require('../app/Controller/CarsController');

router.get('/getallcar', CarsController.getAllCar);
router.delete('/deleteCar/:id', CarsController.deleteCar);
router.post('/createCar', CarsController.createCar);
router.put('/updateCar/:id', CarsController.updateCar);

module.exports = router;
