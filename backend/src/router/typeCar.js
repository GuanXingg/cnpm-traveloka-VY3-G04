const express = require('express')
const router = express.Router()
const TypeCarsController = require('../app/Controller/TypeCarsController')

router.get('/getalltype', TypeCarsController.getAllType);
router.get('/createType', TypeCarsController.createType);

module.exports = router