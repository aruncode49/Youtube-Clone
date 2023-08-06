import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";

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
    <div className="p-3 pt-5 flex flex-wrap gap-5 justify-center">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
