import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const RegistrationForm = () => {
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                phone: '',
                dob: '',
                gender: '',
                password: '',
                confirmPassword: '',
                address: '',
                country: '',
                profilePicture: null,
                terms: false,
            }}
            validationSchema={Yup.object({
                fullName: Yup.string().required('Full Name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                phone: Yup.string()
                    .matches(/^[0-9]+$/, 'Must be only digits')
                    .min(10, 'Must be exactly 10 digits')
                    .max(10, 'Must be exactly 10 digits')
                    .required('Phone Number is required'),
                dob: Yup.date().required('Date of Birth is required'),
                gender: Yup.string().required('Gender is required'),
                password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
                address: Yup.string().required('Address is required'),
                country: Yup.string().required('Country is required'),
                terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
            })}
            onSubmit={(values) => {
                console.log('Form Data:', values);
                alert('Registration Successful!');
            }}
        >
            {({ setFieldValue }) => (
                <Form className="form-container">
                    <h2>Registration Form</h2>

                    <label htmlFor="fullName">Full Name</label>
                    <Field type="text" id="fullName" name="fullName" />
                    <ErrorMessage name="fullName" component="div" className="error" />

                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <label htmlFor="phone">Phone Number</label>
                    <Field type="tel" id="phone" name="phone" />
                    <ErrorMessage name="phone" component="div" className="error" />

                    <label htmlFor="dob">Date of Birth</label>
                    <Field type="date" id="dob" name="dob" />
                    <ErrorMessage name="dob" component="div" className="error" />

                    <label>Gender</label>
                    <div>
                        <label>
                            <Field type="radio" name="gender" value="male" />
                            Male
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="female" />
                            Female
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="other" />
                            Other
                        </label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="error" />

                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="error" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" className="error" />

                    <label htmlFor="address">Address</label>
                    <Field as="textarea" id="address" name="address" />
                    <ErrorMessage name="address" component="div" className="error" />

                    <label htmlFor="country">Country</label>
                    <Field as="select" id="country" name="country">
                        <option value="">Select your country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="error" />

                    <label htmlFor="profilePicture">Profile Picture (Optional)</label>
                    <input
                        type="file"
                        id="profilePicture"
                        onChange={(event) => setFieldValue('profilePicture', event.target.files[0])}
                    />
                    <ErrorMessage name="profilePicture" component="div" className="error" />

                    <label>
                        <Field type="checkbox" name="terms" />
                        I accept the terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="div" className="error" />

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default RegistrationForm;
