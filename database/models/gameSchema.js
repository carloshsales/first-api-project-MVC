const { Schema, model } = require('mongoose');

const GameSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true },
    gen: { type: String, required: true },
    mode: { type: String, required: true },
    release: { type: Number, required: true },
    platform: { type: String, required: true },
    developer: { type: String, required: true },
    publisher: { type: String, required: true },
    createAt: { type: Date, default: Date.now() },
});

const Games = model('Games', GameSchema);

module.exports = Games;
