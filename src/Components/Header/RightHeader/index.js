import React from "react";
import { Stack, IconButton, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

const RightHeader = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();

  const handleGoToChats = () => {
    navigate("chat");
  };

  const handleGoToProfile = () => {
    navigate("profile");
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton onClick={handleGoToChats}>
        <Avatar src={"/images/messenger.svg"} />
      </IconButton>

      <IconButton onClick={handleGoToProfile}>
        <Avatar src={currentUser?.photoURL} />
      </IconButton>
      <IconButton onClick={handleLogOut}>
        <Typography>Log Out</Typography>
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
