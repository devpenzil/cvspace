import React from "react";
import Square from "../../../assets/icons/Square";

function EducationSummary() {
  return (
    <div className="mt-6">
      <div className="text-3xl font-bold">Educational Qualifications</div>
      <div className="mt-3 space-y-6">
        {[1, 2, 3].map((obj, i) => {
          return (
            <div className="flex space-x-2" key={i}>
              <div className="mt-1">
                <Square />
              </div>
              <div>
                <div className="text-xl font-bold">Graduation</div>
                <div>College of Engineering </div>
                <div>20.20.20202 - present</div>
                <div className="mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta quo ex quidem eveniet beatae voluptatibus praesentium
                  ducimus reprehenderit deleniti aperiam
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationSummary;
