const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const tin_tuc = new Schema({
    id: { type: ObjectId }, 
    title: { type: String },
    content: { type: String },
    date: { type: String }
});
module.exports = mongoose.models.tin_tuc || mongoose.model('tin_tuc', tin_tuc);
// product -----> products