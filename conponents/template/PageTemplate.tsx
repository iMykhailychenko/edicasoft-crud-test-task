import React from 'react';
import Head from 'next/head';

// import components
import Header from '../header/Header';
import Footer from '../footer/Footer';

const PageTemplate: React.FC<{}> = ({ children }) => (
    <>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
        </Head>

        <Header />

        <main className="container px-0">{children}</main>

        <Footer />
    </>
);

export default PageTemplate;
