const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const questionSchema = new mongoose.Schema({
    cauhoi: String,
    a: String,
    b: String,
    c: String,
    d: String,
    dapan: String
});
const game2 = new mongoose.Schema({
    id: { type: ObjectId },
    customId: String,
    password: String,
    status: Boolean,
    isUsePassword: Boolean,
    startTime: String,
    endTime: String,
    name: String,
    game: [questionSchema],
}, {timestamps: true});
module.exports = mongoose.models.game2 || mongoose.model('game2', game2);
