var express = require('express');
var router = express.Router();
var modellichthi = require('../models/lichthi');
/* GET home page. */


router.get('/', async function (req, res, next) {
    var data = await modellichthi.find();
    res.json(data);
  });
module.exports = router;
