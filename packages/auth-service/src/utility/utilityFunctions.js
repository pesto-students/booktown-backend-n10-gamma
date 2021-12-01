export const getClassInstance = (className, opt) => {
    const classInstance = new className(opt);
    return classInstance;
};
