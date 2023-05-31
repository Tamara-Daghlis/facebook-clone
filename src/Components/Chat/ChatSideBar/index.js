import React, { useState } from "react";
import { Box, Stack, Typography, IconButton, InputBase } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";

import styled from "@emotion/styled";
import ChatSideBarItem from "../ChatSideBarItem.js";

const Search = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  margin: "0px 10px",
  borderRadius: "33px",
  height: "20px",
});

const ChatSideBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <Box sx={{ flex: 1, borderRight: "1px solid #eff2f5" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography fontWeight={700}>Chats</Typography>
        <Stack direction={"row"} spacing={2}>
          {[<MoreHorizIcon />, <VideoCallIcon />, <BorderColorIcon />].map(
            (icon) => {
              return <IconButton>{icon}</IconButton>;
            }
          )}
        </Stack>
      </Box>

      <Search>
        <SearchIcon color="disabled" />
        <InputBase placeholder="Search Messenger" onChange={handleSearch} />
      </Search>
      <ChatSideBarItem />
    </Box>
  );
};

export default ChatSideBar;
