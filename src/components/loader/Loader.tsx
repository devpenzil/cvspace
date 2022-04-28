import React from "react";
import Lottie from "react-lottie";
import plane from "../../assets/animation/plane.json";
function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: plane,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full h-96 flex flex-col justify-center items-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default Loader;
