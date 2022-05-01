import { getDownloadURL, ref as bucketref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import userPlaceholder from "../../../assets/placeholder.png";
import { bucket } from "../../../firebase/firebase";
import { viewOptions } from "../../../types/previewTypes";
import Certificate from "../d1block/Certificate";
import ContactMe from "../d1block/ContactMe";
import Declaration from "../d1block/Declaration";
import EducationSummary from "../d1block/EducationSummary";
import Intro from "../d1block/Intro";
import LanguageSummary from "../d1block/LanguageSummary";
import Name from "../d1block/Name";
import SkillsSummary from "../d1block/SkillsSummary";
import WorkSummary from "../d1block/WorkSummary";

interface props {
  data: {
    declaration?: any;
    education?: any;
    language?: any;
    personalinfo?: any;
    prof?: any;
    skills?: any;
    certificate?: any;
  };
  view: viewOptions;
  userUid?: string | undefined;
}
function DesignOne({ data, view, userUid }: props) {
  const [profilepic, SetProfilePic] = useState<string | undefined>(
    userPlaceholder
  );
  useEffect(() => {
    fetcImg();
  });
  const fetcImg = () => {
    getDownloadURL(bucketref(bucket, userUid))
      .then((url: any) => {
        SetProfilePic(url);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <div className="flex w-full bg-white rounded-lg outline-none">
      <div className="bg-sky-800 text-white w-1/3 py-20 px-8 rounded-lg">
        <div>
          <div className="avatar cursor-pointer  flex justify-center">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={profilepic} className="mx-auto" alt="user" />
            </div>
          </div>
        </div>
        <div className="h-10" />
        <ContactMe data={data?.personalinfo} />
        {view.skill && (
          <>
            <div className="h-10" />
            <SkillsSummary data={data?.skills} />
          </>
        )}
        {view.language && (
          <>
            <div className="h-10" />
            <LanguageSummary data={data?.language} />
          </>
        )}
      </div>
      <div className=" w-2/3 py-20 px-8 rounded-lg">
        <Name data={data?.personalinfo} />
        <div className="h-20" />
        <Intro data={data?.personalinfo} />
        {view.proff && (
          <>
            <div className="h-16" />
            <WorkSummary data={data?.prof} />
          </>
        )}
        {view.educational && (
          <>
            <div className="h-16" />
            <EducationSummary data={data?.education} />
          </>
        )}
        {view.certification && (
          <>
            <div className="h-16" />
            <Certificate data={data?.certificate} />
          </>
        )}
        {view.declaration && (
          <>
            <div className="h-16" />
            <Declaration data={data?.declaration} />
          </>
        )}
      </div>
    </div>
  );
}

export default DesignOne;
