const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const played = new Schema({
    id: { type: ObjectId },
    id_user: { type: String },
    game_id: { type: String },
    diem: { type: String },
});
module.exports = mongoose.models.played || mongoose.model('played', played);