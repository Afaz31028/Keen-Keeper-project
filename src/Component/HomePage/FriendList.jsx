import React, { Suspense } from 'react';
import FriendsInfo from './FriendsInfo';
import LoadingPage from '../LoadingPage/LoadingPage';


const FriendList = () => {
    return (
        <div>
            <Suspense fallback={<LoadingPage></LoadingPage>}>
                <FriendsInfo></FriendsInfo>
            </Suspense>
        </div>
    );
};

export default FriendList;