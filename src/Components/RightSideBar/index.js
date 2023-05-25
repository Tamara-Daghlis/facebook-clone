import React, { useEffect, useState } from "react";
import { Typography, Stack, List, Box } from "@mui/material";
import { RightSideBarIcons } from "../../Data/RightSideBarIcons";
import SideBarRow from "../SideBarIRow";
import axios from "axios";
import Styled from "@emotion/styled";

const RightSideBar = () => {
  const [onlineUsers, setOnlineUsers] = useState();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/0fef7061-7354-4e58-b2af-96bf28ac42aa")
      .then((response) => {
        setOnlineUsers(response.data.onlineUsers);
      });
  }, []);

  const RightSideBarBox = Styled(Box)({
    top: "64px",
    height: "calc(100vh - 64px)",
    position: "sticky",
    flex: ".5",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#c0c0c0",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#ced0d4",
    },
    paddingRight: "20px",
  });

  return (
    <RightSideBarBox sx={{ display: { xs: "none", lg: "block" } }}>
      <Stack direction={"row"} spacing={8} marginTop={2}>
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
    </RightSideBarBox>
  );
};

export default RightSideBar;
