import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBarButtons } from "../utils/sideBarButtonSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const paramId = searchParams.get("v");

  const dispatch = useDispatch();
  dispatch(closeSideBarButtons(false));

  return (
    <div className="mx-5 md:mx-7 mt-20 overflow-y-hidden">
      <iframe
        width="622"
        height="360"
        src={"https://www.youtube.com/embed/" + paramId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
