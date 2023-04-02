import React from 'react';
import './SingplePost.css'
import { Link, useNavigate } from 'react-router-dom';


const SinglePost = ({post}) => {
    const {id} = post;
    const navigate = useNavigate();
    const handleClickBtn = ()=>{
        navigate(`/postx/${id}`)
    }
    return (
        <div className='post'>
            <h2>ID: {id}</h2>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
            <Link className='postd' to={`/postx/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleClickBtn}>Show data Using BTN</button>
            
        </div>
    );
};

export default SinglePost;