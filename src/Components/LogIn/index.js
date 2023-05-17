import React, { useState } from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import logoImg from "../../img/face-book.svg";
import CustomTextField from "../CustomTextField";
import styles from "./style.module.css";
import { useAuth } from "../../Context/AuthContext";

const LogIn = () => {
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { login } = useAuth();

  const { email, password } = logInInfo;
  const { imgStyle, formStyle } = styles;

  const handleInput = (e) => {
    setLogInInfo({
      ...logInInfo,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
    } catch (error) {
      setError("Failed to log in !");
      setLogInInfo({
        email: "",
        password: "",
      });
    }

    setLoading(false);
  }

  return (
    <Box sx={{ background: "#E1E1E1", padding: 2, height: "100vh" }}>
      <Box>
        <img src={logoImg} alt="facebook-logo" className={imgStyle}></img>
      </Box>
      <Box className={formStyle}>
        <form onSubmit={handleSubmit}>
          <Typography fontSize={"25px"} marginBottom={2}>
            Log Into Facebook
          </Typography>
          {error && (
            <Typography color={"error"} marginBottom={2}>
              {error}
            </Typography>
          )}
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
          <Button
            variant="contained"
            type="submit"
            size="large"
            disabled={loading}
            fullWidth
          >
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
