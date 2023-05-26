import React from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "../../Components/SideBar";
import Stories from "../../Components/Stories";
import NewPost from "../../Components/NewPost";
import RightSideBar from "../../Components/RightSideBar";
import Posts from "../../Posts";

const HomePage = () => {
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
        <NewPost />
        <Posts />
      </Box>

      <RightSideBar />
    </Stack>
  );
};

export default HomePage;
