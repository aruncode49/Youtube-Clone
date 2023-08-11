import React from "react";
import { calculateTimeDifference } from "../utils/calculationFunction";
import { calculateTimeDistanceToNow } from "../utils/calculationFunction";
import { IoSearchCircle } from "react-icons/io5";

const CommentVideosCard = ({ info }) => {
  if (!info) return null;
  const { id, snippet } = info;
  const { publishedAt, thumbnails, title, channelTitle, description } = snippet;

  // calculate published time
  const calcTime = calculateTimeDistanceToNow(publishedAt);
  const time = calculateTimeDifference(calcTime);

  return id?.kind != "youtube#video" ? null : (
    <div className="flex gap-2">
      {/* left->thumbnail */}
      <div>
        <img
          className="max-w-[140px] max-h-[11.5625rem] rounded-lg"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
      </div>
      {/* right->video details */}
      <div className="">
        <h1 className="font-medium line-clamp-1">{title}</h1>
        <p className="text-gray-600">{"⌚ " + time}</p>
        <div className="flex gap-1 items-center">
          <IoSearchCircle size={20} color="purple" />
          <p className="text-gray-600">{channelTitle}</p>
        </div>
        <p className="line-clamp-1">{"➡️ " + description}</p>
      </div>
    </div>
  );
};

export default CommentVideosCard;
