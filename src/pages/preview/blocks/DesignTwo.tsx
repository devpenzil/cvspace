/* eslint-disable no-lone-blocks */
import React from "react";
import userPlaceholder from "../../../assets/placeholder.png";
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
}
function DesignTwo({ data }: props) {
  return (
    <div className="flex flex-col w-full bg-slate-900 rounded-lg p-8 text-white">
      <div className="flex justify-center items-center bg-gray-700 w-fit mx-auto p-12 space-x-12 rounded-xl">
        <div>
          <div className="avatar cursor-pointer  flex justify-center">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={userPlaceholder} className="mx-auto" alt="user" />
            </div>
          </div>
        </div>
        <div>
          <Name data={data?.personalinfo} />
        </div>
      </div>
      <div className="mt-10 flex justify-around text-white">
        <div className="w-[45%] px-8">
          <Intro data={data?.personalinfo} />
          <div className="h-16" />
          <SkillsSummary data={data?.skills} />
          <div className="h-16" />
          <LanguageSummary data={data?.language} />
          <div className="h-16" />
          <ContactMe data={data?.personalinfo} />
        </div>

        <div className="w-[45%] px-8">
          <EducationSummary data={data?.education} />
          <div className="h-16" />
          <WorkSummary data={data?.prof} />
          <div className="h-16" />
          <Certificate data={data?.certificate} />
        </div>
      </div>
      <div className="mt-20 px-16 mb-16">
        <Declaration data={data?.declaration} />
      </div>
    </div>
  );
}

export default DesignTwo;

{
  /* <div className="bg-purple-800 text-white w-1/3 py-20 px-8 rounded-lg">
        <div>
          <div className="avatar cursor-pointer  flex justify-center">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={userPlaceholder} className="mx-auto" alt="user" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-2/3 py-20 px-8 rounded-lg">
        <Name data={data?.personalinfo} />
        <div className="h-10" />
        <div className="h-10" />
        <div className="h-10" />
        <div className="h-10" />
      </div> */
}
