import { isPublic, isSignIn, HTTP_STATUS_CODE } from '../config/appConst';
import * as ProductRepo from '../repository/productRepo';
import { PRODUCT_CREATE } from '../validation/types';
import { validate } from '../validation/validate';
import { YUP_VALIDATOR } from '../validation/validationMapping';
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
                    authorizer: isPublic,
                },
                getProductByName: {
                    resolver: this.getProductByName,
                    authorizer: isSignIn,
                },
            },
            Mutation: {
                addProduct: {
                    resolver: this.addProduct,
                    authorizer: isPublic,
                },
                updateProduct: {
                    resolver: this.updateProduct,
                    authorizer: isSignIn,
                },
                deleteProduct: {
                    resolver: this.deleteProduct,
                    authorizer: isPublic,
                },
            },
        };
    }

    async getProductById(root, args, context) {
        console.log(args.id);
        try {
            const product = await ProductRepo.getProductById(args.id);
            if (!product) {
                return {
                    status: HTTP_STATUS_CODE.NOT_FOUND.code,
                    message: HTTP_STATUS_CODE.NOT_FOUND.message,
                    data: {},
                };
            }
            return {
                status: HTTP_STATUS_CODE.OK.code,
                message: HTTP_STATUS_CODE.OK.message,
                data: product,
            };
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: err,
            };
        }
    }
    async getProductByName(root, args, context) {
        try {
            const product = await ProductRepo.getProductByName(args.name);
            if (!product) {
                return {
                    status: HTTP_STATUS_CODE.NOT_FOUND.code,
                    message: HTTP_STATUS_CODE.NOT_FOUND.message,
                    data: {},
                };
            }
            return product;
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: err,
            };
        }
    }

    async addProduct(root, args, context) {
        const res = await validate(YUP_VALIDATOR)(args.payload, PRODUCT_CREATE);
        if (res.error) {
            return {
                status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                message: HTTP_STATUS_CODE.BAD_REQUEST.message,
                data: res.data,
            };
        }
        try {
            const saveedProduct = ProductRepo.saveProduct(args.payload);
            return saveedProduct;
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: err,
            };
        }
        return {};
    }
    async updateProduct(root, args, context) {
        const res = await validate(YUP_VALIDATOR)(args.payload, PRODUCT_CREATE);
        if (res.error) {
            return {
                status: HTTP_STATUS_CODE.BAD_REQUEST.code,
                message: HTTP_STATUS_CODE.BAD_REQUEST.message,
                data: res.data,
            };
        }
        try {
            const updatedProduct = ProductRepo.updateProduct(
                args.id,
                args.payload
            );
            return updatedProduct;
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: err,
            };
        }
    }
    async deleteProduct(root, args, context) {
        try {
            const deletedProduct = ProductRepo.deleteProduct(args.id);
            return deletedProduct;
        } catch (err) {
            return {
                status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.code,
                message: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR.message,
                data: err,
            };
        }
    }
}
