var express = require('express');
var router = express.Router();
var modelgame = require('../models/game');
router.get('/', async function (req, res, next) {
    var data = await modelgame.find();
    res.json(data);
  });
module.exports = router;