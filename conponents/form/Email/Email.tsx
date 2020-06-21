import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Email = () => (
    <div className="form-group">
        <label htmlFor="form-email">Email*</label>
        <Field
            id="form-email"
            className="form-control py-4"
            type="email"
            name="email"
            placeholder="Your email"
        />
        <ErrorMessage name="email" render={(msg) => <small className="form-text text-danger">{msg}</small>} />
    </div>
);

export default Email;
