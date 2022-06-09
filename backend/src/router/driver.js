const express = require('express');
const router = express.Router();
const DriversController = require('../app/Controller/DriversController');

router.get('/getalldriver', DriversController.getAllDriver);
router.post('/createdriver', DriversController.createDriver);
router.put('/updatedriver/:id', DriversController.updateDriver);
router.delete('/deletedriver/:id', DriversController.deleteDriver);

module.exports = router;
