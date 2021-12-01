import User from '../models/User';
/**
 *
 * @param {*} id
 * @returns
 */
export const getUser = async (id) => {
    return await User.findById(id);
};

/**
 *
 * @param {String} email
 * @returns
 */
export const getUserByEmail = async (email) => {
    return await User.findOne({ email: email });
};

/**
 *
 * @param {*} userObj
 * @returns
 */
export const saveUser = async (userObj) => {
    const user = new User(userObj);
    return await user.save();
};

/**
 *
 * @param {String} id
 * @param {*} user
 * @returns
 */
export const updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
};

/**
 *
 * @param {String} id
 * @returns
 */
export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

/**
 *
 * @returns
 */
export const getUsers = async () => {
    return await User.find();
};
