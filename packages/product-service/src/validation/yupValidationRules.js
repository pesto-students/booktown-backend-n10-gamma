import * as yup from 'yup';

export const productCreate = yup.object().shape({
    name: yup.string().required('name is required'),
    author: yup.string().required('author is required'),
    description: yup.string().required('description is required'),
    price: yup.number().required('price is required'),
    category: yup.string().required('category is required'),
    subcategory: yup.string().required('SubCategory is required'),
    shippingAddress: yup.object().shape({
        city: yup.string().required('city is required'),
        state: yup.string().required('state is required'),
        country: yup.string().required('country is required'),
        zipCode: yup.number().required('zipCode is required'),
        address: yup.string().required('address is required'),
    }),
    format: yup.string().required('format is required'),
    condition: yup.string().required('condition is required'),
    files: yup
        .array(yup.string().required('file url is required'))
        .required('files is required'),
});
