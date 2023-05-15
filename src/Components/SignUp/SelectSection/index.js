import React, { memo } from "react";
import { Stack } from "@mui/material";
import CustomSelect from "../../CustomSelect";
import { monthData, daysData, yearsData } from "../../../Data/signUpSelectData";

const SelectSection = memo(({ handleInput, month, day, year }) => {
  return (
    <div>
      <Stack direction={"row"} spacing={2}>
        <CustomSelect
          menuItemData={monthData}
          onChange={handleInput}
          name="month"
          value={month}
        />
        <CustomSelect
          menuItemData={daysData}
          onChange={handleInput}
          name="day"
          value={day}
        />
        <CustomSelect
          menuItemData={yearsData}
          onChange={handleInput}
          name="year"
          value={year}
        />
      </Stack>
    </div>
  );
});

export default SelectSection;
