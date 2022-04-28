/* eslint-disable no-mixed-operators */
import React from "react";
import PreviewWrapper from "../../../components/previewwrapper/PreviewWrapper";
interface props {
  data: {
    bio?: string;
    email?: string;
    jobtitle?: string;
    name?: string;
    phone?: string;
    website?: string;
  };
}
function Intro({ data }: props) {
  return (
    <PreviewWrapper path="personal-info">
      {data && (
        <div>
          <div className="text-3xl font-bold">Personal Profile</div>
          <div className="mt-3">{data?.bio}</div>
        </div>
      )}
    </PreviewWrapper>
  );
}

export default Intro;
