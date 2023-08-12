import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { useDispatch } from "react-redux";
import { sendVideoDetail } from "../utils/getVideoDetailsSlice";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchVideos = () => {
  const params = useParams();
  const searchQuery = params.searchQuery;
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    getVideosFromSearch();
  }, [searchQuery]);

  const getVideosFromSearch = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=` +
        GOOGLE_API_KEY
    );
    const data = await res.json();
    setSearchVideos(data?.items);
  };

  // Now dispatch an action for send the search query to watch page
  const dispatch = useDispatch();
  // sendVideoDetailHandler function
  const sendVideoDetailHandler = () => {
    dispatch(sendVideoDetail(searchQuery));
  };

  return !searchVideos ? null : (
    <div className="mt-16 md:ml-[70px] md:p-3 pt-5 flex flex-col gap-7 justify-center mx-auto">
      {searchVideos.map((video, index) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          key={index}
          onClick={sendVideoDetailHandler}
        >
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;
