var express = require('express');
var router = express.Router();
var modelPlayed = require('../models/played');

router.get('/', async function (req, res, next) {
  var data = await modelPlayed.find();
  res.json(data);
});

// lọc theo game id
router.get('/game_id', async function (req, res, next) {
  try {
    var game_id = req.query.game_id;
    var data = await modelPlayed.find({ game_id: game_id });
    res.json(data);

  } catch (error) {
    res.json({ status: false, message: "Lọc thất bại" });
  }
});

router.post('/lay-diem', async function (req, res, next) {

  try {
    const { id_user, game_id, diem } = req.body;
    //tạo model
    const PlayedInsert = { id_user, game_id, diem };
    await modelPlayed.create(PlayedInsert);
    res.json({ status: true, message: 'Thêm user thành công' });

  }
  catch (error) {
    res.json({ status: false, message: "Thêm thất bại" });
  }
});
module.exports = router;