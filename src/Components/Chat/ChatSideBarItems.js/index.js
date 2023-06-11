import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";
import { db } from "../../../config/firebase-config";
import { onSnapshot, doc } from "firebase/firestore";
import ChatSideBarItem from "../ChatSideBarItem.js";
import styled from "@emotion/styled";

const ChatSideBarItemsBox = styled(Box)({
  overflowY: "auto",
  height: "80%",
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#c0c0c0",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    background: "#ced0d4",
  },
});

const ChatSideBarItems = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <ChatSideBarItemsBox>
      {chats &&
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => {
            return <ChatSideBarItem chat={chat} key={chat[0]} />;
          })}
    </ChatSideBarItemsBox>
  );
};

export default ChatSideBarItems;
