import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Divider,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { handleSelect, searchUser } from "./FireBase.js";
import { useAuth } from "../../../Context/AuthContext.js";
import ChatSideBarItems from "../ChatSideBarItems.js/index.js";

const Search = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  margin: "0px 10px",
  borderRadius: "33px",
  height: "20px",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  margin: "10px 20px 10px 30px",
  padding: "10px",
  "&:hover": {
    background: "#eff2f5",
  },
  borderRadius: "8px",
});

const ChatSideBar = () => {
  const [userName, setUserName] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(false);

  const { currentUser } = useAuth();

  const handleSearch = () => {
    searchUser(userName, setSelectedUser, setError);
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelectUser = () => {
    handleSelect(currentUser, selectedUser, setUserName, setSelectedUser);
  };
  return (
    <Box
      sx={{
        flex: { xs: 0.7, md: 1 },
        borderRight: "1px solid #eff2f5",
        pt: { xs: "20px", md: "0px" },
       
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
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
        <InputBase
          placeholder="Search Messenger"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
          value={userName}
        />
      </Search>
      {error && <Typography>User not found!</Typography>}
      {selectedUser && (
        <>
          <StyledBox onClick={handleSelectUser}>
            <Avatar src={selectedUser.photoURL} />
            <Typography paddingTop={"5px"} marginLeft={2}>
              {selectedUser.displayName}
            </Typography>
          </StyledBox>
          <Divider variant="middle" />
        </>
      )}

      <ChatSideBarItems />
    </Box>
  );
};

export default ChatSideBar;
