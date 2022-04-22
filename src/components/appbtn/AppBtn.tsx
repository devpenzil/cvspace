import React from "react";
interface props {
  label: string;
  loading?: boolean;
  triggerClick?: () => void;
}
function AppBtn({ label, loading, triggerClick }: props) {
  return (
    <div className="py-3">
      <button
        className={"btn btn-block btn-primary " + (loading && "loading")}
        onClick={triggerClick}
      >
        {label}
      </button>
    </div>
  );
}

export default AppBtn;
