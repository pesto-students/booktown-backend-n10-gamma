import { SIGN_UP } from './types';
import { userSignUpSchema } from './yupValidationRules';

export const YUP_VALIDATOR = 'yup';
export const CUSTOM_VALIDATOR = 'custom';

export const yupValidationMapping = {
    [SIGN_UP]: userSignUpSchema,
};
