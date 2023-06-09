import React, { memo } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import styles from "./style.module.css";
import { Gender } from "../../../Data/signUpRadioData";

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
        sx={{ justifyContent: "space-between" }}
      >
        {Gender.map(({ value, label }) => {
          return (
            <FormControlLabel
              sx={{ margin: 0, justifyContent: "space-around" }}
              classes={{ root: radioStyle }}
              value={value}
              control={<Radio />}
              label={label}
              fullWidth
              labelPlacement="start"
            />
          );
        })}
      </RadioGroup>
    </div>
  );
});

export default RadioSection;
