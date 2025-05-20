const bookService = require('../services/bookService');

exports.createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    try {
        const book = await bookService.getBookById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req.params.id, req.body);
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const message = await bookService.deleteBook(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};