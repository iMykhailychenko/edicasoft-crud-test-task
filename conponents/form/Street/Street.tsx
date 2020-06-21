import React from 'react';
import { Field } from 'formik';

const Street = () => (
    <div className="form-group">
        <label htmlFor="form-street">Street</label>
        <Field
            id="form-street"
            className="form-control py-4"
            type="text"
            name="street"
            placeholder="Your street"
        />
    </div>
);

export default Street;
