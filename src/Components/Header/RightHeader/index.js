import React from "react";
import { Stack, IconButton, Avatar } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

const RightHeader = () => {
  const navigate = useNavigate();
  const { currentUserInfo } = useAuth();

  let currentUserImage;
  if (currentUserInfo) {
    currentUserImage = currentUserInfo.currentUserImage;
  }

  const handleGoToChats = () => {
    navigate("chat");
  };

  const handleGoToProfile = () => {
    navigate("profile");
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton onClick={handleGoToChats}>
        <Avatar src={"/images/messengersvg.svg"} />
      </IconButton>
      <IconButton onClick={handleGoToProfile}>
        <Avatar src={currentUserImage} />
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
