import React from "react";
import { List } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import SideBarRow from "../SideBarIRow";
import { sideBareData } from "../../Data/sideBarData";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

export const SideBarBox = styled(Box)({
  top: "64px",
  height: "calc(100vh - 64px)",
  position: "sticky",
  marginTop: "20px",
  flex: ".5",
  "&:hover": { overflowY: "scroll" },
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
});

const SideBar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleClick = (route) => {
    navigate(route);
    console.log(route);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <SideBarBox
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <SideBarRow
        src={currentUser.photoURL}
        title={currentUser.displayName}
        onClick={handleProfileClick}
      />
      <List>
        {sideBareData.map(({ src, title, id, route }) => {
          return (
            <SideBarRow
              key={id}
              src={src}
              title={title}
              onClick={() => handleClick(route)}
            />
          );
        })}
      </List>
    </SideBarBox>
  );
};

export default SideBar;
