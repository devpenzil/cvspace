import React from "react";
import Star from "../../../assets/icons/Star";

function SkillsSummary() {
  return (
    <div className="mt-10">
      <div className="text-2xl font-bold">Skills</div>
      <div className="space-y-3 mt-3">
        {[1, 2, 3, 4].map((obj, i) => {
          return (
            <div
              className="flex items-center justify-between flex-wrap"
              key={i}
            >
              <div>Front End Development</div>
              <div className="flex space-x-2">
                <Star fill="#fff" />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSummary;
