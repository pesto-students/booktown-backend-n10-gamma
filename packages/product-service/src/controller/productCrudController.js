import { isPublic, isSignIn } from '../config/appConst';

/**
 *
 */
export default class ProductCrudController {
    constructor() {}
    resolvers() {
        return {
            Query: {
                getProductById: {
                    resolver: this.getProductById,
                    authorizer: isSignIn,
                },
                getProductByName: {
                    resolver: this.getProductByName,
                    authorizer: isSignIn,
                },
            },
            Mutation: {
                addProduct: {
                    resolver: this.addProduct,
                    authorizer: isSignIn,
                },
                updateProduct: {
                    resolver: this.updateProduct,
                    authorizer: isPublic,
                },
                deleteProduct: {
                    resolver: this.deleteProduct,
                    authorizer: isSignIn,
                },
            },
        };
    }

    async getProductById(root, args, context) {
        //statement
        return '';
    }
    async getProductByName(root, args, context) {
        //statement
        return '';
    }

    async addProduct(root, args, context) {
        return '';
    }
    async updateProduct(root, args, context) {
        //statement
        return 'update call';
    }
    async deleteProduct(root, args, context) {
        //statement
        return 'delete call';
    }
}
