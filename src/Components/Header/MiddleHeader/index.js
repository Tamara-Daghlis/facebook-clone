import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { MiddleHeaderData } from "../../../Data/MiddleHeaderData";
import { useNavigate } from "react-router";

const MiddleHeader = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/Home");
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon tabs"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {MiddleHeaderData.map(({ icon, lable }, index) => {
        return (
          <Tab
            value={index}
            icon={icon}
            aria-label={lable}
            onClick={value === 0 ? handleClick : undefined}
          />
        );
      })}
    </Tabs>
  );
};

export default MiddleHeader;
