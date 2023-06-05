import React from "react";
import { Card, Avatar, Stack, Divider, Typography, Box } from "@mui/material";
import PostDialog from "./PostDialog";
import { newPostIconsData } from "../../Data/newPostIconsData";
import styled from "@emotion/styled";
import { useAuth } from "../../Context/AuthContext";

export const CardBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const NewPost = ({ margin, width }) => {
  const { currentUserInfo } = useAuth();
  const { currentUserImage } = currentUserInfo;
  return (
    <Card
      sx={{
        p: "20px",
        width: { xs: "90%", md: `${width}` },
        margin: `${margin}`,
        borderRadius: "13px",
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Avatar alt="current user" src={currentUserImage}></Avatar>
        <PostDialog />
      </Stack>

      <Divider sx={{ margin: "15px" }} />

      <CardBox>
        {newPostIconsData.map(({ icon, title }) => {
          return (
            <Stack direction={"row"} spacing={1}>
              {icon}
              <Typography color={"gray"}> {title}</Typography>
            </Stack>
          );
        })}
      </CardBox>
    </Card>
  );
};

export default NewPost;
