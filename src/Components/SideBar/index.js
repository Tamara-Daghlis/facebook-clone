import React from "react";
import { List } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";
import SideBarRow from "../SideBarItem";
import { sideBareData } from "../../Data/sideBarData";
import styles from "./style.module.css";

const SideBar = () => {
  const { currentUser } = useAuth;

  const { sideBarStyle } = styles;

  return (
    <div className={sideBarStyle}>
      {/* the src and user name should taken from current user  */}
      <SideBarRow />
      <List>
        {sideBareData.map(({ src, title, id }) => {
          return <SideBarRow key={id} src={src} title={title} />;
        })}
      </List>
    </div>
  );
};

export default SideBar;
