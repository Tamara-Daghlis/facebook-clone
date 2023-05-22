import React from "react";
import { Box } from "@mui/material";
import SideBar from "../../Components/SideBar";
import Stories from "../../Components/Stories";
import NewPost from "../../Components/NewPost";
import RightSideBar from "../../Components/RightSideBar";
import Post from "../../Components/Post";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ flex: 2 }}>
        <Stories />
        <NewPost />
        <Post />
      </Box>

      <RightSideBar />
    </Box>
  );
};

export default HomePage;
