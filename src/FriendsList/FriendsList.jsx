import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './FriendsList.css'

const FriendsList = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>This are my friends : {friends.length}</h1>
            <div className='friends'>

            {
                friends.map(friend=> <Friend
                friend={friend}
                key={friend.id}
                ></Friend>)
            }
            </div>


        </div>
    );
};

export default FriendsList;