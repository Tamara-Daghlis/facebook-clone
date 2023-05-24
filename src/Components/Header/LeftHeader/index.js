import React, { useState } from "react";
import { Box, Avatar, InputBase } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  marginLeft: "10px",
  borderRadius: "33px",
  height: "20px",
});

const LeftHeader = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <Box sx={{ mr: "20px", display: { xs: "none", md: "flex" } }}>
      <Avatar src={"/images/Facebook_f_logo"}></Avatar>
      <Search>
        <SearchIcon color="disabled" />
        <InputBase placeholder="Search Facebook" onChange={handleSearch} />
      </Search>
    </Box>
  );
};

export default LeftHeader;
