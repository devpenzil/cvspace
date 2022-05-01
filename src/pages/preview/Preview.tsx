/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PenIcons from "../../assets/icons/PenIcons";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DesignOne from "./blocks/DesignOne";
import DesignTwo from "./blocks/DesignTwo";
import DesignThree from "./blocks/DesignThree";
import DesignFour from "./blocks/DesignFour";
import DesignFive from "./blocks/DesignFive";
import FilterIcon from "../../assets/icons/FilterIcon";
import { onAuthStateChanged } from "firebase/auth";
import { auth, dbref } from "../../firebase/firebase";
import { child, get, ref } from "firebase/database";
import Loader from "../../components/loader/Loader";
import { viewOptions } from "../../types/previewTypes";
import PrintIcon from "../../assets/icons/PrintIcon";
function Preview() {
  const [preivewData, SetpreivewData] = useState<any>();
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    {
      name: "Design 1",
      route: "design1",
      active:
        location.pathname === "/preview/design1" ||
        location.pathname === "/preview",
    },
    // {
    //   name: "Design 2",
    //   route: "design2",
    //   active: location.pathname === "/preview/design2",
    // },
  ];
  const [viewoptions, SetSetViewoptions] = useState<viewOptions>({
    educational: true,
    proff: true,
    certification: true,
    skill: true,
    language: true,
    declaration: true,
  });
  const [userUid, SetuserUid] = useState<undefined | string>("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user !== null ? fetchdata(user?.uid) : navigate("/");
      user !== null && SetuserUid(user.uid);
    });
  }, []);
  const fetchdata = (id: any) => {
    get(child(ref(dbref), `users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          SetpreivewData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container mx-auto bg-white rounded-md p-6">
      <div className="flex justify-between items-center print:hidden">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Home</li>
            <li>preview</li>
          </ul>
        </div>
        <div className="flex space-x-5">
          <div>
            <label
              htmlFor="preview-options"
              className=" modal-button btn btn-circle btn-sm "
            >
              <FilterIcon />
            </label>
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate("/editor");
            }}
          >
            Editor <PenIcons />
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center space-x-4 overflow-x-auto px-3 print:hidden">
        {routes.map((obj, i) => {
          return (
            <button
              className={
                "btn btn-circle btn-primary " +
                (obj.active ? " " : "btn-outline")
              }
              key={i}
              onClick={() => {
                navigate(obj.route);
              }}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      {preivewData ? (
        <div
          className="mt-12 print:mt-0 bg-slate-600 p-5 print:p-0 rounded-lg"
          id="print-area"
        >
          <Routes>
            <Route
              path=""
              element={
                <DesignOne
                  data={preivewData !== null && preivewData}
                  view={viewoptions}
                  userUid={userUid}
                />
              }
            />
            <Route
              path="design1"
              element={
                <DesignOne
                  data={preivewData !== null && preivewData}
                  view={viewoptions}
                  userUid={userUid}
                />
              }
            />
            <Route
              path="design2"
              element={
                <DesignTwo
                  data={preivewData !== null && preivewData}
                  view={viewoptions}
                />
              }
            />
            <Route path="design3" element={<DesignThree />} />
            <Route path="design4" element={<DesignFour />} />
            <Route path="design5" element={<DesignFive />} />
          </Routes>
        </div>
      ) : (
        <Loader />
      )}
      <div className="fixed bottom-10 right-10">
        <button
          className="btn gap-2 flex items-center print:hidden"
          onClick={() => {
            window?.print();
          }}
        >
          Print <PrintIcon />
        </button>
      </div>
      <div>
        <input type="checkbox" id="preview-options" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <h3 className="text-lg font-bold">
              Choose what would you like to show in your Resume
            </h3>
            <div className="py-4">
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.educational}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        educational: !viewoptions.educational,
                      })
                    }
                  />
                  <span className="label-text">Education Qualification</span>
                </label>
              </div>
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.proff}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        proff: !viewoptions.proff,
                      })
                    }
                  />
                  <span className="label-text">Proffessional Experiance</span>
                </label>
              </div>
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.certification}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        certification: !viewoptions.certification,
                      })
                    }
                  />
                  <span className="label-text">Certification</span>
                </label>
              </div>
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.skill}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        skill: !viewoptions.skill,
                      })
                    }
                  />
                  <span className="label-text">Skill</span>
                </label>
              </div>
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.language}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        language: !viewoptions.language,
                      })
                    }
                  />
                  <span className="label-text">Language</span>
                </label>
              </div>
              <div className="form-control w-fit gap-4">
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={viewoptions.declaration}
                    onClick={() =>
                      SetSetViewoptions({
                        ...viewoptions,
                        declaration: !viewoptions.declaration,
                      })
                    }
                  />
                  <span className="label-text">Declaration</span>
                </label>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="preview-options" className="btn btn-primary">
                close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
