import React from "react";
interface props {
  label: string;
  triggerchange: (e: any) => void;
  value: any;
  loading: boolean;
  mandatory?: boolean;
}
function AppTextArea({
  label,
  triggerchange,
  value,
  loading,
  mandatory,
}: props) {
  return (
    <div className="form-control py-3">
      <label className="label">
        <span className="label-text">
          {label} {mandatory && <span className="text-red-400">*</span>}
        </span>
      </label>
      <textarea
        className={"textarea textarea-bordered h-60 "}
        placeholder="Type here."
        defaultValue={value}
        onChange={(e: any) => {
          triggerchange(e.target.value);
        }}
        disabled={loading}
      />
    </div>
  );
}

export default AppTextArea;
