import Book from '../models/BookFilters';

export const getBooks = async (page, limit) => {
    return await Book.find()
        .skip((page - 1) * limit)
        .limit(limit);
};

export const getBook = async (id) => {
    return await Book.findById(id);
};

export const filterBooks = async (query) => {
    return Book.find({
        $and: query,
    });
};

export const getBooksCount = async () => {
    return await Book.countDocuments();
};

export const searchBooks = async (query) => {
    return await Book.find({ $text: { $search: query } });
};
