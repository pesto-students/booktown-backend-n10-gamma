import UaserAuthController from './uaserAuthController';
import { getClassInstance } from '../utility/utilityFunctions';

export const controllers = {
    UaserAuthController,
    //add more controllers here
};

const resolveQuery = () => {
    const mainResolver = {
        Query: {},
        Mutation: {},
    };
    Object.keys(controllers).forEach((key) => {
        const controller = getClassInstance(controllers[key]);
        if (controller.resolvers) {
            const resolvers = controller.resolvers();
            Object.keys(resolvers).forEach((key) => {
                if (key === 'Query') {
                    mainResolver.Query = {
                        ...mainResolver.Query,
                        ...resolvers.Query,
                    };
                } else if (key === 'Mutation') {
                    mainResolver.Mutation = {
                        ...mainResolver.Mutation,
                        ...resolvers.Mutation,
                    };
                }
            });
        }
    });
    return mainResolver;
};

export default resolveQuery;
