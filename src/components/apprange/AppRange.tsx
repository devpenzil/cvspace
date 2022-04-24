import React from "react";

function AppRange() {
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
