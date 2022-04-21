import React from "react";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Layout({ children }: any) {
  return (
    <>
      <div className="w-full min-h-screen Home hidden md:block">
        <NavBar />
        {children}
        <ToastContainer />
      </div>
      <div className="md:hidden">error</div>
    </>
  );
}

export default Layout;
