var express = require('express');
var router = express.Router();
const User = require("../models/User");
const controller = require("../controllers/users.controller");

/* GET users listing. */
router.get('/', controller.getUsers);
router.post('/', controller.postUsers);

module.exports = router;






