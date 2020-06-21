import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
//components
import UserTitle from './UserTitle/UserTitle';
import UserNav from './UserNav/UserNav';
import UserLinks from './UserLinks/UserLinks';
// utils
import { IUser } from '../../interfaces/interfaces';
import { getUsersSelector } from '../../redux/user/usersSelectors';

const UserCard = () => {
    const users: IUser[] = useSelector(getUsersSelector);

    return (
        <ul className="row my-4 mx-3 mx-md-0">
            {users.map(({ email, id, name, username, website }) => (
                <li className="col-12 col-md-6 py-3 px-0 px-md-3" key={id}>
                    <div className="card card-body p-4">
                        <UserTitle id={id} name={name} username={username} />
                        <UserLinks website={website} email={email} />
                        <UserNav id={id} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default UserCard;
