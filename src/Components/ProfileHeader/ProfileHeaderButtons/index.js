import React from "react";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import styled from "@emotion/styled";

const StyledButton = styled(Button)({
  textTransform: "none",
  background: "#E5E4E2",
  color: "#000",
  "&:hover": {
    background: "#D3D3D3",
  },
});

const ButtonsBox = styled(Box)({
  position: "absolute",
  bottom: "-110px",
  left: "70%",

  "@media (max-width:899px)": {
    position: "static",
    margin: "10px 0px 0px 0px",
    width: "100%",

    ".MuiButton-root": {
      width: "47%",
      height: "40px",
    },
  },
});

const ProfileHeaderButtons = () => {
  return (
    <ButtonsBox>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          textTransform: "none",
          m: "10px",
        }}
        size="small"
      >
        Add to story
      </Button>

      <StyledButton variant="contained" startIcon={<EditIcon />} size={"small"}>
        Edit profile
      </StyledButton>
    </ButtonsBox>
  );
};

export default ProfileHeaderButtons;
