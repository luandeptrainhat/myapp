const express = require('express');
const router = express.Router();
const Game2 = require('../models/game2'); // Đường dẫn đến mô hình game2


// Route để tạo một tài liệu mới
router.post('/', async (req, res) => {
  try {
    const gameData = req.body; // Lấy dữ liệu từ request body
    const game = new Game2(gameData);
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình tạo game' });
  }
});

// Route để lấy tất cả các tài liệu game
router.get('/getAll', async (req, res) => {
  try {
    const games = await Game2.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình lấy danh sách games' });
  }
});

// Route để lấy một game dựa trên customId
router.get('/:customId', async (req, res) => {
  const customId = req.params.customId;
  try {
    const game = await Game2.findOne({ customId });
    if (!game) {
      res.status(404).json({ error: 'Game không tồn tại' });
    } else {
      res.json(game);
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình lấy thông tin game' });
  }
});

// Route để cập nhật một game dựa trên customId
router.put('/:customId', async (req, res) => {
  const customId = req.params.customId;
  const updatedGameData = req.body;
  try {
    const updatedGame = await Game2.findOneAndUpdate(
      { customId },
      updatedGameData,
      { new: true }
    );
    if (!updatedGame) {
      res.status(404).json({ error: 'Game không tồn tại' });
    } else {
      res.json(updatedGame);
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình cập nhật game' });
  }
});

// Route để xóa một game dựa trên customId
router.delete('/:customId', async (req, res) => {
  const customId = req.params.customId;
  try {
    const deletedGame = await Game2.findOneAndRemove({ customId });
    if (!deletedGame) {
      res.status(404).json({ error: 'Game không tồn tại' });
    } else {
      res.json({ message: 'Game đã được xóa' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi trong quá trình xóa game' });
  }
});

module.exports = router;
