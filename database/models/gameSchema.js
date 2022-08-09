const mongoose = require('mongoose');

const { Schema } = mongoose;

const palletSchema = new Schem({
    id: { type: String, required: true },
    name: { type: String, required: true },
    gen: { type: String, required: true },
    mode: { type: String, required: true },
    release: { type: Number, required: true },
    platform: { type: String, required: true },
    developer: { type: String, required: true },
    publisher: { type: String, required: true },
    createAt: { type: Date, default: Date.now() },
});
