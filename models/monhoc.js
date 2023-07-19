const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mon_hoc = new Schema({
    id: { type: ObjectId }, 
    tenMon: { type: String },
    GV_dunglop: { type: String },
    loaiMon: { type: String }
});
module.exports = mongoose.models.mon_hoc || mongoose.model('mon_hoc', mon_hoc);
// product -----> products