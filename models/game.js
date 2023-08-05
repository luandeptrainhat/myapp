const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const questionSchema = new mongoose.Schema({
    cauhoi: String,
    a: String,
    b: String,
    c: String,
    d: String,
    dapan: String,
});
const game = new mongoose.Schema({
    id: { type: ObjectId },
    game: [questionSchema],
});
module.exports = mongoose.models.game || mongoose.model('game', game);