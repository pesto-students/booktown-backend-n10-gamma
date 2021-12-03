import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema(
    {
        id: {
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
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
        },
    },
    { _id: false }
);

export default Mongoose.model('Users', UserSchema);
