import { Box } from "@mui/material";
import React from "react";
import Input from "../Input";
import Messages from "../Messages";
import ChatWindowNav from "./ChatWindowNav";

const ChatWindow = () => {
  return (
    <Box sx={{ flex: 2 }}>
      <ChatWindowNav />
      <Messages />
      <Input />
    </Box>
  );
};

export default ChatWindow;
