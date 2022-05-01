import React from "react";

function InfoIcon() {
  return (
    <>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 13V15"
        ></path>
        <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></circle>
      </svg>
    </>
  );
}

export default InfoIcon;
