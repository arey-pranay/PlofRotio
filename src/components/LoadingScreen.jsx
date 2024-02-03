import React from "react";
import { MutatingDots, TailSpin } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="flex-col justify-center items-center py-80 sm:py-52 h-full w-full">
      <div className="w-screen  text-white flex items-center justify-center">
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
      <div className="w-screen text-center flex justify-center text-white">
        Might take a few seconds after this screen.. <br /> But it&apos;s gonna
        be worth the wait <br />I promise {"<3 "}
      </div>
    </div>
  );
};

export default LoadingScreen;
