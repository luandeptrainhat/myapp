var express = require('express');
var router = express.Router();
var modelTintuc = require('../models/Tin_tuc');
/* GET home page. */


router.get('/', async function (req, res, next) {
  var data = await modelTintuc.find();
  res.json({data:data});
});
module.exports = router;
