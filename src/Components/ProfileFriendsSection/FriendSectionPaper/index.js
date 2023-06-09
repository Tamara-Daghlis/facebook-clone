import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)({
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "120px",
  width: "120px",
});

const FriendSectionPaper = ({ friend }) => {
  return (
    <Box key={friend.id} sx={{ m: "0px 20px 20px 0px" }}>
      <StyledPaper
        Paper
        sx={{
          backgroundImage: `url(${friend.userImage})`,
        }}
      />
      <Typography textAlign={"start"} fontSize={"13px"} marginTop={"2px"}>
        {friend.userName}
      </Typography>
    </Box>
  );
};

export default FriendSectionPaper;
