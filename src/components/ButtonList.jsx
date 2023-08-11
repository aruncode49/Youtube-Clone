import React from "react";
import BodyButton from "./BodyButton";
import { Link } from "react-router-dom";

const ButtonList = () => {
  return (
    <div className="fixed mt-[3.75rem] md:ml-[78px] w-full  bg-white top flex py-2 overflow-x-auto">
      <div className="flex">
        <BodyButton name="All" />
        <Link to={`/search/gaming`}>
          <BodyButton name="Gaming" />
        </Link>
        <Link to={`/search/songs`}>
          <BodyButton name="Songs" />
        </Link>
        <Link to={`/search/live`}>
          <BodyButton name="Live" />
        </Link>
        <Link to={`/search/soccer`}>
          <BodyButton name="Soccer" />
        </Link>
        <Link to={`/search/cricket`}>
          <BodyButton name="Cricket" />
        </Link>
        <Link to={`/search/cooking`}>
          <BodyButton name="Cooking" />
        </Link>
        <Link to={`/search/news`}>
          <BodyButton name="News" />
        </Link>
        <Link to={`/search/history`}>
          <BodyButton name="History" />
        </Link>
        <Link to={`/search/coding`}>
          <BodyButton name="Coding" />
        </Link>
        <Link to={`/search/geeksforgeeks`}>
          <BodyButton name="GeeksForGeeks" />
        </Link>
      </div>
    </div>
  );
};

export default ButtonList;
