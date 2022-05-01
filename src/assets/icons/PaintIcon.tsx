import React from "react";

function PaintIcon() {
  return (
    <div>
      <svg width={20} height={20} fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 7.75H4.75M5.75 7.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V7.75H5.75Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12.25 12.25V4.75"
        />
      </svg>
    </div>
  );
}

export default PaintIcon;
