import React from "react";

const VideoShimmer = () => {
  return (
    <div className="p-3 pt-5 flex flex-wrap gap-5 justify-center">
      {Array(50)
        .fill("")
        .map((e, index) => (
          <div>
            <div className="w-[22rem]  md:w-[20rem] h-[11.25rem] rounded-lg bg-gray-300"></div>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-9 h-9 bg-gray-300 rounded-full"></div>
              <div className="flex flex-col gap-3">
                <div className="w-[250px] h-[0.9375rem] bg-gray-300 rounded-sm"></div>
                <div className="w-[11.25rem] h-[0.9375rem] bg-gray-300 rounded-sm"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VideoShimmer;
