import React from "react";
import Square from "../../../assets/icons/Square";
interface props {
  data: any;
}
function Certificate({ data }: props) {
  return (
    <>
      {data && (
        <div className="mt-6">
          <div className="text-3xl font-bold">Certifications</div>
          <div className="mt-3 space-y-6">
            {Object.entries(data).map((obj: any, i) => {
              return (
                <div className="flex space-x-2" key={i}>
                  <div className="mt-1">
                    <Square />
                  </div>
                  <div>
                    <div className="text-xl font-bold">{obj[1].name}</div>
                    <div>
                      {obj[1].dateawarded} | {obj[1].institute}
                    </div>
                    <div className="mt-1">{obj[1].summary}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Certificate;
