import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Stack, Typography, InputBase } from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import FriendCard from "../FriendCard";

const Search = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff2f5",
  padding: "10px",
  marginLeft: "10px",
  borderRadius: "33px",
  height: "20px",
  width: "50%",
});
const FriendsContainer = styled(Container)({
  background: "#FFF",
  borderRadius: "8px",
  padding: "20px",
  minHeight: "calc(100vh - 64px)",
});

const FriendsBox = styled(Box)({
  background: "#E1E1E1",
  marginTop: "64px",
  padding: "30px",
  minHeight: "calc(100vh - 64px)",
});

const Friends = () => {
  const [friends, setFriends] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/fd4b6609-5c85-4cbd-b951-852ead2a3eec")
      .then((response) => {
        setFriends(response.data.friends);
      });
  }, []);

  const handleInputSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredFriends = friends?.filter((friend) =>
    friend.userName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <FriendsBox>
      <FriendsContainer>
        <Stack direction={"row"} spacing={{ xs: 3, md: 20 }}>
          <Typography fontSize={"25px"} fontWeight={700}>
            Friends
          </Typography>
          <Search>
            <SearchIcon color="disabled" />
            <InputBase onChange={handleInputSearch} />
          </Search>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          flexWrap={"wrap"}
          marginTop={"20px"}
          justifyContent="space-between"
          padding={1}
        >
          {filteredFriends?.map((friend) => {
            return (
              <FriendCard
                friend={friend}
                id={friend.id}
                setFriends={setFriends}
              />
            );
          })}
        </Stack>
      </FriendsContainer>
    </FriendsBox>
  );
};

export default Friends;
