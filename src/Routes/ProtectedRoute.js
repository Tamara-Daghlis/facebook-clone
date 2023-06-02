import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to={"/"} /> : <Outlet />;
};

export default ProtectedRoute;
