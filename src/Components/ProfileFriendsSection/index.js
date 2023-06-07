import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Link, Paper } from "@mui/material";
import axios from "axios";
import FriendSectionPaper from "./FriendSectionPapre";
import styled from "@emotion/styled";

const ProfileFriendsSectionBox = styled(Box)({
  borderRadius: "8px",
  padding: "20px 0px",
  flex: 1.1,
  background: "#FFF",
  marginTop: "20px",
  height: "12%",
  position: "sticky",
  top: "50px",

  "@media (max-width: 899px)": {
    display: "none",
  },
});

const ProfileFriendsSection = () => {
  const [friends, setFriends] = useState();
  const displayedFriends = friends?.slice(0, 6);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/fd4b6609-5c85-4cbd-b951-852ead2a3eec")
      .then((response) => {
        setFriends(response.data.friends);
      });
  }, []);
  return (
    <ProfileFriendsSectionBox>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between", p: "0px 20px" }}
      >
        <Typography fontWeight={700}>Friends</Typography>
        <Link href="/friends" underline="none" marginRight={"20px"}>
          See all friends
        </Link>
      </Stack>
      <Typography
        textAlign={"start"}
        color={"gray"}
        margin={"5px  0px"}
        padding={"0px 20px"}
      >{`${friends?.length} friends`}</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {displayedFriends?.map((friend) => {
          return <FriendSectionPaper friend={friend} />;
        })}
      </Box>
    </ProfileFriendsSectionBox>
  );
};

export default ProfileFriendsSection;
