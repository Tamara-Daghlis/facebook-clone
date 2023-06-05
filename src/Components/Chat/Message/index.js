import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Message = ({ isOwner }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "10px",
        flexDirection: isOwner ? "row" : "row-reverse",
        padding: "10px",
      }}
    >
      <Avatar src="" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: isOwner ? "flex-start" : "flex-end",
          marginLeft: isOwner ? "10px" : "0px",
          marginRight: isOwner ? "0px" : "10px",
        }}
      >
        <Typography
          sx={{
            background: isOwner ? "#eff2f5" : "#6A5ACD",
            color: isOwner ? "#000" : "#FFF",
            borderRadius: isOwner ? "0px 10px 10px 10px" : "10px 0px 10px 10px",
            maxWidth: "max-content",
            padding: "10px",
            marginBottom: "5px",
          }}
        >
          Message Content
        </Typography>
        <img src="/images/download.png" alt="" />
      </Box>
    </Box>
  );
};

export default Message;
