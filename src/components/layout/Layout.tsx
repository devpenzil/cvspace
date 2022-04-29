import React from "react";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SettingsModal from "../settingmodal/SettingsModal";

function Layout({ children }: any) {
  return (
    <>
      <div className="w-full min-h-screen Home print:bg-white ">
        <NavBar />
        {children}
        <ToastContainer newestOnTop />
      </div>
      <div className="md:hidden w-full h-screen flex flex-col justify-center items-center Home print:hidden ">
        <div className="w-2/3 text-center font-bold text-lg">
          Sorry! You can't access the editor on your device, use a large device.
        </div>
      </div>
      <SettingsModal />
    </>
  );
}

export default Layout;
