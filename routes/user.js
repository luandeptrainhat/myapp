var express = require('express');
var router = express.Router();
var modelUser = require('../models/user');
/* GET home page. */


router.get('/', async function (req, res, next) {
  var data = await modelUser.find();
  res.json(data);
});
router.post('/register', async function (req, res, next) {

  try {
    const { username, password } = req.body;
    //tạo model
    const userInsert = { username, password };
    await modelUser.create(userInsert);
    res.json({ status: true, message: 'Thêm user thành công' });

  }
  catch (error) {
    res.json({ status: false, message: "Thêm thất bại" });
  }
});
// router.post('/login', async function (req, res, next) {
//   try {
//     const { username, password } = req.body;
//     //tạo model
//     const userFind = { username, password };
//     var query = {
//       username: username,
//       password: password
//     }
//     var data = modelUser.find(query);
//     res.json({ status: true, message: "Đăng nhập thành công", data: data });

//   }
//   catch (error) {
//     res.json({ status: false, message: "Đăng nhập thất bại" });
//   }
// });
router.post('/login', async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await modelUser.findOne({ username, password });
    if (!user) {
      res.status(401).json({ status: false, message: "Đăng nhập thất bại" });
      return;
    }
    res.status(200).json({ status: true, message: "Đăng nhập thành công", data: user  });
  }
  catch (error) {
    res.status(500).json({ status: false, message: "Đã xảy ra lỗi" });
  }
});
module.exports = router;