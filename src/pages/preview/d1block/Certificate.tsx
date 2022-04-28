import React from "react";
import Square from "../../../assets/icons/Square";
import PreviewWrapper from "../../../components/previewwrapper/PreviewWrapper";
interface props {
  data: any;
}
function Certificate({ data }: props) {
  return (
    <PreviewWrapper path="certification">
      {data && (
        <div>
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
    </PreviewWrapper>
  );
}

export default Certificate;
