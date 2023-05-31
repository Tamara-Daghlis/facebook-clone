import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { AuthProvider } from "./Context/AuthContext";
import SideBar from "./Components/SideBar";
import RightSideBar from "./Components/RightSideBar";
import Story from "./Components/Story";

import PostDialog from "./Components/NewPost/PostDialog";
import NewPost from "./Components/NewPost";
import Post from "./Components/Post";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import PostsProvider from "./Context/PostsContext";
import FriendCard from "./Components/FriendCard";
import Friends from "./Components/Friends";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileFriendsSection from "./Components/ProfileFriendsSection";
import ProfileBody from "./Components/ProfileBody";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <div className="App">
          <Header />
          {/* <HomePage /> */}
          {/* <Friends /> */}
          <ProfileHeader />
          <ProfileBody />
        </div>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
