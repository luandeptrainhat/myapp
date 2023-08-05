var express = require('express');
var router = express.Router();
var modellichhoc = require('../models/lichhoc');
/* GET home page. */


router.get('/', async function (req, res, next) {
  var data = await modellichhoc.find();
  res.json(data);
});

router.post('/user', async function (req, res, next) {
  try {
    const { id_user } = req.body;
    //tạo model
    // const userFind = { id_user };
    var query = {
      id_user: id_user,
    }

    var data = await modellichhoc.find(query);
    res.json({ status: true, message: "Lấy thành công", data: data });
  }
  catch (error) {
    res.json({ status: false, message: "Lấy thất bại" });
  }
});
// Tìm kiếm lịch học theo ngày cho một người dùng
router.post('/user/find', async function (req, res, next) {
  try {
    const { id_user, ngayHoc } = req.body;

    // Tạo truy vấn để tìm kiếm lịch học
    const query = {
      id_user: id_user,
      ngayHoc: ngayHoc,
    };

    const data = await modellichhoc.find(query);
    res.json({ status: true, message: "Lấy thành công", data: data });
  } catch (error) {
    res.json({ status: false, message: "Lấy thất bại" });
  }
});
module.exports = router;
