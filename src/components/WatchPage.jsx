import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBarButtons } from "../utils/sideBarButtonSlice";
import CommentContainer from "./CommentContainer";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchVideos, setSearchVideos] = useState();
  const [isCommentOn, setIsCommentOn] = useState(false);
  const paramId = searchParams.get("v");

  // Access the search query from getVideoDetailsSlice
  const searchQuery = useSelector((store) => store.getVideoDetail.searchQuery);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBarButtons(false));
  }, []);

  // Make api call for side videos at watch page
  useEffect(() => {
    getVideosFromSearch();
  }, [searchQuery]);

  const getVideosFromSearch = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${
        searchQuery + "videos"
      }&key=` + GOOGLE_API_KEY
    );
    const data = await res.json();
    setSearchVideos(data?.items);
  };

  {
    console.log(searchVideos);
  }

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
      {isCommentOn && <CommentContainer />}
    </div>
  );
};

export default WatchPage;
