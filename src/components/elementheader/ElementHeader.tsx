import React, { useState } from "react";
interface props {
  title: string;
  triggerchange: (e: boolean) => void;
}
function ElementHeader({ title, triggerchange }: props) {
  const [isChecked, SetIsChecked] = useState(true);
  return (
    <div
      className="text-2xl font-bold flex items-center space-x-3 tooltip w-fit"
      data-tip="Enable the toggle for add this section in the resume"
    >
      <span>{title}</span>

      <input
        type="checkbox"
        className="toggle toggle-sm"
        checked={isChecked}
        onChange={() => {
          triggerchange(isChecked);
          SetIsChecked(!isChecked);
        }}
      />
    </div>
  );
}

export default ElementHeader;
