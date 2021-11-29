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
