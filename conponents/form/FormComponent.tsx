import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import axios from 'axios';
import Loader from 'react-loader-spinner';
// components
import Name from './Name/Name';
import Email from './Email/Email';
import City from './City/City';
import Street from './Street/Street';
import Block from './Block/Block';
import Submit from './Submit/Submit';
// utils
import { postUserSelector, updateUserSelector } from '../../redux/user/usersSelectors';

import { initialValues, userSchema, createUser, updateUser } from './utils';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const FormComponent = ({ id }: { id?: string }) => {
    const { loading, succes } = useSelector(postUserSelector);
    const value = useSelector(updateUserSelector);
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={value}
            validationSchema={userSchema}
            onSubmit={(values, actions) => {
                // reset form
                actions.resetForm({ values: initialValues });

                // submit form
                id ? updateUser(dispatch, values, id) : createUser(dispatch, values);
            }}
        >
            {() => (
                <Form className="mx-3">
                    <h3>User info:</h3>
                    <Name />
                    <Email />

                    <h3>Address:</h3>
                    <City />
                    <Street />
                    <Block />

                    {loading && (
                        <div className="d-flex justify-content-center align-items-center">
                            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                        </div>
                    )}

                    {succes && (
                        <p className="alert alert-success">
                            {id
                                ? 'Hooray! You have successfully UPDATE user info'
                                : 'Hooray! You have successfully CREATE a new user'}
                        </p>
                    )}

                    <Submit>{id ? 'Update user info' : 'Create new user'}</Submit>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
