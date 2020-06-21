import React from 'react';
import Link from 'next/link';
//components
import PageTemplate from '../../conponents/template/PageTemplate';
import Banner from '../../conponents/banner/Banner';
import FormComponent from '../../conponents/form/FormComponent';

const NewUser = () => (
    <PageTemplate>
        <Banner>
            <h1 className="display-4">Create new user! &#9997;</h1>
            <hr className="my-4" />
            <p className="lead mb-4">On this page you can create a new user. Attention! Name and Email are required fields.</p>

            <Link href="/">
                <a className="btn btn-primary btn-lg">Back to home page</a>
            </Link>
        </Banner>
        
        <FormComponent />

    </PageTemplate>
);

export default NewUser;
