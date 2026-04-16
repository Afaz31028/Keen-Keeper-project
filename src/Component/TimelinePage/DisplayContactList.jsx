import React from "react";
import callImg from '../../assets/call.png'
import videoImg from '../../assets/video.png'
import textImg from '../../assets/text.png'

const DisplayContactList = ({ list }) => {
  // console.log(list)
  const {name,title,date}=list;
  return (
    <div className="shadow shadow-gray-400 rounded-2xl p-3">
      <div className="flex gap-2 items-center">
        <div>
          {title === "Text" ? (
            <img src={textImg} alt=""/>
          ) : title === "Video" ? (
            <img src={videoImg} alt=""/>
          ) : (
            <img src={callImg} alt="" />
          )}
        </div>
        <div>
          {title === "Text" ? (
            <h5 className="text-lg text-gray-500"><span  className="text-xl font-medium text-neutral">Text</span> with {name}</h5>
          ) : title === "Call" ? (
            <h5 className="text-lg text-gray-500 "><span className="text-xl font-medium text-neutral">Call</span> with {name}</h5>
          ) : (
            <h5 className="text-lg text-gray-500"><span className="text-xl font-medium text-neutral">Video</span> with {name}</h5>
          )}
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayContactList;
