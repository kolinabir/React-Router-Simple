import React from 'react';
import './SingplePost.css'

const SinglePost = ({post}) => {

    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default SinglePost;