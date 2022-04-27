import React from "react";
import userPlaceholder from "../../../assets/placeholder.png";
import ContactMe from "../d1block/ContactMe";

function DesignOne() {
  return (
    <div className="flex w-full">
      <div className="bg-sky-200 w-1/3 p-8 rounded-lg">
        <div>
          <div className="avatar cursor-pointer  flex justify-center">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={userPlaceholder} className="mx-auto" alt="user" />
            </div>
          </div>
        </div>
        <ContactMe />
      </div>
      <div className=" w-2/3">hghj</div>
    </div>
  );
}

export default DesignOne;
