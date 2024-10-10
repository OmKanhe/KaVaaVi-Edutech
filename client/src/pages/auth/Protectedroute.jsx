import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protectedroute() {
  // const isLoggedIn = () =>{
  //     let candidate = localStorage.getItem('authToken')

  //     if(candidate!=null)
  //         return true;
  //     else
  //     return false;
  // }

  //   return  isLoggedIn() ? <Outlet/> : <Navigate to={"/sign-in"}/>
  return <Outlet />;
}

export default Protectedroute;
