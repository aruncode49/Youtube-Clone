import React from "react";
import BodyButton from "./BodyButton";

const ButtonList = () => {
  return (
    <div className="flex py-2 overflow-x-auto">
      <BodyButton name="All" />
      <BodyButton name="Gaming" />
      <BodyButton name="Songs" />
      <BodyButton name="Live" />
      <BodyButton name="Soccer" />
      <BodyButton name="Cricket" />
      <BodyButton name="Cooking" />
      <BodyButton name="News" />
      <BodyButton name="History" />
      <BodyButton name="Computer Science" />
    </div>
  );
};

export default ButtonList;
