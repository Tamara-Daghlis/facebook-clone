import React, { useRef, useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../../Context/AuthContext";
import { useChat } from "../../../Context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  const { user } = useChat();
  const isOwner = message?.senderId === currentUser.uid;

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "10px",
        flexDirection: isOwner ? "row" : "row-reverse",
        padding: "10px",
      }}
      ref={ref}
    >
      <Avatar src={isOwner ? currentUser.photoURL : user.user.photoURL} />
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
          {message?.text}
        </Typography>
        {message?.img && <img src={message?.img} alt="" />}
      </Box>
    </Box>
  );
};

export default Message;
