import React, { useState } from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import logoImg from "../../img/face-book.svg";
import CustomTextField from "../CustomTextField";
import styles from "./style.module.css";

const LogIn = () => {
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = logInInfo;
  const { imgStyle, formStyle } = styles;

  const handleInput = (e) => {
    setLogInInfo({
      ...logInInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box sx={{ background: "#E1E1E1", padding: 2, height: "100vh" }}>
      <Box>
        <img src={logoImg} alt="facebook-logo" className={imgStyle}></img>
      </Box>
      <Box className={formStyle}>
        <form>
          <Typography fontSize={"25px"} marginBottom={2}>
            Log Into Facebook
          </Typography>
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
            name="email"
            fullWidth
          />
          <Button variant="contained" type="submit" size="large" fullWidth>
            Log In
          </Button>
          <Link
            href="#"
            underline="hover"
            display={"inline-block"}
            marginTop={2}
          >
            Forgot account? ·
          </Link>
          <Link
            href="#"
            underline="hover"
            display={"inline-block"}
            marginTop={2}
          >
            Sign up for Facebook
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default LogIn;
