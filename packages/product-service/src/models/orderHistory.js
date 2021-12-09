import mongoose from 'mongoose';

const OrderHistory = new mongoose.Schema({
    orderId: {
        type: String,
    },
    orderStatus: {
        type: String,
    },
    orderDate: {
        type: String,
    },
    orderAmount: {
        type: Number,
    },
    orderItems: {
        type: Array,
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
            zipCode: {
                type: 'Number',
            },
            address: {
                type: 'String',
            },
        },
    },
    orderPaymentStatus: {
        type: String,
    },
    orderPaymentMethod: {
        type: String,
    },
    uid: {
        type: String,
    },
    orderDiscount: {
        type: Number,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model('OrderHistory', OrderHistory, 'orderHistory');
