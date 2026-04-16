import React, { use } from 'react';
import Friend from './Friend';

const friendsPromise= fetch('/friends.json').then(res=>res.json());

const FriendsInfo = () => {

    const friendsData= use(friendsPromise);
    // console.log(friendsData.length)

    return (
        <div className='w-full md:max-w-277 mx-auto border-t border-gray-300 pt-10 text-center md:text-start md:px-30 lg:px-0'>
            <h1 className='text-2xl font-semibold mb-4'>My Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center items-center px-0 md:px-10 lg:px-0'>
            {
                friendsData.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
            }
            </div>
        </div>
    );
};

export default FriendsInfo;