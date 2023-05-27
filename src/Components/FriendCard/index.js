import React, { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import styled from "@emotion/styled";

const CustomCard = styled(Card)({
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "5px",
  margin: "15px",
  borderRadius: "15px",
});

const CustomIconButton = styled(IconButton)({
  width: "50px",
  height: "40px",
  margin: "20px",
});

const FriendCard = ({ friend, id, setFriends }) => {
  const [open, setOpen] = useState(false);
  const { userName, userImage } = friend;

  const handelDeleteFriend = () => {
    setFriends((friends) => friends.filter((friend) => friend.id !== id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomCard sx={{ width: { xs: "95%", md: "calc(46% - 8px)" } }}>
      <Stack direction={"row"} spacing={0.3}>
        <Avatar
          src={userImage}
          variant="rounded"
          sx={{
            m: "15px",
            width: "70px",
            height: "70px",
            borderRadius: "10px",
          }}
        />

        <Typography paddingTop={4} fontSize={"15px"} fontWeight={700}>
          {userName}
        </Typography>
      </Stack>

      <Tooltip title="Unfriend" placement="left">
        <CustomIconButton onClick={handelDeleteFriend}>
          <PersonRemoveIcon />
        </CustomIconButton>
      </Tooltip>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Deleted successfully
        </Alert>
      </Snackbar>
    </CustomCard>
  );
};

export default FriendCard;
