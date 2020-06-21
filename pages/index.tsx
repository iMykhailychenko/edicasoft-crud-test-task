import React from 'react';
import Link from 'next/link';
import axios from 'axios';
//components
import PageTemplate from '../conponents/template/PageTemplate';
import Banner from '../conponents/banner/Banner';
import UserCard from '../conponents/user/UserCard';
// utils
import { initializeStore } from '../redux/store';
import { initialState } from '../redux/rootState';
import { IUser } from '../interfaces/interfaces';
import { getUsersStart, getUsersSuccess, getUsersError } from '../redux/user/get/getUsersActions';

const Home = () => (
    <PageTemplate>
        <Banner>
            <h1 className="display-4">Hello everyone! &#128400;</h1>

            <hr className="my-4" />

            <p className="lead mb-1">
                In this page you have the ability to read / create / delete / update the users list.
            </p>
            <p className="lead mb-4">Technology stack for this app: react, redux, thunk, axios.</p>

            <Link href="/users/new">
                <a className="btn btn-primary btn-lg">Create new user</a>
            </Link>
        </Banner>

        <UserCard />
    </PageTemplate>
);

// get users on server side
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export const getServerSideProps = async () => {
    const reduxStore = initializeStore(initialState);
    const { dispatch } = reduxStore;

    dispatch(getUsersStart());

    try {
        const res: IUser[] = await (await axios.get('/users')).data;
        dispatch(getUsersSuccess(res));
    } catch {
        dispatch(getUsersError('Server error'));
    }

    return { props: { initialReduxState: reduxStore.getState() } };
};

export default Home;
