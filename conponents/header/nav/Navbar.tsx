import React from 'react';
import Link from 'next/link';

const Navbar: React.FC<{}> = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert alert-secondary py-3 mx-3">
        <div className="navbar-collapse">
            <ul className="navbar-nav">
                <li className="">
                    <Link href="/">
                        <a className="nav-item nav-link">Home page</a>
                    </Link>
                </li>

                <li className="">
                    <Link href="/users/new">
                        <a className="nav-item nav-link">Create new user</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
