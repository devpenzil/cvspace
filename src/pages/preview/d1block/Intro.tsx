/* eslint-disable no-mixed-operators */
import React from "react";
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
  console.log(data?.bio);

  return (
    <>
      {data?.bio !== "" && (
        <div className="mt-6">
          <div className="text-3xl font-bold">Personal Profile</div>
          <div className="mt-3">{data?.bio}</div>
        </div>
      )}
    </>
  );
}

export default Intro;
