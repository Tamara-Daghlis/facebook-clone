import React from "react";
import { Stack, IconButton, Avatar } from "@mui/material";

const RightHeader = ({ userIamge }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton>
        <Avatar src={"/images/messengersvg.svg"} />
      </IconButton>
      <IconButton>
        <Avatar src={userIamge} />
      </IconButton>
    </Stack>
  );
};

export default RightHeader;
