import React, { useState, useEffect } from "react";
import Message from "../Message";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useChat } from "../../../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase-config";

const MessagesBox = styled(Box)({
  overflowY: "scroll",
  height: "calc(100% - 140px)",
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

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useChat();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", user.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [user.chatId]);

  return (
    <MessagesBox>
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </MessagesBox>
  );
};

export default Messages;
