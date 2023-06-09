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

const NewPost = ({ width }) => {
  const { currentUser } = useAuth();
  return (
    <Card
      sx={{
        p: "20px ",
        width: { xs: "97%", md: `${width}` },
        borderRadius: { xs: "0px", md: "13px" },
        marginBottom: "15px",
        margin: "15px auto",
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Avatar alt="current user" src={currentUser.photoURL}></Avatar>
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
