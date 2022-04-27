import React from "react";
import Square from "../../../assets/icons/Square";

function Certificate() {
  return (
    <div className="mt-6">
      <div className="text-3xl font-bold">Certifications</div>
      <div className="mt-3 space-y-6">
        {[1, 2].map((obj) => {
          return (
            <div className="flex space-x-2">
              <div className="mt-1">
                <Square />
              </div>
              <div>
                <div className="text-xl font-bold">Graduation</div>
                <div>College of Engineering | 20.20.20202 </div>
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

export default Certificate;
