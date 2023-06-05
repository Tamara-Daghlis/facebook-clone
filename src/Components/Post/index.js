import React from "react";
import { Card, Avatar, Typography, Stack, CardMedia } from "@mui/material";
import PostActions from "./PostActions";
import Comments from "./Comments";

const Post = ({ post, width, margin }) => {
  const { user, text, image, likes, comments, id } = post;

  return (
    <Card
      sx={{
        width: { xs: "95%", md: `${width}` },
        margin: `${margin}`,
        borderRadius: "13px",
      }}
    >
      <Stack direction={"row"} spacing={2} margin={2}>
        <Avatar src={user.image} alt="user image"></Avatar>
        <Typography paddingTop={1.5} fontWeight={700}>
          {user.name}
        </Typography>
      </Stack>
      <Typography textAlign={"start"} margin={2}>
        {text}
      </Typography>
      {image && (
        <CardMedia component="img" image={image} alt="post" height={"250px"} />
      )}
      <PostActions likes={likes} />
      <Comments comments={comments} id={id} />
    </Card>
  );
};

export default Post;
