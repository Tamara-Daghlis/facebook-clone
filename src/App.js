import "./App.css";
import { AuthProvider } from "./Context/AuthContext";
import PostsProvider from "./Context/PostsContext";
import AppRoutes from "./Routes/AppRoutes";
import ChatProvider from "./Context/ChatContext";

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <PostsProvider>
          <div className="App">
            <AppRoutes />
          </div>
        </PostsProvider>
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;
