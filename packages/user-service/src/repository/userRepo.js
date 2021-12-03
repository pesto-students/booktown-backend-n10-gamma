import User from '../models/user';

export const getUser = async (id) => {
    const user = await User.findById(id);
    return user;
};

export const getUsers = async () => {
    const users = await User.find();
    return users;
};
export const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

export const createUser = async (user) => {
    const newUser = new User(user);
    const savedUser = await newUser.save();
    return savedUser;
};

export const updateUser = async (id, user) => {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    return updatedUser;
};

export const deleteUser = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
};
