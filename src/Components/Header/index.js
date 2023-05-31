import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import SideBarMenu from "../SideBarMenu";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <AppBar sx={{ background: "#FFF" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <LeftHeader />
          <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuOutlinedIcon />
          </IconButton>
          <MiddleHeader />
          <RightHeader />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <SideBarMenu />
      </Drawer>
    </div>
  );
};

export default Header;
