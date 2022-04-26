/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, Setuserdata] = useState<any>(null);
  const signout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user !== null ? Setuserdata(user) : Setuserdata(null);
    });
  }, []);

  return (
    <div
      className={"w-full py-4 top-0 " + (location.pathname === "/" && "sticky")}
    >
      <div className="  px-4 py-3 rounded-md flex justify-between items-center bg-white mx-auto container nav">
        <div>
          <button
            className="btn btn-ghost"
            onClick={() => {
              navigate("/");
            }}
          >
            CVSpace
          </button>
        </div>
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
                    <a>Settings</a>
                  </li>
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
