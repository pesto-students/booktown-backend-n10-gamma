import { isPublic, HTTP_STATUS_CODE } from '../config/appConst';
import { validate } from '../validation/validate';
import { YUP_VALIDATOR } from '../validation/validationMapping';
import { SIGN_UP } from '../validation/types';
import * as userRepo from '../repository/userRepo';
/**
 *
 */
export default class UserController {
    constructor() {}
    resolvers() {
        return {
            Query: {},
            Mutation: {
                createUser: {
                    resolver: this.createUser,
                    authorizer: isPublic,
                },
            },
        };
    }

    async createUser(root, args, context) {
        const validation = await validate(YUP_VALIDATOR)(args.payload, SIGN_UP);
        if (validation.error) {
            return {
                status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                message: HTTP_STATUS_CODE.BAD_REQUEST.message,
                data: validation.data,
            };
        }

        try {
            const isUserPresent = await userRepo.getUserByEmail(
                args.payload.email
            );
            if (isUserPresent) {
                return {
                    status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                    message: 'User already exists',
                    data: {},
                };
            }
            const user = await userRepo.createUser(args.payload);
            return {
                status: HTTP_STATUS_CODE.CREATED.code,
                message: HTTP_STATUS_CODE.CREATED.message,
                data: user,
            };
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: { message: err.message },
            };
        }
    }
}
