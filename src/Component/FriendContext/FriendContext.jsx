import React, { createContext, useState } from "react";

export const HistoryContext = createContext();

const FriendContext = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  const handleContactList = (details) => {
    const [title, id, name]= details;

    const history = {
      title,
      id,
      name,
      date: new Date().toLocaleDateString(),
    };
    setContactList([...contactList, history]);
  };
  const data={
    contactList,
    setContactList,
    handleContactList
  }

  return (
    <HistoryContext.Provider value={data}>{children}</HistoryContext.Provider>
  );
};

export default FriendContext;
