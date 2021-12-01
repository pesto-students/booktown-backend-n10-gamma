import { PRODUCT_CREATE } from './types';
import { productCreate } from './yupValidationRules';

export const YUP_VALIDATOR = 'yup';
export const CUSTOM_VALIDATOR = 'custom';

export const yupValidationMapping = {
    [PRODUCT_CREATE]: productCreate,
};
