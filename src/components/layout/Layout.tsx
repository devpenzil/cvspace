import React from "react";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Layout({ children }: any) {
  return (
    <div>
      <NavBar />
      {children}
      <ToastContainer />
    </div>
  );
}

export default Layout;
