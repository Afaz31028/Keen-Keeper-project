import React from 'react';
import Banner from './Banner';
import Stat from './Stat';
import FriendsInfo from './FriendsInfo';


const HomePage = () => {
    return (
        <div className='bg-gray-100 giest-font pb-20'>
            <Banner></Banner>
            <Stat></Stat>
            <FriendsInfo></FriendsInfo>
        </div>
    );
};

export default HomePage;