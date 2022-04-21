import React from "react";
import AppBtn from "../../../components/appbtn/AppBtn";
import AppInput from "../../../components/appinput/AppInput";
import AppTextArea from "../../../components/apptextarea/AppTextArea";
import ElementHeader from "../../../components/elementheader/ElementHeader";

function EducationQualification() {
  return (
    <div className="container mx-auto">
      <ElementHeader title="Educational Qualification" />
      <div className="w-full flex justify-around">
        <div className="w-1/3 pt-6 ">
          <div>
            <div className="avatar cursor-pointer  flex justify-center">
              <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  className="mx-auto"
                  alt="user"
                />
              </div>
            </div>
          </div>
          <AppInput label="Name" />
          <AppInput label="Email" />
          <AppInput label="Phone" />
          <AppInput label="Website" />
        </div>
        <div className="w-1/3">
          <AppInput label="Job Title" />
          <AppTextArea />
          <AppBtn label="Save" />
        </div>
      </div>
    </div>
  );
}

export default EducationQualification;
