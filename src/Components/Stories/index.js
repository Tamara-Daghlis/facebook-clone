import React, { useEffect, useState } from "react";
import Story from "../Story";
import { Stack } from "@mui/material";
import axios from "axios";
import Styled from "@emotion/styled";
import { useAuth } from "../../Context/AuthContext";

const Stories = ({ CurrentUserIamge }) => {
  const [stories, setStories] = useState();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/2d919564-0bdc-4881-9346-6f1ae779e37e")
      .then((response) => {
        setStories(response.data.stories);
      });
  }, []);

  const { currentUserInfo } = useAuth();
  const { currentUserImage } = currentUserInfo;

  const StoriesStack = Styled(Stack)({
    width: "650px",
    overflowY: "hidden",
    margin: "25px auto",
    "&:hover": {
      overflowX: "scroll",
    },
    "&::-webkit-scrollbar": {
      height: "10px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#c0c0c0",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      background: "#ced0d4",
    },
    padding: "10px",
  });
  return (
    <StoriesStack direction={"row"}>
      <Story CurrentUserIamge={currentUserImage}></Story>
      {stories?.map(({ userImage, userName, storyImage }) => {
        return (
          <Story
            friendIamge={userImage}
            friendName={userName}
            storyImage={storyImage}
          ></Story>
        );
      })}
    </StoriesStack>
  );
};

export default Stories;
