import React from "react";
import Star from "../../assets/icons/Star";
interface props {
  value: string;
}
function StarRating({ value }: props) {
  console.log(value);

  return (
    <div>
      <div className="flex space-x-2">
        <Star fill={parseInt(value) >= 0 ? "#fff" : ""} />
        <Star fill={parseInt(value) >= 25 ? "#fff" : ""} />
        <Star fill={parseInt(value) >= 50 ? "#fff" : ""} />
        <Star fill={parseInt(value) >= 75 ? "#fff" : ""} />
        <Star fill={parseInt(value) >= 100 ? "#fff" : ""} />
      </div>
    </div>
  );
}

export default StarRating;
