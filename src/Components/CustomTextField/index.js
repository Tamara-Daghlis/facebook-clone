import React, { memo } from "react";
import { TextField } from "@mui/material";

const CustomTextField = memo(({ type, placeholder, onChange, value, name }) => {
  return (
    <TextField
      sx={{ mb: 2 }}
      type={type}
      variant="outlined"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      size="small"
      fullWidth
    />
  );
});

export default CustomTextField;
