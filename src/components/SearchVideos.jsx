import React, { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link, useParams } from "react-router-dom";

const SearchVideos = () => {
  const params = useParams();
  const searchQuery = params.searchQuery;

  useEffect(() => {
    getVideosFromSearch();
  }, [searchQuery]);

  const getVideosFromSearch = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=` +
        GOOGLE_API_KEY
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="mt-20 ml-20">
      <h1>{searchQuery}</h1>
    </div>
  );
};

export default SearchVideos;
