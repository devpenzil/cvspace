import React from "react";
import PreviewWrapper from "../../../components/previewwrapper/PreviewWrapper";
interface props {
  data: {
    declaration: string;
  };
}
function Declaration({ data }: props) {
  return (
    <PreviewWrapper path="declaration">
      {data && (
        <div>
          <div className="text-3xl font-bold">Declaration</div>
          <div className="mt-3 space-y-6">{data?.declaration}</div>
        </div>
      )}
    </PreviewWrapper>
  );
}

export default Declaration;
