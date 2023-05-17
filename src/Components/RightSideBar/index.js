import React from "react";
import { Typography, Stack, List, Box } from "@mui/material";
import { RightSideBarIcons } from "../../Data/RightSideBarIcons";
import SideBarRow from "../SideBarItem";

const RightSideBar = ({ onlineUsers }) => {
  return (
    <div>
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
    </div>
  );
};

export default RightSideBar;
