import React from "react";
import { Card, Avatar, Stack, Divider, Typography } from "@mui/material";
import PostDialog from "./PostDialog";
import { newPostIconsData } from "../../Data/newPostIconsData";

const NewPost = ({ currentUserImage }) => {
  return (
    <Card sx={{ p: "20px", width: "50%" }}>
      <Stack direction={"row"} spacing={3}>
        <Avatar alt="current user" src={currentUserImage}></Avatar>
        <PostDialog />
      </Stack>

      <Divider sx={{ margin: "15px" }} />

      <Stack direction={"row"} spacing={3}>
        {newPostIconsData.map(({ icon, title }) => {
          return (
            <Stack direction={"row"} spacing={1}>
              {icon}
              <Typography color={"gray"}> {title}</Typography>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
};

export default NewPost;
