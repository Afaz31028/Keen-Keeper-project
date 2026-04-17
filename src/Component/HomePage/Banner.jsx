import React from 'react';
import { LuPlus } from 'react-icons/lu';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center w-full md:max-w-277 mx-auto pt-8 px-5 md:px-0 md:pt-20'>
            <h2 className='text-5xl font-bold mb-4'>Friends to keep close in your life</h2>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <div className='flex justify-center gap-3 items-center mt-8'>
                <button className='btn bg-green-900 text-base-100 font-semibold'>
                    <LuPlus />
                    <p>Add Friends</p>
                </button>
            </div>
        </div>
    );
};

export default Banner;