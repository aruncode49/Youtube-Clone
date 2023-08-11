import React from "react";

const WatchPageShimmer = () => {
  return (
    <div className="mx-5 md:mx-7 mt-20 flex flex-col md:flex-row gap-3 items-center md:items-start">
      {/* left or top */}
      <div className="w-[500px] md:w-auto">
        <div className="w-[410px] h-[300px] md:w-[622px] md:h-[360px] bg-black "></div>
        <div className="mt-4 flex justify-between px-4 w-[400px] md:w-auto">
          <div className="w-40 md:w-80 h-6 bg-gray-300 rounded-full"></div>
          <div className="flex gap-4">
            <p className=" w-6 h-6 rounded-full bg-gray-300"></p>
            <p className="w-6 h-6 rounded-full bg-gray-300"></p>
            <p className="w-6 h-6 rounded-full bg-gray-300"></p>
            <p className="w-6 h-6 rounded-full bg-gray-300"></p>
          </div>
        </div>
        <div className="w-96 md:w-auto mx-4 mt-3 h-6 bg-gray-300 rounded-full"></div>
      </div>
      {/* right or bottom */}
      <div className="flex flex-col gap-2 w-[500px] md:w-auto px-4 md:px-0">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div className="flex gap-5 md:gap-1" key={index}>
              <div className="w-36 h-20 md:w-[180px] md:h-[100px] bg-gray-300 rounded-lg"></div>
              <div className="p-1">
                <p className="w-64 h-6 bg-gray-300 rounded-full"></p>
                <p className="w-40 mt-3 h-6 bg-gray-300 rounded-full"></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WatchPageShimmer;
