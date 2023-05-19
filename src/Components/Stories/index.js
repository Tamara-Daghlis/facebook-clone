import React from "react";
import Story from "../Story";

const Stories = ({ Stories, CurrentUserIamge }) => {
  return (
    <div>
      <Story CurrentUserIamge={CurrentUserIamge}></Story>
      {Stories.map(({ friendImage, friendName, storyImage }) => {
        return (
          <Story
            friendIamge={friendImage}
            friendName={friendName}
            storyImage={storyImage}
          ></Story>
        );
      })}
    </div>
  );
};

export default Stories;
