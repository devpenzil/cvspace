import React from "react";
import "./Navbar.scss";
function NavBar() {
  return (
    <div className=" w-full fixed top-0">
      <div className="my-4  px-4 py-6 rounded-md flex justify-between items-center bg-white mx-auto container nav">
        <div>CVstar</div>
        <div>Start with google</div>
      </div>
    </div>
  );
}

export default NavBar;
