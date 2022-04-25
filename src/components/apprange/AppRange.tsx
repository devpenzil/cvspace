import React from "react";
interface props {
  triggerChange: (e: any) => void;
}
function AppRange({ triggerChange }: props) {
  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={50}
          className="range range-xs range-primary"
          step={25}
          onChange={(e) => {
            triggerChange(e.target.value);
          }}
        />
        <div className="w-full flex justify-between text-2xl px-2">
          <span>😭</span>
          <span>😥</span>
          <span>😐</span>
          <span>🙂</span>
          <span>😍</span>
        </div>
      </div>
    </div>
  );
}

export default AppRange;
