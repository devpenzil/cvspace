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
      className={
        "w-full  md:py-4 top-0 print:hidden " +
        (location.pathname === "/" && "sticky")
      }
    >
      <div className="  px-4 py-3 md:rounded-md flex justify-between items-center bg-white mx-auto container nav">
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
        <div className="flex space-x-3 items-center justify-center">
          <label className=" swap swap-rotate md:hidden" htmlFor="route-modal">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
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
                      <label htmlFor="my-modal-3" className=" modal-button">
                        <a>Settings</a>
                      </label>
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
    </div>
  );
}

export default NavBar;
