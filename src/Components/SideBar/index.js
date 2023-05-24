import React from "react";
import { List } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import SideBarRow from "../SideBarIRow";
import { sideBareData } from "../../Data/sideBarData";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const SideBarBox = styled(Box)({
  top: "64px",
  height: "calc(100vh - 64px)",
  position: "sticky",
  paddingTop: "20px",
  flex: ".5",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#cacaca",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    background: "#888",
  },
});

const SideBar = () => {
  const { currentUser } = useAuth;

  return (
    <SideBarBox
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      {/* the src and user name should taken from current user  */}
      <SideBarRow />
      <List>
        {sideBareData.map(({ src, title, id }) => {
          return <SideBarRow key={id} src={src} title={title} />;
        })}
      </List>
    </SideBarBox>
  );
};

export default SideBar;
