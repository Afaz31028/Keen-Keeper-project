import React, { useContext } from "react";
import { BsArchive } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiPhoneCallLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLoaderData } from "react-router";
import Interaction from "../Interaction/Interaction";
import { HistoryContext } from "../FriendContext/FriendContext";

const FriendDetails = () => {
  const friendData = useLoaderData();
  const {
    id,
    name,
    tags,
    picture,
    days_since_contact,
    status,
    email,
    bio,
    next_due_date,
    goal,
  } = friendData;

  const { contactList, handleContactList } = useContext(HistoryContext);
  const personalContactList = contactList.filter((item) => item.id == id);

  // console.log(friendData)
  return (
    <div className="bg-gray-100 py-20 px-10 md:px-20 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:max-w-280 mx-auto gap-5 giest-font">
        <div className="lg:col-span-1 space-y-3">
          <div className="shadow shadow-gray-400 rounded-2xl p-6 text-center">
            <div className="flex justify-center items-center">
              <img className="rounded-full w-20 h-20" src={picture} alt="" />
            </div>
            <h1 className="text-xl font-semibold mt-3">{name}</h1>
            <div
              className={`badge badge-warning rounded-3xl text-[12px] font-medium mt-2 text-center ${status === "Overdue" ? "bg-red-800 text-base-100" : status === "On-Track" ? "bg-green-800 text-base-100" : "bg-[#EFAD44] text-neutral"}`}
            >
              {status}
            </div>
            <div className="flex gap-3 justify-center items-center mt-2">
              {tags.map((tag, index) => (
                <div key={index} tag={tag}>
                  <div className="badge bg-green-200 border-2 border-gray-600 text-neutral text-center text-[12px] font-medium">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-medium italic mt-3 text-gray-600">"{bio}"</p>
            <p className="text-sm  text-gray-600">Preferred: {email}</p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-5 my-5">
            <button className="shadow shadow-gray-400 md:w-60 lg:w-full w-full rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
                <RiDeleteBin6Line className="text-xl" />
                <p>Snooze 2 weeks</p>
              </button>
            <button className="shadow shadow-gray-400 md:w-60 lg:w-full w-full rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
                <RiDeleteBin6Line className="text-xl" />
                <p>Archive</p>
              </button>
              <button className=" text-red-500 shadow shadow-gray-400 md:w-60 lg:w-full w-full rounded-sm flex gap-2 justify-center items-center font-medium py-4 px-2">
                <RiDeleteBin6Line className="text-xl" />
                <p>Delete</p>
              </button>
          
          </div>
        </div>
        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-0 place-items-center lg:items-center">
            <div className="p-8 text-center w-60 shadow shadow-gray-400 rounded-sm">
              <h1 className="text-[#244D3F] text-[30px] font-semibold">
                {days_since_contact}
              </h1>
              <p className="text-[#64748B] text-[18px]">Days Since Contact</p>
            </div>
            <div className="p-8 text-center  w-60 shadow shadow-gray-400 rounded-sm">
              <h1 className="text-[#244D3F] text-[32px] font-semibold">
                {goal}
              </h1>
              <p className="text-[#64748B] text-[18px]">Goal(Days)</p>
            </div>
            <div className="p-8 text-center w-60 shadow shadow-gray-400 rounded-sm">
              <h1 className="text-[#244D3F] text-[32px] font-semibold">
                {next_due_date}
              </h1>
              <p className="text-[#64748B] text-[18px]">Next Due Date</p>
            </div>
          </div>
          <div className="shadow shadow-gray-400 rounded-2xl p-6 mt-5">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-medium">Relationship Goal</h4>
              <button className="btn shadow">Edit</button>
            </div>
            <p className="text-lg font-semibold">
              <span className="text-gray-400">Connect every</span> 30 days
            </p>
          </div>
          <div className="shadow shadow-gray-400 rounded-2xl p-6">
            <h5 className="mb-4 text-xl font-medium">Quick Check-In</h5>
            <div className="grid grid-cols-3 gap-5">
              <button
                onClick={() => handleContactList(["Call", id, name])}
                className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center"
              >
                <PiPhoneCallLight className="text-2xl mb-2" />
                <p>Call</p>
              </button>
              <button
                onClick={() => handleContactList(["Text", id, name])}
                className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center"
              >
                <LuMessageSquareMore className="text-2xl mb-2" />
                <p>Text</p>
              </button>
              <button
                onClick={() => handleContactList(["Video", id, name])}
                className="shadow shadow-gray-400 bg-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center"
              >
                <IoVideocamOutline className="text-2xl mb-2" />
                <p>Video</p>
              </button>
            </div>
          </div>
          <div className="shadow shadow-gray-400 rounded-2xl p-6">
            <div className="flex justify-between">
              <h4 className="text-[#244D3F] text-xl font-medium">
                Recent Interactions
              </h4>
              <button className="flex gap-1 items-center btn text-sm font-medium">
                <FaHistory />
                <p>Full History</p>
              </button>
            </div>
            {personalContactList.map((item, index) => (
              <Interaction key={index} item={item}></Interaction>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
