import React from "react";
import { Box } from "@mui/material";
import ChatSideBar from "./ChatSideBar";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  return (
    <Box
      sx={{
        marginTop: "65px",
        display: "flex",
        height: "calc(100vh - 64px)",
      }}
    >
      <ChatSideBar />
      <ChatWindow />
    </Box>
  );
};

export default Chat;
