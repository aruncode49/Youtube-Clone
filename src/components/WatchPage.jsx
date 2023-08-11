import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBarButtons } from "../utils/sideBarButtonSlice";
import CommentContainer from "./CommentContainer";
import CommentVideosCard from "./CommentVideosCard";
import { Link } from "react-router-dom";
import WatchPageShimmer from "./WatchPageShimmer";

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
      }&key=` + "AIzaSyBKNr4loFrPgQrMHHgn-UrA2mVc1ROOMWI"
    );
    const data = await res.json();
    setSearchVideos(data?.items);
  };

  // sendVideoDetailHandler function
  const sendVideoDetailHandler = () => {
    dispatch(sendVideoDetail(searchQuery));
  };

  return !searchVideos ? (
    <WatchPageShimmer />
  ) : (
    <div className="flex flex-col md:gap-2 md:flex-row mx-5 md:mx-7 mt-20 overflow-y-hidden">
      <div className="">
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
      <div className="flex flex-col gap-3 mt-4 md:mt-0 md:flex-1 mb-4">
        {searchVideos.map((video, index) => (
          <Link
            to={"/watch?v=" + video?.id?.videoId}
            key={index}
            onClick={sendVideoDetailHandler}
          >
            <CommentVideosCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
