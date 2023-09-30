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
const game2 = new mongoose.Schema({
    id: { type: ObjectId },
    customId: String,
    game: [questionSchema],
});
module.exports = mongoose.models.game2 || mongoose.model('game2', game2);
