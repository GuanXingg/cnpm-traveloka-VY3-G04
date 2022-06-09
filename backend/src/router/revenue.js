const express = require('express');
const router = express.Router();
const middlewareController = require('../app/Controller/MiddlewareConttroler');
const RevenuesController = require('../app/Controller/RevenuesController');

router.get('/detailCusBook', RevenuesController.detailCusBook);
router.get('/chart', RevenuesController.chart);
router.get('/customer', RevenuesController.customer);
module.exports = router;
