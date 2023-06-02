import React from "react";
import { sideBareData } from "../../Data/sideBarData";
import SideBarRow from "../SideBarIRow";
import { List } from "@mui/material";
import { useNavigate } from "react-router";

const SideBarMenu = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  const handleHomeClick = () => {
    navigate("Home");
  };

  return (
    <div>
      <SideBarRow
        src={"/images/Home.png"}
        title={"Home"}
        onClick={handleHomeClick}
      />
      <List>
        {sideBareData.map(({ src, title, id, route }) => {
          return (
            <SideBarRow
              key={id}
              src={src}
              title={title}
              onClick={route ? () => handleClick(route) : undefined}
            />
          );
        })}
      </List>
    </div>
  );
};

export default SideBarMenu;
