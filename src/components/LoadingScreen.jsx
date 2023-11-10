import React from "react";
import { MutatingDots, TailSpin } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="w-full flex h-full items-center justify-center">
      {" "}
      <MutatingDots
        height="100"
        width="100"
        color="#e9f5e9"
        secondaryColor="#ffffff"
        radius="15"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingScreen;
