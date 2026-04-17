import React, { useContext, useState } from "react";
import { HistoryContext } from "../FriendContext/FriendContext";
import DisplayContactList from "./DisplayContactList";
import { Link } from "react-router";

const TimelinePage = () => {
  const { contactList } = useContext(HistoryContext);
  // console.log(contactList.length)
  const [filteredList, setFilteredList] = useState(contactList);

  const handleFilteredList = (filteredType) => {
    if (filteredType === "Text") {
      const newList = contactList.filter((list) => list.title === filteredType);
      setFilteredList(newList);
    } else if (filteredType === "Call") {
      const newList = contactList.filter((list) => list.title === filteredType);
      setFilteredList(newList);
    } else if (filteredType === "Video") {
      const newList = contactList.filter((list) => list.title === filteredType);
      setFilteredList(newList);
    }
  };

  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-100">
      <div className="w-full px-10 lg:px-0 md:max-w-277 mx-auto py-20">
        <h1 className="text-5xl font-bold mb-6">Timeline</h1>
        <select
          className="border rounded-lg px-5 py-2 w-60 my-8"
          value={value}
          onChange={(e) => {
            const selectedValue = e.target.value;
            setValue(selectedValue);

            if (selectedValue === "All") {
              setFilteredList(contactList);
            } else {
              handleFilteredList(selectedValue);
            }
          }}
        >
          <option value="" disabled>Filter Timeline</option>
          <option value="Text">Text</option>
          <option value="Call">Call</option>
          <option value="Video">Video</option>
          <option value="All">All</option>
        </select>

        {
          contactList.length===0 ? <div className="shadow shadow-gray-500 p-15 md:p-42  text-center text-2xl font-bold text-gray-500 rounded-2xl">"No Interaction List Available Now!!"</div> :" " 
        }
        <div className="space-y-5">
          {filteredList.map((list, index) => (
            <DisplayContactList key={index} list={list}></DisplayContactList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
