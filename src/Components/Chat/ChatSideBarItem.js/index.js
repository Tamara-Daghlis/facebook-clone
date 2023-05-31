import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

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

const ChatSideBarItem = () => {
  return (
    <StyledChatSideBarItem>
      <StyledAvatar src="/images/download.png" />
      <Box textAlign={"start"} marginLeft={"10px"} padding={"5px"}>
        <Typography>Tamara Daghlis</Typography>
        <Typography color={"#C5C5C5"} fontSize={"10px"} overflow={"hidden"}>
          yes kln;d ;lknkfb lknfghb l;knajfkgb lk;njkbgf lkjkfjgb l;jkfgb
        </Typography>
      </Box>
    </StyledChatSideBarItem>
  );
};

export default ChatSideBarItem;
