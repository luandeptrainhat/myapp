var express = require('express');
var router = express.Router();
var modelcard = require('../models/card');

/* GET home page. */
router.get('/', async function (req, res, next) {
    var data = await modelcard.find();
    res.json({data : data});
    }
);

//lấy tt card theo id_user
router.post('/user', async function (req, res, next) {

    try {
      const { id_user } = req.body;
      //tạo model
      var query = {
        id_user: id_user,
      }
      var data= await modelcard.find(query);
      res.json({status: true, message:"Lấy thành công",data:data}); 
    }
    catch (error) {
      res.json({ status: false, message: "Lấy thất bại" });
    }
  });

module.exports = router;
