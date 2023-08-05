const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const tin_tucap = new Schema({
    id: { type: ObjectId }, 
    title: { type: String },
    content: { type: String },
    date: { type: String },
    link : {type: String}
});
module.exports = mongoose.models.tin_tucap || mongoose.model('tin_tucap', tin_tucap);
// product -----> products