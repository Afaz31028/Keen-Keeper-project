import React from 'react';

const Friend = ({friend}) => {
    console.log(friend);
    const {name, picture, status, tags}= friend;

    return (
        <div className='shadow-xl rounded-2xl p-6 text-center'>
            <div className='flex justify-center items-center'>
                <img className='rounded-full w-20 h-20' src={picture} alt="" />
            </div>
            <h1 className='text-xl font-semibold mt-3'>{name}</h1>
            <p className='text-[12px] mt-2'>62d ago</p>
            <div className='flex gap-3 justify-center items-center mt-2'>
                {
                    tags.map((tag,index)=><div key={index} tag={tag}><div className="badge bg-green-200 text-neutral text-center text-[12px] font-medium">{tag}</div></div>)
                }
            </div>
            <div className="badge badge-warning rounded-3xl text-[12px] font-medium mt-2 text-gray-100 text-center">{status}</div>
        </div>
    );
};

export default Friend;