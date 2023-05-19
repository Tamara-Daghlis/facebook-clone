import React from "react";
import Styled from "@emotion/styled";
import { Box, Typography, IconButton } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { DialogIconsData } from "../../../Data/DialogIconsData";

const CustomBox = Styled(Box)({
  width: "95%",
  padding: "10px",
  border: "1px solid rgb(235, 235, 235)",
  borderRadius: "7px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5px",
});

const DialogIcons = () => {
  const handleClick = () => {
    // Here I suppose to deal with the loading image to teh FireBase
    alert("yees");
  };
  return (
    <CustomBox>
      <Typography color={"#000"} fontWeight={700} paddingTop={1}>
        Add to your post
      </Typography>

      <Box>
        <IconButton onClick={handleClick}>
          <PermMediaIcon color="success" />
        </IconButton>

        {DialogIconsData.map(({ icon }) => (
          <IconButton>{icon}</IconButton>
        ))}
      </Box>
    </CustomBox>
  );
};

export default DialogIcons;
