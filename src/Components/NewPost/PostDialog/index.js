import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  TextField,
  DialogContent,
  DialogActions,
  Avatar,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";
import SideBarRow from "../../SideBarIRow";
import DialogIcons from "../DialogIcons";
import CloseIcon from "@mui/icons-material/Close";

const AddNewPostButton = styled(Button)({
  borderRadius: "20px",
  background: "rgb(243, 243, 243)",
  color: "gray",
  "&:hover": {
    background: "rgb(230, 230, 230)",
  },
});

const PostDialog = ({ currentUserName, CurrentUserImage }) => {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.vlaue);
  };

  const handleAddPost = () => {};

  return (
    <div>
      <AddNewPostButton variant="contained" onClick={handleClickOpen} fullWidth>
        {` What's on your mind, ${currentUserName} ?`}
      </AddNewPostButton>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <Stack direction={"row"} spacing={45}>
          <DialogTitle color={"#000"} fontWeight={700}>
            Create Post
          </DialogTitle>

          <DialogActions>
            <Avatar>
              <CloseIcon onClick={handleClose} />
            </Avatar>
          </DialogActions>
        </Stack>

        <Divider />

        <DialogContent>
          <SideBarRow src={CurrentUserImage} title={currentUserName} />
          <TextField
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={postText}
            onChange={handlePostTextChange}
            name="postText"
            fullWidth
            sx={{
              "& fieldset": { border: "none" },
              mb: "80px",
            }}
            placeholder={` What's on your mind, ${currentUserName} ?`}
          />

          <DialogIcons />
          <DialogActions>
            <Button
              onClick={handleAddPost}
              color="primary"
              variant="contained"
              fullWidth
            >
              Post
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostDialog;
