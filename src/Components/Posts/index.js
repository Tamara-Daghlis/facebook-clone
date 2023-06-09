import React from "react";
import Post from "../Post";
import { Box, Typography } from "@mui/material";

const Posts = ({ width, posts }) => {
  return (
    <div>
      {posts?.length > 0 ? (
        posts?.map((post) => {
          return <Post post={post} key={post.id} width={width} />;
        })
      ) : (
        <Box
          sx={{
            background: "#fff",
            width: "100%",
            borderRadius: "8px",
            m: "25px 15px",
          }}
        >
          <Typography padding={"15px"}>No posts to show </Typography>
        </Box>
      )}
    </div>
  );
};

export default Posts;
