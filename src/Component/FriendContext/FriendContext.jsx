import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

const FriendContext = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [countText, setCountText]=useState(0);
  const [countCall, setCountCall]=useState(0);
  const [countVideo, setCountVideo]=useState(0);

  const handleContactList = (details) => {
    const [title, id, name]= details;

    const history = {
      title,
      id,
      name,
      date: new Date().toLocaleDateString(),
    };
    setContactList([...contactList, history]);
    {
      title==="Text" ? setCountText(countText+1) 
        : title==="Call" ? setCountCall(countCall+1)
          : setCountVideo(countVideo+1)
    }
  };


  const data={
    contactList,
    setContactList,
    handleContactList,
    countText, setCountText,
    countCall, setCountCall,
    countVideo, setCountVideo
  }

  return (
    <HistoryContext.Provider value={data}>{children}</HistoryContext.Provider>
  );
};

export default FriendContext;
