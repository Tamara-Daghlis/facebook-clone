import React from "react";
import { Card, Avatar, Typography, Stack, CardMedia } from "@mui/material";
import img from "../../img/download.png";

import PostLikesAndCommints from "./PostLikesAndCommints";

const Post = ({ userImage, userName }) => {
  return (
    <Card sx={{ width: "100%" }}>
      <Stack direction={"row"} spacing={2} margin={2}>
        <Avatar src={userImage} alt="user image"></Avatar>
        <Typography paddingTop={1.5} fontWeight={700}>
          Tamara Daghlis
        </Typography>
      </Stack>

      <Typography textAlign={"start"} margin={2}>
        "post text : hiiiiii"
      </Typography>

      <CardMedia component="img" image={img} alt="post" height={"250px"} />
      <PostLikesAndCommints />
    </Card>
  );
};

export default Post;
