var express = require('express');
var router = express.Router();
const Cleaner = require("../models/Cleaner");
const controller = require("../controllers/cleaners.controller");
var multer = require('multer');
var multer = multer({dest: './public/uploads/'});

/* GET users listing. */
router.get('/', controller.getCleaners);
router.post('/', controller.postCleaners);
// router.post('new', upload.single("file"), controller.postcleaners);

module.exports = router;