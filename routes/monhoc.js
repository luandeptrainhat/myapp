var express = require('express');
var router = express.Router();
var modelMonhoc = require('../models/monhoc');
/* GET home page. */


router.get('/', async function (req, res, next) {
    var data = await modelMonhoc.find();
    res.json(data);
  });
module.exports = router;
