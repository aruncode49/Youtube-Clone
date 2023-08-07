import React from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <div className="flex ">
      <div>
        <input
          type="text"
          placeholder="Search"
          spellCheck={false}
          className="w-[50vw] outline-none text-lg h-8 px-3 py-[1.125rem] border border-gray-500 rounded-l-full"
        />
      </div>

      <div className="flex items-center h-8 px-5 py-[1.125rem] border border-gray-500 border-l-0 rounded-r-full bg-gray-100 hover:cursor-pointer">
        <GrSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
