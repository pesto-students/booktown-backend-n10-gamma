import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
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
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: Array,
        },
    },
    {
        _id: false,
    }
);

export default Mongoose.model('User', UserSchema);
