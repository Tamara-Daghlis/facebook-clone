import React from "react";
import Message from "../Message";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

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
  return (
    <MessagesBox>
      <Message />
      <Message isOwner />
      <Message />
    </MessagesBox>
  );
};

export default Messages;
