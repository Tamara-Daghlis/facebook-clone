import React, { useState, useEffect } from "react";
import { Box, Avatar, InputBase, Typography, Stack } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Search = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  marginLeft: "10px",
  borderRadius: "33px",
  height: "20px",
});

const SearchResultBox = styled(Box)({
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 999,
  width: "20%",
  backgroundColor: "#fff",
  borderRadius: "4px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  padding: "10px",
  marginTop: "1px",
  minHeight: "300px",
});

const LeftHeader = () => {
  const [users, setUsers] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/fd4b6609-5c85-4cbd-b951-852ead2a3eec")
      .then((response) => {
        setUsers(response.data.friends);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredUsers = users?.filter((user) =>
    user.userName.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <Box sx={{ mr: "20px", display: { xs: "none", md: "flex" } }}>
      <Avatar src={"/images/Facebook_f_logo.svg.png"}></Avatar>
      <Search>
        <SearchIcon color="disabled" />
        <InputBase
          placeholder="Search Facebook"
          onChange={handleSearch}
          value={searchInput}
        />
      </Search>
      {searchInput && (
        <SearchResultBox>
          {filteredUsers?.map((result) => (
            <Stack direction={"row"} spacing={2} margin={2}>
              <Avatar src={result.userImage}></Avatar>
              <Typography color={"#000"} paddingTop={1}>
                {result.userName}
              </Typography>
            </Stack>
          ))}
        </SearchResultBox>
      )}
    </Box>
  );
};

export default LeftHeader;
