var express = require('express');
var router = express.Router();

var timeStampController = require('../controllers/timeStampController');

router.get('/:time?', timeStampController.timeStamp);

module.exports = router;