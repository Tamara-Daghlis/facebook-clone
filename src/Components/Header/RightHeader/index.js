import React from "react";
import { Stack, IconButton, Avatar } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";

const RightHeader = () => {
  const { currentUserInfo } = useAuth();
  const { currentUserImage } = currentUserInfo;
  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton>
        <Avatar src={"/images/messengersvg.svg"} />
      </IconButton>
      <IconButton>
        <Avatar src={currentUserImage} />
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
