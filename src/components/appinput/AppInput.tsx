import React from "react";
interface props {
  disabled?: boolean;
  label?: string;
}
function AppInput({ disabled, label }: props) {
  return (
    <div className="py-3">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full "
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default AppInput;
