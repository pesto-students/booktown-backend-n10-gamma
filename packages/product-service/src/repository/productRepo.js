import Product from '../models/Product';

/**
 *
 * @param {String} id
 * @returns
 */
export const getProductById = async (id) => {
    return await Product.findById(id);
};

/**
 *
 * @returns
 */
export const getProducts = async () => {
    return await Product.find();
};

export const saveProduct = async (product) => {
    const newProduct = new Product(product);
    return await newProduct.save();
};

/**
 *
 * @param {String} id
 * @param {Object} product
 * @returns
 */
export const updateProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product);
};

/**
 *
 * @param {String} id
 * @returns
 */
export const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

/**
 *
 * @param {String} category
 * @returns
 */
export const getProductsByCategory = async (category) => {
    return await Product.find({ category });
};

/**
 *
 * @param {String} name
 * @returns
 */
export const getProductsByName = async (name) => {
    return await Product.find({ name });
};

/**
 *
 * @param {Number} price
 * @returns
 */
export const getProductsByPrice = async (price) => {
    return await Product.find({ price });
};

/**
 *
 * @param {String} description
 * @returns
 */
export const getProductsByDescription = async (description) => {
    return await Product.find({ description });
};
