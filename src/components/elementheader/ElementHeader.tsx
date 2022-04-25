import React from "react";
interface props {
  title: string;
  value?: boolean;
}
function ElementHeader({ title, value }: props) {
  return (
    <div
      className="text-2xl font-bold flex items-center space-x-3 tooltip w-fit"
      data-tip="Enable the toggle for add this section in the resume"
    >
      <span>{title}</span>
    </div>
  );
}

export default ElementHeader;
