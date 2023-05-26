import React from "react";
import Post from "../Components/Post";
import { usePosts } from "../Context/PostsContext";

const Posts = () => {
  const { posts } = usePosts();

  return (
    <div>
      {posts?.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
