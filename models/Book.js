const mongoose = require('../config/db');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);