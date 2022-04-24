import React, { useState } from "react";
interface props {
  monthonly: boolean;
  label: string;
  presentcheck?: boolean;
  value?: string;
  triggerChange: (e?: any) => void;
  mandatory?: boolean;
  loading?: boolean;
}
function AppDate({
  monthonly,
  label,
  presentcheck,
  value,
  triggerChange,
  mandatory,
  loading,
}: props) {
  const [present, SetPresent] = useState(false);
  return (
    <div className="form-control w-full py-3 ">
      <label className="label">
        <span className="label-text">
          {label} {mandatory && <span className="text-red-400">*</span>}
        </span>
      </label>
      <input
        type={monthonly ? "month" : "date"}
        placeholder="Type here"
        className={"input input-bordered w-full "}
        disabled={present}
        onChange={(e) => {
          triggerChange(e.target.value);
        }}
        value={value}
        readOnly={loading}
      />
      {presentcheck && (
        <div className="w-fit">
          <label className="label cursor-pointer gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              onClick={() => {
                SetPresent(!present);
              }}
            />
            <span className="label-text font-bold">Present</span>
          </label>
        </div>
      )}
    </div>
  );
}

export default AppDate;
