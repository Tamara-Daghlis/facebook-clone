import React from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "../../Components/SideBar";
import Stories from "../../Components/Stories";
import NewPost from "../../Components/NewPost";
import RightSideBar from "../../Components/RightSideBar";
import Posts from "../../Components/Posts";
import { usePosts } from "../../Context/PostsContext";

const HomePage = () => {
  const { posts } = usePosts();
  return (
    <Stack
      direction={"row"}
      marginTop={"64px"}
      sx={{
        background: "#E1E1E1",
        spacing: { xs: "0px", md: "32px" },
        textAlign: "center",
      }}
    >
      <SideBar />
      <Box sx={{ flex: 1.5 }}>
        <Stories />
        <Box>
          <NewPost width={"70%"} />
          <Posts width={"75%"} posts={posts} />
        </Box>
      </Box>

      <RightSideBar />
    </Stack>
  );
};

export default HomePage;
