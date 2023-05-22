import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { AuthProvider } from "./Context/AuthContext";
import SideBar from "./Components/SideBar";
import RightSideBar from "./Components/RightSideBar";
import Story from "./Components/Story";
import image from "./img/download.png";
import PostDialog from "./Components/NewPost/PostDialog";
import NewPost from "./Components/NewPost";
import Post from "./Components/Post";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <HomePage />
      </div>
    </AuthProvider>
  );
}

export default App;
