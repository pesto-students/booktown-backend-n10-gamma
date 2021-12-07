import { HTTP_STATUS_CODE, isPublic, isSignIn } from '../config/appConst';
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
                    authorizer: isPublic,
                },
            },
        };
    }

    async getUserHistory(root, args, context) {
        // const { uid } = context?.user || {};
        // if (!uid) throw new Error('User not found');
        // const { page, limit } = args;
        // const userHistory = await userRepo.getUserHistory(userId, page, limit);
        // return userHistory;
        return {};
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
