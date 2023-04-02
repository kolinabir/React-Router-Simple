import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './postdetail.css'

const PostDetail = () => {
    const postData = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div className='postdetail'>
            <h1>This is post Detail</h1>
            <h3>Id : {postData.id}</h3>
            <h3>Title : {postData.title}</h3>
            <p>Body : {postData.body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;