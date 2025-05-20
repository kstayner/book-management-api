const Book = require('../models/Book');

const validateBookData = (bookData) => {
    if (bookData.publishedYear > new Date().getFullYear()) {
        throw new Error('Published year cannot be in the future.');
    }
};

exports.createBook = async (bookData) => {
    validateBookData(bookData);
    const book = new Book(bookData);
    return await book.save();
};

exports.getAllBooks = async () => {
    return await Book.find();
};

exports.getBookById = async (bookId) => {
    const book = await Book.findById(bookId);
    if (!book) throw new Error('Book not found');
    return book;
};

exports.updateBook = async (bookId, updateData) => {
    validateBookData(updateData);
    const book = await Book.findByIdAndUpdate(bookId, updateData, { new: true, runValidators: true });
    if (!book) throw new Error('Book not found');
    return book;
};

exports.deleteBook = async (bookId) => {
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) throw new Error('Book not found');
    return { message: 'Book deleted successfully' };
};