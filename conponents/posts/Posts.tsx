import React from 'react';
import { useSelector } from 'react-redux';
// utils
import { getSingleUserSelector } from '../../redux/user/usersSelectors';

const Post = () => {
    const { posts } = useSelector(getSingleUserSelector);

    return (
        <ul className="row my-4 mx-3 mx-md-0">
            {posts.map(({ title, body, id }) => (
                <li className="col-12 col-md-6 py-3 px-0 px-md-3" key={id}>
                    <div className="card card-body p-4 h-100">
                        <h4 className="card-title mb-4">{title}</h4>
                        <p className="card-text mt-0 mb-3">{body}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Post;
