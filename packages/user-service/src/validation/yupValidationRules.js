import * as yup from 'yup';

export const userSignUpSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
});
