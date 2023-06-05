import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import HomePage from "../Pages/HomePage";
// import ProfilePage from "../Pages/FriendsPage";
import ChatPage from "../Pages/ChatPage";
import FriendsPage from "../Pages/FriendsPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/Home" element={<HomePage />} />
            {/* <Route path="profile" element={<ProfilePage />} /> */}
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/friends" element={<FriendsPage />} />
          </Route>
          {/* 
          <Route path="*" element={<PageNotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
