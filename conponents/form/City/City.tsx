import React from 'react';
import { Field } from 'formik';

const City = () => (
    <div className="form-group">
        <label htmlFor="form-city">City</label>
        <Field
            id="form-city"
            className="form-control py-4"
            type="text"
            name="city"
            placeholder="Your city"
        />
    </div>
);

export default City;
