import React from "react";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { calculateTimeDifference } from "../utils/calculationFunction";
import { calculateTimeDistanceToNow } from "../utils/calculationFunction";
import { calculateViews } from "../utils/calculationFunction";

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
    <div className="videoCard hover:cursor-pointer w-auto">
      {/* Thumbnail */}
      <img
        className="videoCard-img rounded-lg w-auto md:w-[320px]"
        src={thumbnails?.maxres?.url}
        alt="Video Thumbnail"
      />
      <div className="flex pt-2">
        {/* VideoIcon -> Left */}
        <div>
          <TiSocialYoutubeCircular size={40} />
        </div>
        {/* Title & more -> right */}
        <div className="w-full md:max-w-[275px]">
          <h1 className="videoCard-heading px-2 font-medium max-w-[20rem] line-clamp-2">
            {title}
          </h1>
          <p className="videoCard-p max-w-[20rem] px-2 pt-1 flex items-center gap-1.5 text-gray-700">
            {channelTitle}
          </p>
          <div className="videoCard-end max-w-[20rem] px-2 flex gap-2 text-sm text-gray-700">
            <p>{views} views . </p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
