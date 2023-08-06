import React from "react";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { calculateTimeDistanceToNow } from "../utils/calculateTimeDistance";
import { calculateViews } from "../utils/constants";
import { calculateTimeDifference } from "../utils/constants";

const VideoCard = ({ info }) => {
  // Early return
  if (!info) return null;
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  // Correcting Views Count
  const views = calculateViews(statistics?.viewCount);

  // Correcting Published Date
  const calcTime = calculateTimeDistanceToNow(publishedAt);
  const time = calculateTimeDifference(calcTime);

  // Early return for the thumbnail reason
  if (!thumbnails.maxres) return;

  return (
    <div className="videoCard hover:cursor-pointer">
      <img
        className="videoCard-img rounded-lg w-auto md:w-[320px]"
        src={thumbnails?.maxres?.url}
        alt="Video Thumbnail"
      />
      <h1 className="videoCard-heading pt-2 px-2 font-medium max-w-[20rem]">
        {title}
      </h1>
      <p className="videoCard-p max-w-[20rem] px-2 pt-1 flex items-center gap-1.5 text-gray-700">
        <TiSocialYoutubeCircular size={28} />
        {channelTitle}
      </p>
      <div className="videoCard-end max-w-[20rem] px-2 flex gap-2 text-sm text-gray-700">
        <p>{views} views . </p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default VideoCard;
