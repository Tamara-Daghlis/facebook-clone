import React, { memo } from "react";
import CustomTextField from "../../CustomTextField";
import { Stack } from "@mui/material";

const TextFieldSection = memo(
  ({
    handleInput,
    firstName,
    lastName,
    email,
    password,
    validationMessage,
  }) => {
    const { firstNameError, lastNameError, emailError, passwordError } =
      validationMessage;
    return (
      <div>
        <Stack direction={"row"} spacing={2}>
          <CustomTextField
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleInput}
            value={firstName}
            validationMessage={firstNameError}
          />
          <CustomTextField
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleInput}
            value={lastName}
            validationMessage={lastNameError}
          />
        </Stack>

        <CustomTextField
          type="email"
          placeholder="Email"
          onChange={handleInput}
          value={email}
          name="email"
          fullWidth
          validationMessage={emailError}
        />

        <CustomTextField
          type="password"
          placeholder="Password"
          onChange={handleInput}
          value={password}
          name="password"
          fullWidth
          validationMessage={passwordError}
        />
      </div>
    );
  }
);

export default TextFieldSection;
