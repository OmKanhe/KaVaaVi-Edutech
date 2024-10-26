import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  // Check directly from local storage
  const isLoggedIn = localStorage.getItem('emailId') !== null;

  // Render the Outlet if the user is logged in, otherwise redirect to Sign In
  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default ProtectedRoute;
