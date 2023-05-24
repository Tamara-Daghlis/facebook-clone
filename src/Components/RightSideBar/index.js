import React from "react";
import { Typography, Stack, List, Box } from "@mui/material";
import { RightSideBarIcons } from "../../Data/RightSideBarIcons";
import SideBarRow from "../SideBarIRow";

const RightSideBar = ({ onlineUsers }) => {
  return (
    <Box
      sx={{
        flex: 0.1,
        background: "red",
        display: { xs: "none", lg: "block" },
      }}
    >
      <Stack direction={"row"} spacing={14}>
        <Typography color=" #808080">Contacts</Typography>
        <Stack direction={"row"} spacing={2}>
          {RightSideBarIcons.map(({ icon }) => {
            return <Box>{icon}</Box>;
          })}
        </Stack>
      </Stack>

      <List>
        {onlineUsers?.map(({ userName, userImage }) => {
          return <SideBarRow title={userName} src={userImage} online />;
        })}
      </List>
    </Box>
  );
};

export default RightSideBar;
