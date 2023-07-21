var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chi-tiet', function (req, res, next) {
  var data = {
    name: 'Bánh',
    price: '100000',
    cate: 'Orio'
  };
  res.render('product', { data: data });
});

router.get('/chi-tiet-sp', function (req, res, next) {
  var data = {
    name: 'Bánh',
    price: '100000',
    cate: 'Orio'
  };
  res.json(data);
});

var modelProduct = require('../models/product');

//http://localhost:3000/products/list-product
router.get('/', async function (req, res, next) {
  var data = await modelProduct.find();
  res.json(data);
});

//http://localhost:3000/san-pham/detail?id=64ae6f5b661353f19fae6226 lấy tt sản phâm theo id
router.get('/detail', async function (req, res, next) {
  var idSP = req.query.id;
  var data = await modelProduct.findById(idSP);
  res.json(data);
});

//http://localhost:3000/san-pham/detail-find?name=orio lấy tt sản phâm theo id
router.get('/detail-find', async function (req, res, next) {
  // var idSP = req.query.id;
  var nameSP = req.query.name;
  var data = await modelProduct.find({ name: nameSP }, 'name prices');
  res.json(data);
});

//lấy ds sản phẩm có giá trị từ 6000 - 10000
router.get('/detail-find-price', async function (req, res, next) {

  var query = {
    prices: {
      $gte: 1000,
      $lte: 6000
    }
  };
  var data = await modelProduct.find(query).sort({ prices: 1 }).limit(2);
  res.json(data);
});

// thêm sản phẩm mới
router.post('/add', async function (req, res, next) {
  try {
    const { name, prices, idCate } = req.body;
    //tạo model
    const productInsert = { name, prices, idCate };

    await modelProduct.create(productInsert);
    res.json({ status: true, message: 'Thêm sản phẩm thành công' });

  }
  catch (error) {
    res.json({ status: false, message: "Thêm thất bại" });
  }
});
///sửa sản phẩm
router.post('/edit', async function (req, res, next) {
  try {
    const { id, name, prices, idCate } = req.body;
    var item = await modelProduct.findById(id);
    if (item) {
      item.name = name ? name : item.name;
      item.prices = prices ? prices : item.prices;
      item.idCate = idCate ? idCate : item.idCate;
      await item.save();
      res.json({ status: true, message: 'Sửa sản phẩm thành công' });
    }
    else {
      res.json({ status: false, message: 'Không tìm thấy sản phẩm' });
    }
  }
  catch (error) {
    res.json({ status: false, message: "Sửa thất bại" });
  }
});
//xóa sản phẩm
router.get('/delete', async function (req, res, next) {
  try {
    var id = req.query.id;
    await modelProduct.findByIdAndDelete(id);
    res.json({ status: true, message: 'Xóa sản phẩm thành công' });
  }
  catch (error) {
    res.json({ status: false, message: "Xóa thất bại" });
  }
});
module.exports = router;
