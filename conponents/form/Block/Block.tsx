import React from 'react';
import { Field } from 'formik';

const Block = () => (
    <div className="form-group">
        <label htmlFor="form-block">Block</label>
        <Field
            id="form-block"
            className="form-control py-4"
            type="text"
            name="suite"
            placeholder="Your block"
        />
    </div>
);

export default Block;
