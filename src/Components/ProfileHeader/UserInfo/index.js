import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, AvatarGroup, Avatar } from "@mui/material";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";

const CustomBox = styled(Box)({
  textAlign: "start",
  position: "absolute",
  bottom: "-120px",
  left: "220px",
  padding: "1px",
  "@media (max-width:899px)": {
    position: "static",
    margin: "270px 0px 0px 30px",
    width: "100%",
  },
});

const UserInfo = () => {
  const [friends, setFriends] = useState();
  const { currentUserInfo } = useAuth();
  const { currentUserName } = currentUserInfo;

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/fd4b6609-5c85-4cbd-b951-852ead2a3eec")
      .then((response) => {
        setFriends(response.data.friends);
      });
  }, []);
  return (
    <CustomBox>
      <Typography fontSize={"25px"} fontWeight={700}>
        {currentUserName}
      </Typography>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Typography
          fontSize={"15px"}
          color={"gray"}
        >{`${friends?.length} friends`}</Typography>

        <AvatarGroup max={6}>
          {friends?.map((friend) => {
            return <Avatar alt="friend" src={friend.userImage} />;
          })}
        </AvatarGroup>
      </Box>
    </CustomBox>
  );
};

export default UserInfo;
