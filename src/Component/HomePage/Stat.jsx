import React from 'react';

const Stat = () => {
    return (
        <div className=' w-full md:max-w-277 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 md:gap-10 mx-auto py-5 mb-10 mt-10 md:px-30 lg:px-0'>
            <div className='rounded-lg p-8 text-center bg-base-100 w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>10</h1>
                <p className='text-[#64748B] text-[18px]'>Toatl Friends</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>3</h1>
                <p className='text-[#64748B] text-[18px]'>On Track</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>6</h1>
                <p className='text-[#64748B] text-[18px]'>Need Attention</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
                <p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Stat;