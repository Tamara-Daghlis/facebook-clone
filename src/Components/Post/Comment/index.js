import React from "react";
import { Avatar, Typography, Box, Stack } from "@mui/material";
import styled from "@emotion/styled";

const CommentBox = styled(Box)({
  textAlign: "start",
  backgroundColor: "#eff2f5",
  padding: "10px",
  borderRadius: "15px",
});

const Comment = ({ comment }) => {
  const { user, text } = comment;

  return (
    text && (
      <Stack direction={"row"} spacing={1.5} padding={1.5}>
        <Avatar src={user?.imagePath} />
        <CommentBox>
          <Typography fontWeight={700} fontSize={"15px"}>
            {user?.name}
          </Typography>
          <Typography>{text}</Typography>
        </CommentBox>
      </Stack>
    )
  );
};

export default Comment;
