import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useChat } from "../../../Context/ChatContext";

const StyledChatSideBarItem = styled(Box)({
  margin: "20px",
  display: "flex",
  borderRadius: "8px",
  padding: "10px",
  " &:hover": {
    background: "#eff2f5",
  },
});

const StyledAvatar = styled(Avatar)({
  width: " 50px",
  height: " 50px",
});

const ChatSideBarItem = ({ chat }) => {
  const { changeUser } = useChat();

  const handleSelect = (user) => {
    changeUser(user);
  };
  return (
    <StyledChatSideBarItem onClick={() => handleSelect(chat[1].userInfo)}>
      <StyledAvatar src={chat[1].userInfo?.photoURL} />
      <Box
        textAlign={"start"}
        marginLeft={"10px"}
        padding={"5px"}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Typography>{chat[1].userInfo?.displayName}</Typography>
        <Typography color={"#C5C5C5"} fontSize={"12px"} overflow={"hidden"}>
          {chat[1].lastMessage?.text}
        </Typography>
      </Box>
    </StyledChatSideBarItem>
  );
};

export default ChatSideBarItem;
