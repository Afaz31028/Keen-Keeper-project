import React from 'react';

const Stat = () => {
    return (
        <div className='mt-10 max-w-277 grid grid-cols-4 gap-5 items-center mx-auto mb-10'>
            <div className='rounded-lg p-8 text-center bg-base-100 max-w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>10</h1>
                <p className='text-[#64748B] text-[18px]'>Toatl Friends</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 max-w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>3</h1>
                <p className='text-[#64748B] text-[18px]'>On Track</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 max-w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>6</h1>
                <p className='text-[#64748B] text-[18px]'>Need Attention</p>
            </div>
            <div className='rounded-lg p-8 text-center bg-base-100 max-w-65 shadow-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
                <p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Stat;