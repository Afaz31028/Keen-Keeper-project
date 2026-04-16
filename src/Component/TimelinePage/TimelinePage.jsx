import React, { useContext, useState } from 'react';
import { HistoryContext } from '../FriendContext/FriendContext';
import DisplayContactList from './DisplayContactList';
import { Link } from 'react-router';

const TimelinePage = () => {

    const {contactList}= useContext(HistoryContext);
    // console.log(contactList.length)
    const [filteredList, setFilteredList] = useState(contactList);
    
    const handleFilteredList=(filteredType)=>{
        if(filteredType==="Text"){
            const newList= contactList.filter(list=> list.title === filteredType);
            setFilteredList(newList);
        }
        else if(filteredType==="Call"){
            const newList= contactList.filter(list=> list.title === filteredType);
            setFilteredList(newList)
        }
        else if(filteredType==="Video"){
            const newList= contactList.filter(list=> list.title === filteredType);
            setFilteredList(newList)
        }
    }
    
    return (
        <div className='bg-gray-100'>
            <div className='w-full px-10 lg:px-0 md:max-w-277 mx-auto py-20'>
                <h1 className='text-5xl font-bold mb-6'>Timeline</h1>
                <div className="dropdown dropdown-start mb-6">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Filtered Timeline ⬇️
                    </div>
                    <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">
                        <li><button onClick={() => handleFilteredList("Text")}>Text</button></li>
                        <li><button onClick={() => handleFilteredList("Call")}>Call</button></li>
                        <li><button onClick={() => handleFilteredList("Video")}>Video</button></li>
                        <li><button onClick={() => setFilteredList(contactList)}>All</button></li>
                    </ul>
                </div>
                <div className='space-y-5'>
                {
                    filteredList.map((list, index)=> <DisplayContactList key={index} list={list}></DisplayContactList>)
                }
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;