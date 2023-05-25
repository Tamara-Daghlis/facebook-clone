import React from "react";
import { Card, Avatar, Typography, Stack, CardMedia } from "@mui/material";

import PostActions from "./PostActions";

const Post = ({ userImage, userName, PostIamge }) => {
  return (
    <Card sx={{ width: { xs: "95%", md: "75%" }, margin: "15px auto" }}>
      <Stack direction={"row"} spacing={2} margin={2}>
        <Avatar src={userImage} alt="user image"></Avatar>
        <Typography paddingTop={1.5} fontWeight={700}>
          Tamara Daghlis
        </Typography>
      </Stack>

      <Typography textAlign={"start"} margin={2}>
        "post text : hiiiiii"
      </Typography>

      <CardMedia
        component="img"
        image={PostIamge}
        alt="post"
        height={"250px"}
      />
      <PostActions />
    </Card>
  );
};

export default Post;
