import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";
import './Post.css'

const Post = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>This is Post Component</h1>
      <div className="Posts">
        {posts.map((post) => (
          <SinglePost post={post} key={post.id}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default Post;
