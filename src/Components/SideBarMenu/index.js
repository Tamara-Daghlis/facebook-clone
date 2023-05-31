import React from "react";
import { sideBareData } from "../../Data/sideBarData";
import SideBarRow from "../SideBarIRow";
import { List } from "@mui/material";

const SideBarMenu = () => {
  return (
    <div>
      <SideBarRow src={"/images/Home.png"} title={"Home"} />
      <List>
        {sideBareData.map(({ src, title, id }) => {
          return <SideBarRow key={id} src={src} title={title} />;
        })}
      </List>
    </div>
  );
};

export default SideBarMenu;
