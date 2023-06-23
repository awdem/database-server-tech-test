var express = require('express');
var router = express.Router();
const KeyController = require('../controllers/keyController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'OK'});
});

router.post('/set', KeyController.storePair);

module.exports = router;
