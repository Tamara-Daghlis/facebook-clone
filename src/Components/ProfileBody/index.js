import React from "react";
import { Box } from "@mui/material";
import ProfileFriendsSection from "../ProfileFriendsSection";
import NewPost from "../NewPost";
import Posts from "../Posts";

const ProfileBody = () => {
  return (
    <Box sx={{ background: "#E1E1E1" }}>
      <Box
        width={"75%"}
        sx={{
          margin: "0px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProfileFriendsSection />
        <Box sx={{ flex: 2.5 }}>
          <NewPost margin={"25px 15px"} width={"95%"} />
          <Posts margin={"25px 15px"} width={"100%"} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileBody;
