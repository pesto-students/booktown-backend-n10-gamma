import Mongoose from 'mongoose';

const ProductSchema = new Mongoose.Schema({
    publisher: String,
    title: {
        type: String,
        required: true,
    },

    subTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    originalPrice: {
        type: Number,
    },

    description: {
        type: String,
        required: true,
    },
    files: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
    },
    shippingAddress: {
        type: {
            city: {
                type: 'String',
            },
            state: {
                type: 'String',
            },
            country: {
                type: 'String',
            },
            zipcode: {
                type: 'Number',
            },
            address: {
                type: 'String',
                required: true,
            },
        },
    },
    status: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    published: {
        type: Date,
        default: Date.now,
    },
});

export default Mongoose.model('Products', ProductSchema, 'books');
