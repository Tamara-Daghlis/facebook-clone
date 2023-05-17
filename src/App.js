import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LogIn />
      </div>
    </AuthProvider>
  );
}

export default App;
