import React from "react";
import { Typography, Link } from "@mui/material";

const SignUpInfo = () => {
  return (
    <>
      <Typography
        color="#777"
        fontSize="11px"
        textAlign="start"
        marginTop={1}
        marginBottom={1}
      >
        People who use our service may have uploaded your contact information to
        Facebook.
        <Link href="#" underline="hover">
          Learn more.
        </Link>
      </Typography>
      <Typography
        color="#777"
        fontSize="11px"
        textAlign="start"
        marginBottom={2}
      >
        By clicking Sign Up, you agree to our
        <Link href="#" underline="hover">
          Terms
        </Link>
        ,
        <Link href="#" underline="hover">
          Privacy Policy
        </Link>
        and
        <Link href="#" underline="hover">
          Cookies Policy
        </Link>
        . You may receive SMS Notifications from us and can opt out any time.
      </Typography>
    </>
  );
};

export default SignUpInfo;
