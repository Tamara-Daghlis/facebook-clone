import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, InputBase, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PermMediaIcon from "@mui/icons-material/PermMedia";

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
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <Stack direction={"row"} padding={2}>
      <MessageInput>
        <InputBase placeholder="Aa" onChange={handleSearch} />
      </MessageInput>
      <label htmlFor="upload-image">
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          //   onChange={handleImageUpload}
        />
        <IconButton>
          <PermMediaIcon />
        </IconButton>
      </label>
      <IconButton>
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default Input;
