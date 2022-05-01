import React from "react";
import NavBar from "../navbar/NavBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import SettingsModal from "../settingmodal/SettingsModal";
import HelpUI from "../helpui/HelpUI";
import InfoIcon from "../../assets/icons/InfoIcon";

function Layout({ children }: any) {
  return (
    <>
      <div className="w-full min-h-screen Home print:bg-white ">
        <NavBar />
        {children}
        <ToastContainer newestOnTop />
        <label
          htmlFor="helpui"
          className="btn modal-button btn-circle fixed md:bottom-10 md:left-10 bottom-5 left-5 print:hidden"
        >
          <InfoIcon />
        </label>
      </div>
      <HelpUI />
      <SettingsModal />
    </>
  );
}

export default Layout;
