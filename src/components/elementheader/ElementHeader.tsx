import React from "react";
interface props {
  title: string;
  value?: boolean;
}
function ElementHeader({ title, value }: props) {
  return (
    <div className="text-2xl font-bold flex items-center space-x-3  w-fit">
      <span>{title}</span>
    </div>
  );
}

export default ElementHeader;
