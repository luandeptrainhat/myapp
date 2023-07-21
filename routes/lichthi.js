var express = require('express');
var router = express.Router();
var modellichthi = require('../models/lichthi');
/* GET home page. */


router.get('/', async function (req, res, next) {
  var id_user = req.query.id_user;
  var data = await modellichthi.findById(id_user);
  res.json(data);
});

router.get('/user', async function (req, res, next) {

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


module.exports = router;
