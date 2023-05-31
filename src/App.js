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

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <div className="App">
          <Header />
          <HomePage />
        </div>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
