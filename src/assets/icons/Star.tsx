import React from "react";

function Star(props: any) {
  return (
    <>
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
          {...props}
        ></path>
      </svg>
    </>
  );
}

export default Star;
