import React from "react";
interface props {
  data: {
    declaration: string;
  };
}
function Declaration({ data }: props) {
  return (
    <>
      {data && (
        <div className="mt-6">
          <div className="text-3xl font-bold">Declaration</div>
          <div className="mt-3 space-y-6">{data?.declaration}</div>
        </div>
      )}
    </>
  );
}

export default Declaration;
