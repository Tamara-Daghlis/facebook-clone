import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const PostsContext = createContext();

export function usePosts() {
  return useContext(PostsContext);
}

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a8c2716c-c46b-42dc-8733-38a919175231")
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
        name: currentUser.displayName,
        image: currentUser.photoURL,
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
        name: currentUser.displayName,
        imagePath: currentUser.photoURL,
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
