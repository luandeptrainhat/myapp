const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const lichthi = new Schema({
    id: { type: ObjectId }, 
    ngayThi: { type: String },
    idMon: { type: ObjectId},
    diaDiem: { type: String },
    id_user: {type: ObjectId },
    ca: { type: String },
});
module.exports = mongoose.models.lichthi || mongoose.model('lichthi', lichthi);
// product -----> products