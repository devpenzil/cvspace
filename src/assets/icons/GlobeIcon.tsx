import React from "react";

function GlobeIcon() {
  return (
    <>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 12H12H19"
        ></path>
      </svg>
    </>
  );
}

export default GlobeIcon;
