import React, { useContext } from 'react';
import { HistoryContext } from '../FriendContext/FriendContext';
import DisplayContactList from './DisplayContactList';

const TimelinePage = () => {

    const {contactList}= useContext(HistoryContext);
    console.log(contactList.length)

    return (
        <div className='bg-gray-100'>
            <div className='max-w-277 mx-auto py-20'>
                <h1 className='text-5xl font-bold mb-6'>Timeline</h1>
                <div className="dropdown dropdown-start mb-6">
                    <div tabIndex={0} role="button" className="btn m-1">Filtered Timeline ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Text</a></li>
                            <li><a>Call</a></li>
                            <li><a>Video</a></li>
                        </ul>
                </div>
                <div className='space-y-5'>
                {
                    contactList.map(list=> <DisplayContactList key={list.id} list={list}></DisplayContactList>)
                }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;