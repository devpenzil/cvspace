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

function DesignOne() {
  return (
    <div className="flex w-full bg-white rounded-lg">
      <div className="bg-sky-800 text-white w-1/3 py-20 px-8 rounded-lg">
        <div>
          <div className="avatar cursor-pointer  flex justify-center">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={userPlaceholder} className="mx-auto" alt="user" />
            </div>
          </div>
        </div>
        <ContactMe />
        <SkillsSummary />
        <LanguageSummary />
      </div>
      <div className=" w-2/3 py-20 px-8 rounded-lg">
        <Name />
        <div className="h-20" />
        <Intro />
        <div className="h-10" />
        <WorkSummary />
        <div className="h-10" />
        <EducationSummary />
        <div className="h-10" />
        <Certificate />
        <div className="h-10" />
        <Declaration />
      </div>
    </div>
  );
}

export default DesignOne;
