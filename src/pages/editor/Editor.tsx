/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { Route, Routes } from "react-router-dom";
import EducationQualification from "./blocks/EducationQualification";
import PersonalInfo from "./blocks/PersonalInfo";
import { useNavigate, useLocation } from "react-router-dom";
import EyeIcon from "../../assets/icons/EyeIcon";
import UserIcon from "../../assets/icons/UserIcon";
import BookIcon from "../../assets/icons/BookIcon";
import CaseIcon from "../../assets/icons/CaseIcon";
import FileIcon from "../../assets/icons/FileIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import CertificateIcon from "../../assets/icons/CertificateIcon";
import ProffesionalExperaince from "./blocks/ProffesionalExperiance";
import Certification from "./blocks/Certification";
import Skills from "./blocks/Skills";
import Declaration from "./blocks/Declaration";
import Language from "./blocks/Language";
import Speak from "../../assets/icons/Speak";

function Editor() {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    {
      name: "Personal Info",
      active:
        location.pathname === "/editor/personal-info" ||
        location.pathname === "/editor",
      route: "/editor/personal-info",
      icon: <UserIcon />,
    },
    {
      name: "Education Qualification",
      active: location.pathname === "/editor/education-qualification",
      route: "/editor/education-qualification",
      icon: <BookIcon />,
    },
    {
      name: "Proffesional Experiance",
      active: location.pathname === "/editor/proffessional-experiance",
      route: "/editor/proffessional-experiance",
      icon: <CaseIcon />,
    },
    {
      name: "Certification",
      active: location.pathname === "/editor/certification",
      route: "/editor/certification",
      icon: <CertificateIcon />,
    },
    {
      name: "Skills",
      active: location.pathname === "/editor/skills",
      route: "/editor/skills",
      icon: <SettingsIcon />,
    },
    {
      name: "Language",
      active: location.pathname === "/editor/language",
      route: "/editor/language",
      icon: <Speak />,
    },
    {
      name: "Declaration",
      active: location.pathname === "/editor/declaraion",
      route: "/editor/declaration",
      icon: <FileIcon />,
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-white rounded-md md:p-6 p-4 ">
        <div className="flex justify-between items-center">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>Home</li>
              <li>Editor</li>
              <li>
                {location.pathname === "/editor/personal-info" &&
                  "Personal Info"}
                {location.pathname === "/editor/education-qualification" &&
                  "Education Qualification"}
                {location.pathname === "/editor/proffessional-experiance" &&
                  "Proffessional Experiance"}
                {location.pathname === "/editor" && "Personal Info"}
                {location.pathname === "/editor/certification" &&
                  "Certification"}
                {location.pathname === "/editor/skills" && "Skills"}
                {location.pathname === "/editor/language" && "Languages"}
                {location.pathname === "/editor/declaration" && "Declaration"}
              </li>
            </ul>
          </div>
          <div>
            <div
              className=" cursor-pointer items-center hidden md:flex"
              onClick={() => navigate("/preview/design1")}
            >
              Preview <EyeIcon />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col mt-3 ">
          <div>
            <div>
              <input
                type="checkbox"
                id="route-modal"
                className="modal-toggle"
              />
              <div className="modal">
                <div className="modal-box">
                  <ul className="menu bg-base-100 w-full">
                    {routes.map((obj, i) => {
                      return (
                        <label htmlFor="route-modal" className="" key={i}>
                          <li
                            className={obj.active ? "bordered" : " "}
                            onClick={() => {
                              navigate(obj.route);
                            }}
                          >
                            <a>
                              {obj.icon} {obj.name}
                            </a>
                          </li>
                        </label>
                      );
                    })}
                  </ul>
                  <div className="modal-action"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 hidden md:block">
            <ul className="menu bg-base-100 w-full">
              {routes.map((obj, i) => {
                return (
                  <li
                    className={obj.active ? "bordered" : " "}
                    key={i}
                    onClick={() => {
                      navigate(obj.route);
                    }}
                  >
                    <a>
                      {obj.icon} {obj.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" w-full px-8">
            <Routes>
              <Route path="" element={<PersonalInfo />} />
              <Route path="personal-info" element={<PersonalInfo />} />
              <Route
                path="education-qualification"
                element={<EducationQualification />}
              />
              <Route
                path="proffessional-experiance"
                element={<ProffesionalExperaince />}
              />
              <Route path="certification" element={<Certification />} />
              <Route path="skills" element={<Skills />} />
              <Route path="language" element={<Language />} />
              <Route path="declaration" element={<Declaration />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
