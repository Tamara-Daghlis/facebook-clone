import React, { useState } from "react";
import { recationsData } from "../../../Data/ReactionsData";
import {
  Stack,
  List,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { CardBox } from "../../NewPost";

const PostActions = ({ likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [likeColor, setLikeColor] = useState("");

  const handleLike = () => {
    if (likeCount === likes) {
      setLikeCount(likeCount + 1);
      setLikeColor("primary");
    } else {
      setLikeCount(likeCount - 1);
      setLikeColor("");
    }
  };
  return (
    <div>
      {likeCount !== 0 && (
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
            {likeCount}
          </Typography>
        </Stack>
      )}
      <Divider margin={2} variant="middle" />
      <CardBox>
        <Stack direction={"row"} spacing={1} padding={2}>
          <IconButton onClick={handleLike}>
            <ThumbUpAltIcon color={likeColor} />
            <Typography marginLeft={1}>like</Typography>
          </IconButton>
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
