import React from 'react';
import { Link } from 'react-router';

const Friend = ({friend}) => {
    // console.log(friend);
    const {id , name, picture,days_since_contact, status, tags}= friend;

    return (
        <Link to={`/${id}`}>
            <div className='shadow-xl rounded-2xl p-6 text-center w-65'>
            <div className='flex justify-center items-center'>
                <img className='rounded-full w-20 h-20' src={picture} alt="" />
            </div>
            <h1 className='text-xl font-semibold mt-3'>{name}</h1>
            <p className='text-[12px] mt-2'>{days_since_contact}d ago</p>
            <div className='flex gap-3 justify-center items-center mt-2'>
                {
                    tags.map((tag,index)=><div key={index} tag={tag}><div className="badge bg-green-200 border-2 border-gray-600 text-neutral text-center text-[12px] font-medium">{tag}</div></div>)
                }
            </div>
            <div className={`badge badge-warning rounded-3xl text-[12px] font-medium mt-2 text-gray-100 text-center ${status ==="Overdue" ? "bg-red-800 text-base-100" : status==="On-Track" ? "bg-green-800 text-base-100" : "bg-[#EFAD44] text-neutral"}`}>
                {status}
            </div>
        </div>
        </Link>
    );
};

export default Friend;