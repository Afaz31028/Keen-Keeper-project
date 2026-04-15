import React, { useState } from "react";
import { BsArchive } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLoaderData } from "react-router";
import Interaction from "../Interaction/Interaction";

const FriendDetails = () => {
  const friendData = useLoaderData();
  const { name, tags, picture, days_since_contact, status, email, bio, next_due_date, goal}= friendData;

  const [contact, setContact]= useState([]);
  const handleContact=(title)=>{
    const history={
        title,
        name,
        date: new Date().toLocaleDateString()
    }
    setContact([...contact, history]);
  }
  // console.log(friendData)
  return (
    <div className="grid grid-cols-3 max-w-277 mx-auto gap-5 giest-font">
      <div className="col-span-1 space-y-3">
        <div className="shadow shadow-gray-700 rounded-2xl p-6 text-center">
          <div className="flex justify-center items-center">
            <img className="rounded-full w-20 h-20" src={picture} alt="" />
          </div>
          <h1 className="text-xl font-semibold mt-3">{name}</h1>
          <div className="badge badge-warning rounded-3xl text-[12px] font-medium mt-2 text-gray-100 text-center">
            {status}
          </div>
          <div className="flex gap-3 justify-center items-center mt-2">
            {tags.map((tag, index) => (
              <div key={index} tag={tag}>
                <div className="badge bg-green-200 text-neutral text-center text-[12px] font-medium">
                  {tag}
                </div>
              </div>
            ))}
          </div>
          <p className='font-medium italic mt-3 text-gray-400'>"{bio}"</p>
          <p className="text-sm  text-gray-400">Preferred: {email}</p>
        </div>
        <div className="shadow shadow-gray-700 rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
            <HiOutlineBellSnooze className="text-xl" />
            <p>Snooze 2 weeks</p>
        </div>
        <div className="shadow shadow-gray-700 rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
            <BsArchive />
            <p>Archive</p>
        </div>
        <div className="text-red-500 shadow shadow-gray-700 rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
            <RiDeleteBin6Line />
            <p>Delete</p>
        </div>
      </div>
      <div className="col-span-2 space-y-3">
        <div className="grid grid-cols-3 gap-5 items-center">
            <div className='p-8 text-center bg-base-100 max-w-65 shadow shadow-gray-700 rounded-sm'>
                <h1 className='text-[#244D3F] text-[30px] font-semibold'>{days_since_contact}</h1>
                <p className='text-[#64748B] text-[18px]'>Days Since Contact</p>
            </div>
            <div className='p-8 text-center bg-base-100 max-w-65 shadow shadow-gray-700 rounded-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>{goal}</h1>
                <p className='text-[#64748B] text-[18px]'>Goal(Days)</p>
            </div>
            <div className='p-8 text-center bg-base-100 max-w-65 shadow shadow-gray-700 rounded-sm'>
                <h1 className='text-[#244D3F] text-[32px] font-semibold'>{next_due_date}</h1>
                <p className='text-[#64748B] text-[18px]'>Next Due Date</p>
            </div>
        </div>
        <div className="shadow shadow-gray-700 rounded-2xl p-6">
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-medium">Relationship Goal</h4>
                <button className="btn shadow">Edit</button>
            </div>
            <p className="text-lg font-semibold"><span className="text-gray-400">Connect every</span> 30 days</p>
        </div>
        <div className="shadow shadow-gray-700 rounded-2xl p-6">
            <h5 className="mb-4 text-xl font-medium">Quick Check-In</h5>
            <div className="grid grid-cols-3 gap-5">
                <button onClick={()=>handleContact("Meetup")} className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center">
                     <PiPhoneCallLight className="text-2xl mb-2" />
                    <p>Call</p>
                </button>
               <button onClick={()=>handleContact("Text")} className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center">
                    <LuMessageSquareMore className="text-2xl mb-2" />
                    <p>Text</p>
               </button>
               <button onClick={()=>handleContact("Video")} className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center">
                    <IoVideocamOutline className="text-2xl mb-2" />
                    <p>Video</p>
               </button>
            </div>
        </div>
        <div className="shadow shadow-gray-700 rounded-2xl p-6">
            <div className="flex justify-between">
                <h4 className="text-[#244D3F] text-xl font-medium">Recent Interactions</h4>
                <button className="flex gap-1 items-center btn text-sm font-medium">
                    <FaHistory />
                    <p>Full History</p>
                </button>
            </div>
            {
                contact.map((item, index)=> <Interaction key={index} item={item}></Interaction>)
            }
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
