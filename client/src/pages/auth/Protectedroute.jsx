// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// function ProtectedRoute() {
//   // Check directly from local storage
//   const isLoggedIn = localStorage.getItem('emailId') !== null;

//   // Render the Outlet if the user is logged in, otherwise redirect to Sign In
//   return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
// }

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Layout from '../Layout';

const ProtectedRoute = () => {
  // Add your authentication logic here
  // This is a placeholder and should be replaced with your actual auth check
  const isAuthenticated = localStorage.getItem('emailId') !== null;

  if (!isAuthenticated) {
    // Redirect to sign-in page if not authenticated
    return <Navigate to="/sign-in" replace />;
  }

  // If authenticated, render the Layout component with the Outlet
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
