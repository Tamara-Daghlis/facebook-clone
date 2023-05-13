import React, { memo } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import styles from "./style.module.css";

const RadioSection = memo(({ gender, handleInput }) => {
  const { radioStyle } = styles;
  return (
    <div>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="gender"
        value={gender}
        onChange={handleInput}
      >
        <FormControlLabel
          className={radioStyle}
          value="female"
          control={<Radio />}
          label="Female"
          fullWidth
          labelPlacement="start"
        />
        <FormControlLabel
          className={radioStyle}
          value="male"
          control={<Radio />}
          label="Male"
          fullWidth
          labelPlacement="start"
        />
        <FormControlLabel
          className={radioStyle}
          value="custom"
          control={<Radio />}
          label="Custom"
          fullWidth
          labelPlacement="start"
        />
      </RadioGroup>
    </div>
  );
});

export default RadioSection;
