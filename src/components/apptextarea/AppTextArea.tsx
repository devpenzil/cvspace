import React from "react";
interface props {
  label: string;
  triggerchange: (e: any) => void;
  value: any;
  loading: boolean;
}
function AppTextArea({ label, triggerchange, value, loading }: props) {
  return (
    <div className="form-control py-3">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-60"
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
