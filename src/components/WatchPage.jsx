import React from "react";
import { useDispatch } from "react-redux";
import { closeSideBarButtons } from "../utils/sideBarButtonSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const paramId = searchParams.get("v");
  console.log(paramId);

  // close sideBar buttons
  const dispatch = useDispatch();
  dispatch(closeSideBarButtons(false));

  return (
    <div className="px-7 pt-4">
      <iframe
        width="622"
        height="360"
        src={"https://www.youtube.com/embed/" + paramId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
