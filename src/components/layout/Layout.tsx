import React from "react";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SettingsModal from "../settingmodal/SettingsModal";

function Layout({ children }: any) {
  return (
    <>
      <div className="w-full min-h-screen Home hidden md:block">
        <NavBar />
        {children}
        <ToastContainer newestOnTop />
      </div>
      <div className="md:hidden">error</div>
      <SettingsModal />
    </>
  );
}

export default Layout;
