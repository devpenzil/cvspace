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
import SkillsLanguage from "./blocks/SkillsLanguage";
import Declaration from "./blocks/Declaration";

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
      name: "Skills & Language",
      active: location.pathname === "/editor/skills-and-langauge",
      route: "/editor/skills-and-langauge",
      icon: <SettingsIcon />,
    },
    {
      name: "Declaration",
      active: location.pathname === "/editor/declaraion",
      route: "/editor/declaraion",
      icon: <FileIcon />,
    },
  ];

  return (
    <>
      <div className="container mx-auto bg-white rounded-md p-6 ">
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
              </li>
            </ul>
          </div>
          <div>
            <div
              className="flex cursor-pointer items-center"
              onClick={() => navigate("/preview")}
            >
              Privew <EyeIcon />
            </div>
          </div>
        </div>

        <div className="flex mt-3">
          <div className="w-96">
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
              <Route path="skills-and-langauge" element={<SkillsLanguage />} />
              <Route path="declaraion" element={<Declaration />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editor;
