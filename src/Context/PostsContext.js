import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  const { currentUser, currentUserInfo } = useAuth();
  const { currentUserName, currentUserImage } = currentUserInfo;

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/f7efbaf8-c050-4d9c-a23b-d520896dea8a")
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addPost(postText, selectedImage) {
    const newPost = {
      user: {
        id: currentUser.uid,
        name: currentUserName,
        image: currentUserImage,
      },
      id: posts.length + 1,
      text: postText,
      image: selectedImage,
      likes: 0,
      comments: [],
    };
    if (postText !== "") {
      setPosts((posts) => [newPost, ...posts]);
    }
  }

  function addComment(postId, comment) {
    const selectedPost = posts.filter((post) => post.id === postId)[0];

    const newComment = {
      id: selectedPost.comments.length + 1,
      user: {
        name: currentUserName,
        imagePath: currentUserImage,
      },
      text: comment,
    };

    const newPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [newComment, ...post.comments],
        };
      } else {
        return post;
      }
    });

    setPosts(newPosts);
  }

  const value = {
    posts,
    addPost,
    addComment,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
