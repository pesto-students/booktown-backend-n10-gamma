import { YUP_VALIDATOR, yupValidationMapping } from './validationMapping';

/**
 *
 * @param {('yup' | 'custom')} validator
 * @returns {Function<Promise<{
 *    error: boolean,
 * data: any
 * }>>}
 *
 */
export const validate = (validator) => {
    if (validator === YUP_VALIDATOR) {
        return async (validationObject, validationType) => {
            const validationSchema = yupValidationMapping[validationType];
            if (!validationSchema)
                throw new Error(
                    `No validation schema found for ${validationType}`
                );
            return await validationSchema
                .validate(validationObject, { abortEarly: false })
                .then((res) => {
                    return {
                        error: false,
                        data: res,
                    };
                })
                .catch((err) => {
                    return {
                        error: true,
                        data: err,
                    };
                });
        };
        return () => {};
    }
};
