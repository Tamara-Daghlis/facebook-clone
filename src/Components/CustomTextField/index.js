import React, { memo } from "react";
import { TextField } from "@mui/material";

const CustomTextField = memo(
  ({ type, placeholder, onChange, value, name, validationMessage }) => {
    return (
      <TextField
        sx={{ mb: 1.5 }}
        type={type}
        variant="outlined"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        size="small"
        fullWidth
        error={validationMessage}
        helperText={validationMessage || " "}
        FormHelperTextProps={{
          style: {
            height: "5px",
          },
        }}
      />
    );
  }
);

export default CustomTextField;
