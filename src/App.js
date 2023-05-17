import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { AuthProvider } from "./Context/AuthContext";
import SideBar from "./Components/SideBar";
import RightSideBar from "./Components/RightSideBar";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <SideBar />
        <RightSideBar />
      </div>
    </AuthProvider>
  );
}

export default App;
