import { HTTP_STATUS_CODE, isSignIn } from '../config/appConst';
import * as OrderRepo from '../repository/userOrderRepo';
/**
 *
 */
export default class UserOrderController {
    constructor() {}
    resolvers() {
        return {
            Query: {
                getUserHistory: {
                    resolver: this.getUserHistory,
                    authorizer: isSignIn,
                },
            },
            Mutation: {
                addOrderHistory: {
                    resolver: this.addOrderHistory,
                    authorizer: isSignIn,
                },
            },
        };
    }

    async getUserHistory(root, args, context) {
        const { uid } = context?.user || {};
        if (!uid) throw new Error('User not found');
        try {
            const orderHistory = await OrderRepo.getUserHistory(uid);
            if (!orderHistory) {
                return {
                    status: HTTP_STATUS_CODE.NOT_FOUND.code,
                    message: 'No order history found',
                    data: {},
                };
            }

            return {
                status: HTTP_STATUS_CODE.OK.code,
                message: 'User order history found',
                data: orderHistory,
            };
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                message: err.message,
                data: {},
            };
        }
    }

    async addOrderHistory(root, args, context) {
        //perform incoming requesy payload validation here
        const payload = args.payload;
        try {
            const orderHistory = await OrderRepo.addOrderHistory(payload);
            return {
                status: HTTP_STATUS_CODE.OK.code,
                message: 'Order history added successfully',
                data: orderHistory,
            };
        } catch (err) {
            console.log(err);
            return {
                status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                message: err.message,
                data: {},
            };
        }
    }
}
