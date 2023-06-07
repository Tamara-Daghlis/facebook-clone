import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, InputBase, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useAuth } from "../../../Context/AuthContext";
import { useChat } from "../../../Context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../config/firebase-config";
import { v4 as uuid } from "uuid";

const MessageInput = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  margin: "0px 10px",
  borderRadius: "33px",
  height: "20px",
  width: "90%",
});

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useAuth();
  const { user } = useChat();

  const handleSearch = (event) => {
    setText(event.target.value);
  };

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImg(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (img) {
      await updateDoc(doc(db, "chats", user.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          img: img,
        }),
      });
    } else {
      await updateDoc(doc(db, "chats", user.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [user.chatId + ".lastMessage"]: {
        text,
      },
      [user.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", user.user.uid), {
      [user.chatId + ".lastMessage"]: {
        text,
      },
      [user.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <Stack direction={"row"} spacing={2}>
      <MessageInput>
        <InputBase placeholder="Aa" onChange={handleSearch} value={text} />
      </MessageInput>
      <label htmlFor="upload-image">
        <IconButton component="span">
          <PermMediaIcon />
        </IconButton>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleUploadImage}
        />
      </label>

      <IconButton onClick={handleSend} disabled={!(text || img)}>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default Input;
