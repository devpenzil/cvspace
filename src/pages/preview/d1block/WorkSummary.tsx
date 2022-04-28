import React from "react";
import Square from "../../../assets/icons/Square";

function WorkSummary() {
  return (
    <div className="mt-6">
      <div className="text-3xl font-bold">Work Experience</div>
      <div className="mt-3 space-y-6">
        {[1, 2, 3].map((obj, i) => {
          return (
            <div className="flex space-x-2" key={i}>
              <div className="mt-1">
                <Square />
              </div>
              <div>
                <div className="text-xl font-bold">Front End Developer</div>
                <div>Neoiot | 20.20.20202 - present</div>
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

export default WorkSummary;
