const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const card = new Schema({
    id: { type: ObjectId }, 
    name: { type: String },
    majors: { type: String },
    mssv: { type: String },
    worth_to: {type: String },
    img: { type: String },
    id_user: { type: ObjectId }
});
module.exports = mongoose.models.card || mongoose.model('card', card);
// product -----> products