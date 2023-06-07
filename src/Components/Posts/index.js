import React from "react";
import Post from "../Post";
import { usePosts } from "../../Context/PostsContext";

const Posts = ({ margin, width, posts }) => {
  return (
    <div>
      {posts?.map((post) => {
        return <Post post={post} key={post.id} margin={margin} width={width} />;
      })}
    </div>
  );
};

export default Posts;
