/* eslint-disable @typescript-eslint/no-unused-expressions */

import { Route, Routes } from "react-router-dom";
import EducationQualification from "./blocks/EducationQualification";
import PersonalInfo from "./blocks/PersonalInfo";
import { useNavigate, useLocation } from "react-router-dom";

function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    {
      name: "Personal Info",
      active: location.pathname === "/editor/personal-info",
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
      <div className="container mx-auto bg-white rounded-md p-6">
        <div className="text-2xl font-bold">Editor</div>
        <div className="flex">
          <div className="w-96">
            {routes.map((obj, i) => {
              return (
                <div
                  key={i}
                  className={
                    "my-2 border-2 cursor-pointer mx-2 p-3 rounded-md " +
                    (obj.active && "bg-stone-100")
                  }
                  onClick={() => navigate(obj.route)}
                >
                  {obj.name}
                </div>
              );
            })}
          </div>
          <div className=" w-full px-4 py-4">
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/personal-info" element={<PersonalInfo />} />
              <Route
                path="/education-qualification"
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
