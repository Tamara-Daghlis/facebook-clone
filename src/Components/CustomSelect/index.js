import React, { memo } from "react";
import { Select, MenuItem } from "@mui/material";

const CustomSelect = memo(({ menuItemData, onChange, value, name }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      onChange={onChange}
      name={name}
      size="small"
      fullWidth
    >
      {menuItemData.map((item) => {
        return <MenuItem value={item}>{item}</MenuItem>;
      })}
    </Select>
  );
});

export default CustomSelect;
