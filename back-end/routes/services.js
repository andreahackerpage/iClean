var express = require('express');
var router = express.Router();
const Service = require("../models/Order");
const controller = require("../controllers/services.controller");

/* GET users listing. */
router.get('/', controller.getServices);
router.post('/', controller.postServices);
router.get('/:id', controller.getSingleService);
router.patch('/:id', controller.patchOrder);
//router.delete('/:id', controller.deleteService);
//update
module.exports = router;

