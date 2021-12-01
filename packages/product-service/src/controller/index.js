import productCrudController from './productCrudController';
import { authMiddleware, getClassInstance } from '../utility/utilityFunctions';
import { PRIVATE, PUBLIC } from '../config/appConst';
export const controllers = {
    productCrudController,
    //add more controllers here
};

/**
 *
 * @returns {object}
 */
const resolveQuery = () => {
    // all resolvers are place in this object
    const rootResolver = {};
    Object.keys(controllers).forEach((key) => {
        const controllerInstance = getClassInstance(controllers[key]);
        if (controllerInstance.resolvers) {
            const resolvers = controllerInstance.resolvers();
            Object.keys(resolvers).forEach((key) => {
                if (!rootResolver[key]) {
                    rootResolver[key] = resolvers[key];
                }
                Object.keys(resolvers[key]).forEach(
                    (actualResolverObjectKey) => {
                        const authorizer =
                            resolvers[key][actualResolverObjectKey].authorizer;
                        const resolver =
                            resolvers[key][actualResolverObjectKey].resolver;
                        if (authorizer.includes(PRIVATE)) {
                            rootResolver[key] = {
                                ...rootResolver[key],
                                [actualResolverObjectKey]:
                                    authMiddleware(resolver),
                            };
                        } else if (
                            resolvers[key][
                                actualResolverObjectKey
                            ].authorizer.includes(PUBLIC)
                        ) {
                            rootResolver[key] = {
                                ...rootResolver[key],
                                [actualResolverObjectKey]: resolver,
                            };
                        }
                    }
                );
            });
        }
    });
    return rootResolver;
};

export default resolveQuery;
