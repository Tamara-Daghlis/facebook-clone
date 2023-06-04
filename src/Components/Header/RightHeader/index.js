import React from "react";
import { Stack, IconButton, Avatar } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";

const RightHeader = () => {
  const { currentUser } = useAuth();

  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton>
        <Avatar src={"/images/messengersvg.svg"} />
      </IconButton>
      <IconButton>
        <Avatar src={currentUser.photoURL} />
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
