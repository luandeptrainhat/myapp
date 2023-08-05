var express = require('express');
var router = express.Router();
var modellichthi = require('../models/lichthi');
/* GET home page. */


router.get('/', async function (req, res, next) {
  // var id_user = req.query.id_user;
  var data = await modellichthi.find();
  res.json({data : data});
});

router.post('/user', async function (req, res, next) {

  try {
    const { id_user } = req.body;
    //tạo model
    const userFind = { id_user };
    var query = {
      id_user: id_user,
    }
    
    var data= await modellichthi.find(query);
    res.json({status: true, message:"Lấy thành công",data:data}); 
  }
  catch (error) {
    res.json({ status: false, message: "Lấy thất bại" });
  }
});
  // Tìm kiếm lịch thi theo ngày cho một người dùng
  router.post('/user/find', async function (req, res, next) {
    try {
      const { id_user, ngayThi } = req.body;
  
      // Tạo truy vấn để tìm kiếm lịch học
      const query = {
        id_user: id_user,
        ngayThi: ngayThi,
      };
  
      const data = await modellichthi.find(query);
      res.json({ status: true, message: "Lấy thành công", data: data });
    } catch (error) {
      res.json({ status: false, message: "Lấy thất bại" });
    }
  });

module.exports = router;
