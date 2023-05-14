import React from "react";
import { Box, Typography, Divider, Button, Link } from "@mui/material";
import { useState } from "react";
import logoImg from "../../img/face-book.svg";
import styles from "./style.module.css";
import SignUpInfo from "./SignUpInfo";
import TextFielSection from "./TextFieldSection";
import SeclectSection from "./SelectSection";
import RadioSection from "./RadioSection";
import { validate } from "../SignUp/signUpValidation";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    month: "May",
    day: 7,
    year: 2023,
    gender: "",
  });

  const [validationMessage, setValidationMessage] = useState({});

  const { firstName, lastName, email, password, month, day, year, gender } =
    userInfo;

  const { imgStyle, formStyle } = styles;

  const handleInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const ValidateForm = () => {
    const errors = validate(userInfo);
    setValidationMessage(errors);
  };

  return (
    <Box sx={{ background: "#E1E1E1", padding: 2 }}>
      <Box>
        <img src={logoImg} alt="facebook-logo" className={imgStyle}></img>
      </Box>
      <Box className={formStyle}>
        <Typography fontSize={"25px"} fontWeight={700}>
          Create a new account
        </Typography>
        <Typography fontSize={"15px"} color={"#606770"}>
          It’s quick and easy.
        </Typography>

        <Divider variant="fullWidth" sx={{ m: 2 }} />
        <form onSubmit={handleSubmitForm}>
          <TextFielSection
            handleInput={handleInput}
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            validationMessage={validationMessage}
          />

          <Typography
            color="#606770"
            fontSize="12px"
            textAlign="start"
            marginBottom={1}
          >
            Birthday
          </Typography>

          <SeclectSection
            handleInput={handleInput}
            month={month}
            day={day}
            year={year}
          />

          <Typography
            color="#606770"
            fontSize="12px"
            textAlign="start"
            marginBottom={1}
            marginTop={1}
          >
            Gender
          </Typography>

          <RadioSection handleInput={handleInput} gender={gender} />

          <SignUpInfo />

          <Button
            variant="contained"
            size="large"
            color="success"
            type="submit"
            onClick={ValidateForm}
          >
            Sign Up
          </Button>

          <Link
            href="#"
            underline="none"
            color={"blue"}
            display={"block"}
            marginTop={2}
          >
            Already have an account?
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
