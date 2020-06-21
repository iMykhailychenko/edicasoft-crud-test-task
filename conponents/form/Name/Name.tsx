import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Name = () => (
    <div className="form-group">
        <label htmlFor="form-email">Name*</label>
        <Field
            id="form-name"
            className="form-control py-4"
            type="text"
            name="name"
            placeholder="Your name"
        />
        <ErrorMessage name="name" render={(msg) => <small className="form-text text-danger">{msg}</small>} />
    </div>
);

export default Name;
