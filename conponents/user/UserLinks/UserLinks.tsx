import React from 'react';

const UserLinks = ({ website, email }: { website: string; email: string }) => (
    <>
        <div className="card-text">
            <span>web site: </span>
            <a
                className="cart-site"
                href={`http://${website}`}
                title="Click to open cite in new window"
                target="_blank"
                rel="noopener noreferrer"
            >
                {website}
            </a>
        </div>

        <div className="card-text">
            <span>email: </span>
            <a className="card-mail" title="Click to write an email" href={`mailto:${email}`}>
                {email}
            </a>
        </div>
    </>
);

export default UserLinks;
