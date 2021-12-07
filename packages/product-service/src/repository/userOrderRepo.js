import orderHistory from '../models/orderHistory';

export const getOrderHistory = async (uid) => {
    const orderHistoryData = await orderHistory.find({ uid });
    return orderHistoryData;
};

export const addOrderHistory = async (orderHistoryData) => {
    const newOrderHistory = new orderHistory(orderHistoryData);
    const saveOrderHistory = await newOrderHistory.save();
    return saveOrderHistory;
};

export const getOrderHistoryById = async (id) => {
    const orderHistoryData = await orderHistory.findById(id);
    return orderHistoryData;
};
