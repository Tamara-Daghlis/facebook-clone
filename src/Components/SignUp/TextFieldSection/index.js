import React, { memo } from "react";
import CustomTextField from "../../CustomTextField";
import { Stack } from "@mui/material";

const TextFielSection = memo(
  ({ handleInput, firstName, lastName, email, password }) => {
    return (
      <div>
        <Stack direction={"row"} spacing={2}>
          <CustomTextField
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInput}
            value={firstName}
          />
          <CustomTextField
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInput}
            value={lastName}
          />
        </Stack>

        <CustomTextField
          type="email"
          placeholder="Email"
          onChange={handleInput}
          value={email}
          name="email"
          fullWidth
        />

        <CustomTextField
          type="password"
          placeholder="Password"
          onChange={handleInput}
          value={password}
          name="password"
          fullWidth
        />
      </div>
    );
  }
);

export default TextFielSection;
