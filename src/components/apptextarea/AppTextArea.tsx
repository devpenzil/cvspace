import React from "react";

function AppTextArea() {
  return (
    <div className="form-control py-3">
      <label className="label">
        <span className="label-text">Your bio</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-60"
        placeholder="Type here."
        defaultValue={""}
      />
    </div>
  );
}

export default AppTextArea;
