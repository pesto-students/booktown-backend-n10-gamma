import Book from '../models/BookFilters';

export const getBooks = async () => {
    return await Book.find();
};

export const getBook = async (id) => {
    return await Book.findById(id);
};

export const filterBooks = async (query) => {
    return await Book.find({ $and: query });
};
