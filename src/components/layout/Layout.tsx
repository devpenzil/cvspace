import React from "react";
import NavBar from "../navbar/NavBar";

function Layout({ children }: any) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
