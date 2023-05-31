import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { MiddleHeaderData } from "../../../Data/MiddleHeaderData";

const MiddleHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon tabs"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      {MiddleHeaderData.map(({ icon, lable }) => {
        return <Tab icon={icon} aria-label={lable} />;
      })}
    </Tabs>
  );
};

export default MiddleHeader;
