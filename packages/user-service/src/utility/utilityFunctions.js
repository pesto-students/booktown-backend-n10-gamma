import Admin from '../config/firebaseAdmin';

export const getClassInstance = (className, opt) => {
    const classInstance = new className(opt);
    return classInstance;
};

export const authMiddleware = (next) => (root, args, context, info) => {
    if (!context.user) {
        throw new Error('not authenticated');
    }
    return next(root, args, context, info);
};

export const buildContext = async ({ req }) => {
    const token = req.headers.authorization;
    const context = {
        user: null,
    };
    if (token) {
        try {
            const user = await Admin.auth().verifyIdToken(token);
            context.user = user;
        } catch (err) {
            console.log('error', err);
            context.user = null;
        }
    }

    return context;
};
