import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons';
//utils
import { deleteUserStart, deleteUserSuccess, deleteUserError } from '../../../redux/user/delete/deleteUserActions';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

const UserNav = ({ id }: { id: number }) => {
    const dispatch = useDispatch();

    const handleClick = (id: number): void => {
        // init proces
        dispatch(deleteUserStart());

        axios.delete('/users/' + id).then((response) => {
            response.status === 200
                ? dispatch(deleteUserSuccess(id))
                : dispatch(deleteUserError('Network response error'));
        });
    };

    return (
        <div className="btn-group btn-group-toggle mt-4">
            <Link href={'/users/[user]'} as={`/users/${id}`}>
                <a className="btn btn-secondary btn-sm pb-2 px-3" title="Click to view user info page">
                    <FontAwesomeIcon icon={faUserAlt} />
                </a>
            </Link>

            <Link href={'/edit/[user]'} as={`/edit/${id}`}>
                <a className="btn btn-secondary btn-sm pb-2 px-3" title="Edit user">
                    <FontAwesomeIcon icon={faUserEdit} />
                </a>
            </Link>

            <button className="btn btn-secondary btn-sm pb-2 px-3" title="Delete user" onClick={() => handleClick(id)}>
                <FontAwesomeIcon icon={faUserMinus} />
            </button>
        </div>
    );
};

export default UserNav;
