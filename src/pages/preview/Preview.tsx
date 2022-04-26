import React from "react";
import PenIcons from "../../assets/icons/PenIcons";
import { useNavigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DesignOne from "./blocks/DesignOne";
import DesignTwo from "./blocks/DesignTwo";
import DesignThree from "./blocks/DesignThree";
import DesignFour from "./blocks/DesignFour";
import DesignFive from "./blocks/DesignFive";
import DownloadIcon from "../../assets/icons/DownloadIcon";
function Preview() {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    {
      name: "Design 1",
      route: "design1",
      active:
        location.pathname === "/preview/design1" ||
        location.pathname === "/preview",
      image:
        "https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Design 2",
      route: "design2",
      active: location.pathname === "/preview/design2",
      image:
        "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Design 3",
      route: "design3",
      active: location.pathname === "/preview/design3",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Design 4",
      route: "design4",
      active: location.pathname === "/preview/design4",
      image:
        "https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Design 5",
      route: "design5",
      active: location.pathname === "/preview/design5",
      image:
        "https://images.pexels.com/photos/5922530/pexels-photo-5922530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="container mx-auto bg-white rounded-md p-6">
      <div className="flex justify-between items-center">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Home</li>
            <li>preview</li>
          </ul>
        </div>
        <div>
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
      {/* <div className="flex h-32 justify-center items-center space-x-4 overflow-y-scroll px-3">
        {routes.map((obj, i) => {
          return (
            <div
              className={
                "min-w-[96px] h-24 bg-slate-200 rounded-lg hover:scale-110 cursor-pointer transition duration-300 text-sm font-bold bg-cover bg-center text-white " +
                (obj.active && "-translate-y-3")
              }
              key={i}
              onClick={() => {
                navigate(obj.route);
              }}
              style={{
                backgroundImage: `url(${obj.image})`,
              }}
            ></div>
          );
        })}
      </div> */}
      <div>
        <Routes>
          <Route path="" element={<DesignOne />} />
          <Route path="design1" element={<DesignOne />} />
          <Route path="design2" element={<DesignTwo />} />
          <Route path="design3" element={<DesignThree />} />
          <Route path="design4" element={<DesignFour />} />
          <Route path="design5" element={<DesignFive />} />
        </Routes>
      </div>
      <div className="absolute bottom-10 right-10">
        <button className="btn gap-2 flex items-center">
          Download <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

export default Preview;
