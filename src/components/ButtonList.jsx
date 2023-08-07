import React from "react";
import BodyButton from "./BodyButton";

const ButtonList = () => {
  return (
    <div className="fixed mt-[3.75rem] md:ml-[78px] md:w-full z-20 bg-white top flex py-2 overflow-x-auto">
      <BodyButton name="All" />
      <BodyButton name="Gaming" />
      <BodyButton name="Songs" />
      <BodyButton name="Live" />
      <BodyButton name="Soccer" />
      <BodyButton name="Cricket" />
      <BodyButton name="Cooking" />
      <BodyButton name="News" />
      <BodyButton name="History" />
      <BodyButton name="Coding" />
      <BodyButton name="GeeksForGeeks" />
    </div>
  );
};

export default ButtonList;
