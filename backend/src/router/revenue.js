const express = require("express");
const router = express.Router();
const middlewareController = require("../app/Controller/MiddlewareConttroler");
const RevenuesController = require("../app/Controller/RevenuesController");
//middlewareController.verifyToken,
router.get("/", RevenuesController.index);

module.exports = router;
