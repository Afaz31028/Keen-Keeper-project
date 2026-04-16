import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuMessageSquareMore } from 'react-icons/lu';
import { PiPhoneCallLight } from "react-icons/pi";

const Interaction = ({item}) => {
    // console.log(item.count, ind)
    const {title, name, date}= item;
    return (
        <div className={'flex justify-between items-center py-3 conatiner mx-auto border-b border-gray-600'}>
            <div className='flex gap-2 items-center'>
                <div>
                    {
                        title==="Text" ? <LuMessageSquareMore className="text-2xl mb-2" />
                            : title==="Video" ? <IoVideocamOutline className="text-2xl mb-2" />
                                :  <PiPhoneCallLight className="text-2xl mb-2" />
                    }
                </div>
                <div>
                    <h4 className='text-lg'>{title}</h4>
                    {
                        title==="Text" ? <h5 className='text-gray-500'>Text with {name}</h5>
                            : title==="Call" ? <h5 className='text-gray-500'>Call with {name}</h5>
                                : <h5 className='text-gray-500'>Video with {name}</h5>
                    }
                </div>
            </div>
            <div className='text-gray-500'>
                {date}
            </div>
        </div>
    );
};

export default Interaction;