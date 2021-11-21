import admin from '../config/firebaseAdmin';
import { USER_SIGN_UP } from '../validation/types';
import { YUP_VALIDATOR } from '../validation/validationMapping';
import { validate } from '../validation/validate';
import { getUserByEmail, saveUser } from '../repository/userRepo';

export default class UaserAuthController {
    constructor() {}
    resolvers() {
        return {
            Query: {
                hello: () => 'Hello world',
            },
            Mutation: {
                createUser: this.createUser,
            },
        };
    }

    async createUser(context, args) {
        const validationRes = await validate(YUP_VALIDATOR)(
            args,
            USER_SIGN_UP
        ).catch((error) => {
            return { error: true, data: error };
        });
        if (validationRes.error) {
            return {
                status: 400,
                error: true,
                data: validationRes.data,
                message: 'Validation error',
            };
        }

        const userExsist = await getUserByEmail(args.emal).then((user) => {
            if (user) {
                return {
                    status: 400,
                    error: true,
                    message: 'User already exists',
                };
            }
            return { error: false };
        });

        if (userExsist.error) {
            return userExsist;
        }
        const createUserRes = await admin
            .auth()
            .createUser({
                email: args.email,
                password: args.password,
            })
            .then(async (userRecord) => {
                return await saveUser({ ...args, _id: userRecord.uid })
                    .then((user) => {
                        return {
                            status: 200,
                            error: false,
                            data: user,
                        };
                    })
                    .catch((error) => {
                        return {
                            status: 400,
                            error: true,
                            message: error.message,
                        };
                    });
            })
            .catch((error) => {
                return { error: true, data: error };
            });
        // return { ...(createUserRes || {}) };
        return JSON.stringify(createUserRes);
    }
}
