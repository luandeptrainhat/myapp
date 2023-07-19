const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const lichhoc = new Schema({
    id: { type: ObjectId }, 
    idMon: { type: String },
    ca: { type: String },
    diaDiem: { type: String },
    id_user: {type: ObjectId },
    ngayHoc: { type: String },
});
module.exports = mongoose.models.lichhoc || mongoose.model('lichhoc', lichhoc);
// product -----> products