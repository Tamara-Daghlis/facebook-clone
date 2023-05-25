import React from "react";
import { recationsData } from "../../../Data/ReactionsData";
import { Stack, List, ListItemIcon, Typography, Divider } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { CardBox } from "../../NewPost";
const PostActions = () => {
  const handleLike = () => {
    alert("yeeeeees");
  };
  return (
    <div>
      <Stack direction={"row"} spacing={2} marginTop={1}>
        <List sx={{ textAlign: "start", ml: "5px" }}>
          {recationsData.map(({ icon }) => {
            return (
              <ListItemIcon sx={{ minWidth: "0px" }}>
                <img src={icon} alt="reaction"></img>
              </ListItemIcon>
            );
          })}
        </List>
        <Typography color={"gray"} paddingTop={0.8}>
          50
        </Typography>
      </Stack>
      <Divider margin={2} variant="middle" />
      <CardBox>
        <Stack direction={"row"} spacing={1} padding={2}>
          <ThumbUpOutlinedIcon />
          <Typography>like</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1} padding={2}>
          <ChatBubbleOutlineOutlinedIcon />
          <Typography>Comment</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1} padding={2}>
          <ReplyOutlinedIcon />
          <Typography>Send</Typography>
        </Stack>
      </CardBox>
    </div>
  );
};

export default PostActions;
