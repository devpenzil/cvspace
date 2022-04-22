import React from "react";
import empty from "../../assets/no-results.png";
function EmptyBlock() {
  return (
    <div>
      <div className="card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img src={empty} alt="nothing" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">No Details here..</h2>
        </div>
      </div>
    </div>
  );
}

export default EmptyBlock;
