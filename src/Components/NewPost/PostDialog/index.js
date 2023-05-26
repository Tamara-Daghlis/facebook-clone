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
import { usePosts } from "../../../Context/PostsContext";
import { useAuth } from "../../../Context/AuthContext";

const AddNewPostButton = styled(Button)({
  borderRadius: "20px",
  background: "rgb(243, 243, 243)",
  color: "gray",
  "&:hover": {
    background: "rgb(230, 230, 230)",
  },
});

const PostDialog = () => {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { addPost } = usePosts();
  const { currentUserInfo } = useAuth();
  const { currentUserImage, currentUserName } = currentUserInfo;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPostText("");
    setSelectedImage("");
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleAddPost = () => {
    addPost(postText, selectedImage);
    setPostText("");
    setSelectedImage("");
    setOpen(false);
  };

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
          <SideBarRow src={currentUserImage} title={currentUserName} />
          <TextField
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handlePostTextChange}
            name="postText"
            fullWidth
            value={postText}
            sx={{
              "& fieldset": { border: "none" },
              mb: selectedImage ? "10px" : "80px",
            }}
            placeholder={` What's on your mind, ${currentUserName} ?`}
          />

          {selectedImage && (
            <img
              src={selectedImage}
              alt="post"
              width={"300px"}
              height={"300px"}
            ></img>
          )}

          <DialogIcons setSelectedImage={setSelectedImage} />
          <DialogActions>
            <Button
              onClick={handleAddPost}
              color="primary"
              variant="contained"
              fullWidth
              disabled={postText === ""}
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
