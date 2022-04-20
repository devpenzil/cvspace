/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";

function NavBar() {
  const [userData, Setuserdata] = useState<any>(null);
  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  onAuthStateChanged(auth, (user) => {
    user !== null ? Setuserdata(user) : Setuserdata(null);
  });
  return (
    <div className=" w-full py-4 sticky top-0">
      <div className="  px-4 py-6 rounded-md flex justify-between items-center bg-white mx-auto container nav">
        <div>CVSpace</div>
        <div>
          {userData && (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <img
                    src={userData?.photoURL}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={signout}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
