import { USER_SIGN_UP } from './types'
import { userSignUp } from './yupValidationRules'

export const YUP_VALIDATOR = 'yup'
export const CUSTOM_VALIDATOR = 'custom'

export const yupValidationMapping = {
    [USER_SIGN_UP]: userSignUp,
}
