import React from "react";
interface props {
  label: string;
  loading?: boolean;
}
function AppBtn({ label, loading }: props) {
  return (
    <div className="py-3">
      <button className={"btn btn-block btn-primary " + (loading && "loading")}>
        {label}
      </button>
    </div>
  );
}

export default AppBtn;
