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

// // Route để thêm câu hỏi vào game dựa trên customId
// router.post('/addQuestion/:customId', async (req, res) => {
//   try {
//     const customId = req.params.customId; // Lấy customId từ URL

//     // Tìm game dựa trên customId
//     const game = await Game2.findOne({ customId });

//     if (!game) {
//       return res.status(404).json({ message: 'Không tìm thấy game với customId này' });
//     }

//     // Lấy thông tin câu hỏi từ request body
//     const { cauhoi, a, b, c, d, dapan } = req.body;

//     // Tạo câu hỏi mới
//     const newQuestion = {
//       cauhoi,
//       a,
//       b,
//       c,
//       d,
//       dapan,
//     };

//     // Thêm câu hỏi vào game
//     game.game.push(newQuestion);

//     // Lưu lại game sau khi đã thêm câu hỏi
//     const updatedGame = await game.save();

//     res.status(200).json({ message: 'Thêm câu hỏi thành công', game: updatedGame });
//   } catch (error) {
//     console.error('Lỗi khi thêm câu hỏi:', error);
//     res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm câu hỏi' });
//   }
// });
// Route để thêm câu hỏi vào game dựa trên customId
router.post('/addQuestion/:customId', async (req, res) => {
  try {
    const customId = req.params.customId; // Lấy customId từ URL

    // Tìm game dựa trên customId
    let game = await Game2.findOne({ customId });

    // Nếu không tìm thấy game, tạo mới
    if (!game) {
      game = new Game2({ customId });
    }

    // Lấy thông tin câu hỏi từ request body
    const { cauhoi, a, b, c, d, dapan } = req.body;

    // Tạo câu hỏi mới
    const newQuestion = {
      cauhoi,
      a,
      b,
      c,
      d,
      dapan,
    };

    // Thêm câu hỏi vào game
    game.game.push(newQuestion);

    // Lưu lại game sau khi đã thêm câu hỏi
    const updatedGame = await game.save();

    res.status(200).json({ message: 'Thêm câu hỏi thành công', game: updatedGame });
  } catch (error) {
    console.error('Lỗi khi thêm câu hỏi:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi thêm câu hỏi' });
  }
});

module.exports = router;
