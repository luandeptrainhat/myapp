var express = require('express');
var router = express.Router();
var modelPlayed = require('../models/played');

router.get('/', async function (req, res, next) {
    var data = await modelPlayed.find();
    res.json(data);
});

// Route để lọc dữ liệu theo game_id
router.get('/find-by-game-id/:gameId', async (req, res) => {
  const gameId = req.params.gameId;

  try {
    // Sử dụng Mongoose để tìm dữ liệu dựa trên game_id
    const data = await Played.find({ game_id: gameId });

    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy dữ liệu cho game_id này' });
    }

    res.json(data);
  } catch (error) {
    console.error('Lỗi trong quá trình xử lý yêu cầu:', error);
    res.status(500).json({ message: 'Lỗi trong quá trình xử lý yêu cầu' });
  }
});


router.post('/lay-diem', async function (req, res, next) {

    try {
      const { id_user, game_id,diem } = req.body;
      //tạo model
      const PlayedInsert = { id_user, game_id,diem};
      await modelPlayed.create(PlayedInsert);
      res.json({ status: true, message: 'Thêm user thành công' });
  
    }
    catch (error) {
      res.json({ status: false, message: "Thêm thất bại" });
    }
  });
module.exports = router;