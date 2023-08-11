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

  // commentDisplayHandler function
  const commentDisplayHandler = () => {
    if (isCommentOn) {
      setIsCommentOn(false);
    } else {
      setIsCommentOn(true);
    }
  };

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
      <div>
        <iframe
          width="622"
          height="360"
          src={"https://www.youtube.com/embed/" + paramId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h1
            className="text-lg font-medium mt-2 border bg-gray-600 text-white p-2 cursor-pointer rounded-md"
            onClick={commentDisplayHandler}
          >
            Comments: {isCommentOn ? "⬆️" : "⬇️"}
          </h1>
          {isCommentOn && <CommentContainer />}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
