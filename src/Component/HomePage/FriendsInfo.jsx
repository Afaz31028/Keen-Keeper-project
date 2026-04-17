import React, { Suspense, useEffect, useState } from "react";
import Friend from "./Friend";
import { RotateLoader } from "react-spinners";


const FriendsInfo = () => {
    const [friendsData, setFriendsData]= useState([]);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('/friends.json');
            const data=await res.json();
            setFriendsData(data);
            setIsLoading(false);

        }
        fetchData();

    }, [])

  return (
    <div className="w-full md:max-w-277 mx-auto border-t border-gray-300 pt-10 text-center md:text-start md:px-30 lg:px-0">
      <h1 className="text-2xl font-semibold mb-4">My Friends</h1>
        {
            isLoading ? (<div className="flex text-center justify-center items-center mt-15 p-10"><RotateLoader color="#AD3111" size={25} /></div>)
            : 
            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center px-0 md:px-10 lg:px-0">
            {
                    friendsData.map((friend) => ( <Friend key={friend.id} friend={friend} />))
            }
            </div>)
        }
    </div>
  );
};

export default FriendsInfo;
