import React from "react";
import { Stack, IconButton, Avatar } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router";

const RightHeader = () => {
<<<<<<< HEAD
  const { currentUser } = useAuth();
=======
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
>>>>>>> master

  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton onClick={handleGoToChats}>
        <Avatar src={"/images/messengersvg.svg"} />
      </IconButton>
<<<<<<< HEAD
      <IconButton>
        <Avatar src={currentUser.photoURL} />
=======
      <IconButton onClick={handleGoToProfile}>
        <Avatar src={currentUserImage} />
>>>>>>> master
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
