var express = require('express');
var router = express.Router();
var modellichhoc = require('../models/lichhoc');
/* GET home page. */


router.get('/', async function (req, res, next) {
    var data = await modellichhoc.find();
    res.json(data);
  });
module.exports = router;
