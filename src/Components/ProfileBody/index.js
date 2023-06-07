import React from "react";
import { Box } from "@mui/material";
import ProfileFriendsSection from "../ProfileFriendsSection";
import NewPost from "../NewPost";
import Posts from "../Posts";
import { usePosts } from "../../Context/PostsContext";
import { useAuth } from "../../Context/AuthContext";

const ProfileBody = () => {
  const { posts } = usePosts();
  const { currentUser } = useAuth();
  const filterdPosts = posts?.filter(
    (post) => post.user.id === currentUser.uid
  );
  return (
    <Box sx={{ background: "#E1E1E1" }}>
      <Box
        sx={{
          margin: "0px auto",
          display: { sm: "block", md: "flex" },
          justifyContent: "space-between",
          width: { sm: "100%", md: "75%" },
          padding: "5px 0px 30px 0px",
        }}
      >
        <ProfileFriendsSection />
        <Box sx={{ flex: 2.5 }}>
          <NewPost margin={"25px 15px"} width={"95%"} />
          <Posts margin={"25px 15px"} width={"100%"} posts={filterdPosts} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileBody;
