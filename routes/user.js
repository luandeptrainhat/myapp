var express = require('express');
var router = express.Router();
var modelUser = require('../models/user');
/* GET home page. */


router.get('/', async function (req, res, next) {
    var data = await modelUser.find();
    res.json(data);
  });
module.exports = router;