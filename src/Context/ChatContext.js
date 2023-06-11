import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

export function useChat() {
  return useContext(ChatContext);
}

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({
    chatId: "null",
    user: {},
  });

  const { currentUser } = useAuth();

  const changeUser = (newUser) => {
    const chatId =
      currentUser?.uid > newUser.uid
        ? currentUser?.uid + newUser.uid
        : newUser.uid + currentUser?.uid;
    setUser({ chatId, user: newUser });
  };

  const value = {
    user,
    changeUser,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
