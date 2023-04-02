import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const posts = useLoaderData();
    return (
        <div>
          <h1>This is Post Component</h1>  
          {
            posts.map(post=><SinglePost
            post = {post}
            key={post.id}
            ></SinglePost>)
          }
        </div>
    );
};

export default Post;