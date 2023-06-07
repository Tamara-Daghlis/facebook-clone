import React, { useState } from "react";
import {
  Stack,
  Avatar,
  Box,
  InputBase,
  IconButton,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "@emotion/styled";
import Comment from "../Comment";
import { usePosts } from "../../../Context/PostsContext";
import { useAuth } from "../../../Context/AuthContext";

const WriteCommentBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#eff2f5",
  padding: "10px",
  marginLeft: "10px",
  borderRadius: "33px",
  height: "25px",
});

const Comments = ({ comments, id }) => {
  const [comment, setComment] = useState("");
  const { addComment } = usePosts();
  const { currentUser } = useAuth();

  const handleInputComment = (e) => {
    setComment(e.target.value);
  };

  const handelAddComment = () => {
    addComment(id, comment);
    setComment("");
  };
  return (
    <div>
      <Divider margin={2} variant="middle" />
      <Stack direction={"row"} spacing={1.5} padding={2}>
        <Avatar src={currentUser.photoURL}></Avatar>
        <WriteCommentBox>
          <InputBase
            placeholder="Write a comment..."
            onChange={handleInputComment}
            value={comment}
          />
          <IconButton onClick={handelAddComment}>
            <SendIcon />
          </IconButton>
        </WriteCommentBox>
      </Stack>

      <Box>
        {comments &&
          comments.map((comment) => {
            return <Comment comment={comment} key={comment.id} />;
          })}
      </Box>
    </div>
  );
};

export default Comments;
