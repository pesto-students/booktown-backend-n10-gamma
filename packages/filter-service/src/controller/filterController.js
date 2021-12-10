import { HTTP_STATUS_CODE, isPublic, isSignIn } from '../config/appConst';
import * as FilterRepo from '../repository/filterRepo';
/**
 *
 */
export default class FilterController {
    constructor() {}
    resolvers() {
        return {
            Query: {
                books: {
                    resolver: this.getBoooks,
                    authorizer: isSignIn,
                },
                filterBooks: {
                    resolver: this.getFilterBooks,
                    authorizer: isSignIn,
                },
                getBooksCount: {
                    resolver: this.getBooksCount,
                    authorizer: isSignIn,
                },
                searchBooks: {
                    resolver: this.searchBooks,
                    authorizer: isPublic,
                },
            },
        };
    }

    async getBoooks(root, args, context) {
        const { page, limit } = args;
        try {
            return await FilterRepo.getBooks(page, limit);
        } catch (e) {
            throw new Error(e);
        }
    }

    async getFilterBooks(root, args, context) {
        const reqPayload = args.payload;
        const query = [];

        Object.keys(reqPayload).forEach((key) => {
            if (reqPayload[key]) {
                if (
                    key === 'price' &&
                    Object.keys(reqPayload[key]).length > 0
                ) {
                    query.push({
                        [key]: {
                            $gte: reqPayload[key].min,
                            $lte: reqPayload[key].max,
                        },
                    });
                } else {
                    query.push({ [key]: reqPayload[key] });
                }
            }
        });

        return FilterRepo.filterBooks(query);
    }
    async getBooksCount(root, args, context) {
        try {
            return await FilterRepo.getBooksCount();
        } catch (e) {
            throw new Error(e);
        }
    }

    async searchBooks(root, args, context) {
        const { query } = args;
        try {
            return await FilterRepo.searchBooks(query);
        } catch (e) {
            throw new Error(e);
        }
    }
}
