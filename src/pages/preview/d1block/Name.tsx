import React from "react";
interface props {
  data: {
    bio?: "";
    email?: "";
    jobtitle?: "";
    name?: "";
    phone?: "";
    website?: "";
  };
}
function Name({ data }: props) {
  return (
    <>
      {data && (
        <div>
          <div className="text-4xl font-semibold mt-6">
            {data?.name !== "" ? data?.name : "Your Name"}
          </div>

          <div className="h-1 w-80 bg-slate-700 mt-2" />
          {data?.jobtitle !== "" && (
            <div className="text-4xl font-semibold mt-6">{data?.jobtitle}</div>
          )}
        </div>
      )}
    </>
  );
}

export default Name;
