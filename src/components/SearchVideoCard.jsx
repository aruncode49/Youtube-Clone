import React from "react";
import { calculateTimeDifference } from "../utils/calculationFunction";
import { calculateTimeDistanceToNow } from "../utils/calculationFunction";
import { IoSearchCircle } from "react-icons/io5";

const SearchVideoCard = ({ info }) => {
  if (!info) return null;
  console.log(info);
  const { id, kind, snippet } = info;
  const { publishedAt, thumbnails, title, channelTitle, description } = snippet;

  // calculate published time
  const calcTime = calculateTimeDistanceToNow(publishedAt);
  const time = calculateTimeDifference(calcTime);

  return id?.kind != "youtube#video" ? null : (
    <div className="flex flex-col md:flex-row gap-3 px-3 hover:cursor-pointer max-w-[400px] md:max-w-full">
      {/* left->thumbnail */}
      <div>
        <img
          className="rounded-lg w-[26.1875rem] h-[13.125rem] md:h-[10rem] md:w-[300px] object-cover"
          src={thumbnails?.high?.url}
          alt="thumbnail"
        />
      </div>
      {/* right->video details */}
      <div className="w-full md:max-w-[43.75rem] xl:max-w-full">
        <h1 className="px-2 text-lg font-medium line-clamp-2">{title}</h1>
        <div className="flex gap-1 items-center px-1 md:my-3">
          <IoSearchCircle size={20} color="purple" />
          <p className="max-w-[20rem] text-gray-700">{channelTitle}</p>
          <p className="ml-2">{". " + time}</p>
        </div>
        <p className="px-2 line-clamp-1 md:line-clamp-2 text-gray-700">
          {"➡️ " + description}
        </p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
