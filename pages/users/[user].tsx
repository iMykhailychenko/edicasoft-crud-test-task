import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import axios from 'axios';
// components
import PageTemplate from '../../conponents/template/PageTemplate';
import Banner from '../../conponents/banner/Banner';
import Post from '../../conponents/posts/Posts';
// utils
import { initializeStore } from '../../redux/store';
import { initialState } from '../../redux/rootState';
import { IUser, IPost } from '../../interfaces/interfaces';
import { getSingleUserSelector } from '../../redux/user/usersSelectors';
import {
    getSingleUserStart,
    getSingleUserSuccess,
    getSingleUserError,
} from '../../redux/user/get-single/getSingleUserActions';

const EditUser = () => {
    const user = useSelector(getSingleUserSelector);
    const { address, company } = user;

    return (
        <PageTemplate>
            <Banner>
                <h1 className="display-4">{user.name}</h1>
                <hr className="my-4" />
                <p className="lead my-1">
                    <span>Username: </span>
                    <span className="text-muted">{user.username}</span>
                </p>
                <p className="lead my-1">
                    <span>Website: </span>
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                        {user.website}
                    </a>
                </p>
                <p className="lead my-1">
                    <span>Email: </span>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <p className="lead my-1">
                    <span>Phone: </span>
                    <a href={`tel:+${user.phone}`}>{user.phone}</a>
                </p>

                <h2 className="display-6 mt-4">Company:</h2>
                <hr className="my-4" />
                <p className="lead my-1">{company.name}</p>
                <p className="lead my-1 text-muted">{company.catchPhrase}</p>
                <p className="lead my-1 text-muted">{company.bs}</p>

                <h2 className="display-6 mt-4">Address:</h2>
                <hr className="my-4" />
                <p className="lead my-1">{address.city}</p>
                <p className="lead my-1 text-muted">{`${address.street}, ${address.suite}`}</p>
                <p className="lead my-1 text-muted">{address.zipcode}</p>
                <p className="lead my-1">
                    <span>Latitude: </span>
                    <span className="text-muted">{address.geo.lat}</span>
                </p>
                <p className="lead my-1">
                    <span>Longitude: </span>
                    <span className="text-muted">{address.geo.lng}</span>
                </p>

                <Link href={'/edit/[user]'} as={`/edit/${user.id}`}>
                    <a className="btn btn-primary btn-lg mt-4">Edit user info</a>
                </Link>
            </Banner>

            <Post />

            <div className="d-flex justify-content-center my-4">
                <Link href="/">
                    <a className="btn btn-primary btn-lg my-4">Back to home page</a>
                </Link>
            </div>
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

    dispatch(getSingleUserStart());

    try {
        const user: IUser = await (await axios.get('/users/' + userId)).data;
        const posts: IPost[] = await (await axios.get('/users/' + userId + '/posts')).data;

        dispatch(getSingleUserSuccess({ ...user, posts }));
    } catch {
        dispatch(getSingleUserError('Server error'));
    }

    return { props: { initialReduxState: reduxStore.getState() } };
};

export default EditUser;
