import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link, useParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

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

  return (
    <div className="mt-16 md:ml-[70px] p-3 pt-5 flex flex-col gap-7">
      {searchVideos.map((video, index) => (
        <Link to={"/watch?v=" + video?.id?.videoId} key={index}>
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;
