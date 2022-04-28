import React from "react";
import PenIcons from "../../assets/icons/PenIcons";
import { useNavigate } from "react-router-dom";
function PreviewWrapper({ children, path }: any) {
  const navigate = useNavigate();
  return (
    <div className=" rounded-lg cursor-pointer relative group overflow-hidden hover:ring-2 select-none">
      {children}
      <button
        onClick={() => {
          navigate(`/editor/${path}`);
        }}
        className="absolute -bottom-20 group-hover:bottom-5 transition duration-700 ease-in-out right-5 btn btn-circle btn-primary flex  justify-center items-center"
      >
        <PenIcons />
      </button>
    </div>
  );
}

export default PreviewWrapper;
