import React from "react";
interface props {
  disabled?: boolean;
  label?: string;
  triggerchange: (e?: string) => void;
  value: any;
  loading: boolean;
  mandatory?: boolean;
}
function AppInput({
  disabled,
  label,
  triggerchange,
  value,
  loading,
  mandatory,
}: props) {
  return (
    <div className="py-3">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            {label} {mandatory && <span className="text-red-400">*</span>}
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className={"input input-bordered w-full "}
          disabled={disabled}
          onChange={(e) => {
            triggerchange(e.target.value);
          }}
          value={value}
          readOnly={loading}
        />
      </div>
    </div>
  );
}

export default AppInput;
