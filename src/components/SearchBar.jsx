import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState();

  // Debouncing with clear interval
  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  // hide Suggestion div
  let hideSuggestion;
  if (suggestion.length == 0) hideSuggestion = " hidden";

  return (
    <>
      <div className="flex ">
        <div>
          <input
            type="text"
            placeholder="Search"
            spellCheck={false}
            className="w-[50vw] outline-none text-base md:text-lg h-8 px-6 py-[1.125rem] border border-gray-500 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
        </div>

        <Link to={`/search/${searchQuery}`}>
          <div className="flex items-center h-8 px-5 py-[1.125rem] border border-gray-500 border-l-0 rounded-r-full bg-gray-100 hover:cursor-pointer">
            <GrSearch size={20} />
          </div>
        </Link>
      </div>
      {showSuggestion && (
        <div
          className={
            " fixed w-[50vw] bg-white py-2 rounded-lg border border-gray-300 shadow-lg" +
            hideSuggestion
          }
        >
          <ul>
            {suggestion.map((data, index) => (
              <li
                key={index}
                onMouseDown={() => handleSuggestionClick(data)}
                className="z-50 my-1 flex gap-2 items-center text-base px-3 py-1 font-medium hover:bg-[#F0F0F0] cursor-pointer"
              >
                <GrSearch />
                {data}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
