import React from "react";

function Square(props: any) {
  return (
    <>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect
          width="12.5"
          height="12.5"
          x="5.75"
          y="5.75"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          rx="1"
          {...props}
        ></rect>
      </svg>
    </>
  );
}

export default Square;
