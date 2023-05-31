import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";
import styled from "@emotion/styled";

const StyledAppBar = styled(AppBar)({
  background: "#FFF",
  position: "sticky",
  boxShadow: "none",
  border: "1px solid #eff2f5",
  marginBottom: "10px",
});

const ChatWindowNav = () => {
  return (
    <StyledAppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Avatar src="" />
          <Typography marginLeft={1} paddingTop={1} color={"#000"}>
            friend name
          </Typography>
        </Box>

        <Stack direction={"row"} spacing={1}>
          {[
            <PhoneEnabledIcon color={"primary"} />,
            <VideoCallIcon color={"primary"} />,
            <InfoIcon color={"primary"} />,
          ].map((icon) => {
            return <IconButton>{icon}</IconButton>;
          })}
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ChatWindowNav;
