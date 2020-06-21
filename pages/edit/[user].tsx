import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
//components
import PageTemplate from '../../conponents/template/PageTemplate';
import Banner from '../../conponents/banner/Banner';
import FormComponent from '../../conponents/form/FormComponent';
// utils
import { initializeStore } from '../../redux/store';
import { initialState } from '../../redux/rootState';
import { updateUserStart, updateUserSuccess, updateUserError } from '../../redux/user/update/updateUserActions';
import { IUser, IEditUser } from '../../interfaces/interfaces';

const EditUser = () => {
    const {
        query: { user },
    } = useRouter();

    const userId: string = typeof user === 'string' ? user : user[0];

    return (
        <PageTemplate>
            <Banner>
                <h1 className="display-4">Edit user info! &#9997;</h1>
                <hr className="my-4" />
                <p className="lead mb-4">
                    On this page you can create a new user. Attention! Name and Email are required fields.
                </p>

                <Link href="/">
                    <a className="btn btn-primary btn-lg">Back to home page</a>
                </Link>
            </Banner>

            <FormComponent id={userId} />
        </PageTemplate>
    );
};

// get users on server side
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getServerSideProps = async (ctx) => {
    // user id
    const userId = ctx.query.user;

    // dispatch
    const reduxStore = initializeStore(initialState);
    const { dispatch } = reduxStore;

    dispatch(updateUserStart());

    try {
        const { name, email, address }: IUser = await (await axios.get('/users/' + userId)).data;
        const user: IEditUser = await { name, email, ...address };
        dispatch(updateUserSuccess(user));
    } catch {
        dispatch(updateUserError('Server error'));
    }

    return { props: { initialReduxState: reduxStore.getState() } };
};

export default EditUser;
