import React from "react";
import {
  Card,
  Avatar,
  CardMedia,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";

const CustomAvatar = styled(Avatar)({
  margin: "10px",
  border: "5px solid #2e81f4",
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "25px",
  height: "25px",
});

const IconAvatar = styled(Avatar)({
  background: "#0000FF",
  width: "25px",
  height: "25px",
  position: "absolute",
  bottom: "25px",
  left: "40px",
});

const CustomCard = styled(Card)({
  width: "110px",
  height: "200px",
  boxShadow: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
  borderRadius: "10px",
  transition: "transform 100ms ease-in",
  position: "relative",
  "&:hover": {
    transform: "scale(1.07)",
  },
  marginRight: "10px",
});

const CustomTypography = styled(Typography)({
  position: "absolute",
  bottom: "2px",
  left: "7px",
});

const Story = ({ storyImage, CurrentUserImage, friendImage, friendName }) => {
  return (
    <Box>
      <CustomCard>
        <CardMedia
          component="img"
          image={storyImage || CurrentUserImage}
          alt="Paella dish"
          height={storyImage ? "100%" : "80%"}
        ></CardMedia>
        {friendImage && <CustomAvatar alt="" src={friendImage}></CustomAvatar>}
        {CurrentUserImage && (
          <IconAvatar color="primary">
            <AddIcon />
          </IconAvatar>
        )}
        -
        <CardContent>
          <CustomTypography
            color={friendName ? "#FFF" : "#000"}
            fontSize={"12px"}
          >
            {friendName || "Create Story"}
          </CustomTypography>
        </CardContent>
      </CustomCard>
    </Box>
  );
};

export default Story;
