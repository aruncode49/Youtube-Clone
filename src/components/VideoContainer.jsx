import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  // Make api call for Youtube videos
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data?.items);
  };

  return videos.length === 0 ? (
    <VideoShimmer />
  ) : (
    <div className="p-3 pt-5 grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-5 justify-center md:justify-normal grid-flow-row">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
