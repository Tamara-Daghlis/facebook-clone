import React from "react";
import { Box, Avatar } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import styled from "@emotion/styled";
import ProfileTabs from "./ProfileTabs";
import UserInfo from "./UserInfo";
import ProfileHeaderButtons from "./ProfileHeaderButtons";

const CoverImage = styled(Box)(({ coverImage }) => ({
  width: "100%",
  height: "45%",
  borderRadius: "8px",
  background: "gray",
  backgroundImage: `url(${coverImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "0 auto",
  position: "relative",
  "@media (min-width: 900px)": {
    width: "75%",
  },
  padding: ".1px",
}));

const UserPorfileImage = styled(Avatar)({
  width: "150px",
  height: "150px",
  position: "absolute",
  bottom: "-120px",
  left: "40px",
  "@media (max-width:899px)": {
    bottom: "-70px",
  },
});

const ProfileHeader = () => {
  const { currentUser } = useAuth();

  return (
    <Box sx={{ height: "400px", marginTop: "60px" }}>
      <CoverImage
        coverImage={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPIb2laUUpX_OxX-8bDszMrymTnOgcRe5wQ&usqp=CAU"
        }
      >
        <UserPorfileImage src={currentUser.photoURL} />
        <UserInfo />
        {/* <ProfileHeaderButtons /> */}
      </CoverImage>
      <ProfileTabs />
    </Box>
  );
};

export default ProfileHeader;
