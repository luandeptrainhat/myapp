var express = require('express');
var router = express.Router();
var modelTintucap = require('../models/tin_tucap');
/* GET home page. */


router.get('/', async function (req, res, next) {
    var data = await modelTintucap.find();
    res.json({data});
  });
  
module.exports = router;
