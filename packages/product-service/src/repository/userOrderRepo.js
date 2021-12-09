import orderHistory from '../models/orderHistory';

export const getUserHistory = async (uid) => {
    const orderHistoryData = await orderHistory
        .find({ uid })
        .sort({ createDate: -1 });
    return orderHistoryData;
};

export const addOrderHistory = async (orderHistoryData) => {
    const newOrderHistory = new orderHistory(orderHistoryData);
    const saveOrderHistory = await newOrderHistory.save();
    return saveOrderHistory;
};

export const getOrderHistoryById = async (id) => {
    //sort order history by creation date
    const orderHistoryData = await orderHistory.findById(id);

    return orderHistoryData;
};
