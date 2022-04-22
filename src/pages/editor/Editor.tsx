/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { Route, Routes } from "react-router-dom";
import EducationQualification from "./blocks/EducationQualification";
import PersonalInfo from "./blocks/PersonalInfo";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, SetUser] = useState<any>();
  onAuthStateChanged(auth, (user) => {
    user !== null ? SetUser(user.uid) : SetUser(null);
  });
  const routes = [
    {
      name: "Personal Info",
      active:
        location.pathname === "/editor/personal-info" ||
        location.pathname === "/editor",
      route: "/editor/personal-info",
    },
    {
      name: "Education Qualification",
      active: location.pathname === "/editor/education-qualification",
      route: "/editor/education-qualification",
    },
    {
      name: "Proffesional Experiance",
      active: false,
      route: "/editor/education-qualification",
    },
    {
      name: "Declaration",
      active: false,
      route: "/editor/education-qualification",
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-white rounded-md p-6 ">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Home</li>
            <li>Editor</li>
            <li>
              {location.pathname === "/editor/personal-info" && "Personal Info"}
              {location.pathname === "/editor/education-qualification" &&
                "Education Qualification"}
              {location.pathname === "/editor" && "Personal Info"}
            </li>
          </ul>
        </div>

        <div className="flex mt-3">
          <div className="w-96">
            {routes.map((obj, i) => {
              return (
                <div
                  key={i}
                  className={
                    "my-3 border-2 cursor-pointer p-3 rounded-md " +
                    (obj.active && "bg-stone-100")
                  }
                  onClick={() => navigate(obj.route)}
                >
                  {obj.name}
                </div>
              );
            })}
          </div>
          <div className=" w-full px-8">
            <Routes>
              <Route path="" element={<PersonalInfo uid={user} />} />
              <Route
                path="personal-info"
                element={<PersonalInfo uid={auth.currentUser?.uid} />}
              />
              <Route
                path="education-qualification"
                element={<EducationQualification />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
