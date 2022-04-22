import React from "react";
import PenIcons from "../../assets/icons/PenIcons";
import { useNavigate } from "react-router-dom";
function Preview() {
  const navigate = useNavigate();
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
    </div>
  );
}

export default Preview;
