import React from 'react';
import Link from 'next/link';

const UserTitle = ({ id, name, username }: { id: number; name: string; username: string }) => (
    <>
        <Link href={'/users/[user]'} as={`/users/${id}`}>
            <a className="card-user" title="Click to view user info page">
                <h3 className="card-title mb-0">{name}</h3>
            </a>
        </Link>

        <p className="card-text mt-0 mb-3">{username}</p>
    </>
);

export default UserTitle;
