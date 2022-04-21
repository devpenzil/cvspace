import React from "react";
interface props {
  title: string;
}
function ElementHeader({ title }: props) {
  return (
    <div
      className="text-2xl font-bold flex items-center space-x-3 tooltip w-fit"
      data-tip="Enable the toggle for add this section in the resume"
    >
      <span>{title}</span>

      <input
        type="checkbox"
        className="toggle toggle-sm"
        defaultChecked={true}
      />
    </div>
  );
}

export default ElementHeader;
