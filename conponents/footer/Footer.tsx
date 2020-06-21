import React from 'react';

interface Props {}

const Footer: React.FC<Props> = () => (
    <div className="container">
        <footer className="alert alert-secondary my-4 mx-auto p-4">
            <span className="d-block d-md-inline">Also visit my: </span>
            <a
                className="link text-center pl-md-3"
                href="https://github.com/iMykhailychenko?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a
                className="link text-center pl-3"
                href="https://ihor-mykhailychenko.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Resume page
            </a>
        </footer>
    </div>
);

export default Footer;
