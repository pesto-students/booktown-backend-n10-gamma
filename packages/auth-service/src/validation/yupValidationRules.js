import * as yup from 'yup'

export const userSignUp = yup.object().shape({
    password: yup.string().required('passwords is required'),
    email: yup.string().required('email is required'),
    firstName: yup.string().required('firstName is required'),
    lastName: yup.string().required('lastname is required'),
    mobileNo: yup.string().required('mobile number is required'),
})
