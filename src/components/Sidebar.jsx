import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdAppShortcut } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosMusicalNote } from "react-icons/io";
import { AiOutlineTrophy } from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { MdMovie } from "react-icons/md";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);

  return !isSideBarOpen ? null : (
    <div className="w-56 p-4 pt-0 shadow-md absolute bg-white">
      {/* 3 Links */}
      <section className="pb-4 border-b-[1.5px] border-gray-300">
        <ul className="flex flex-col gap-1 ">
          <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer ">
            <AiFillHome size={22} />
            Home
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <MdAppShortcut />
            Shorts
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <MdOutlineSubscriptions />
            Subscriptions
          </li>
        </ul>
      </section>

      {/* 4 Links */}
      <section className="pb-4 pt-4 border-b-[1.5px] border-gray-300">
        <ul>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <MdVideoLibrary />
            Library
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <GoHistory />
            History
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <MdOutlineWatchLater />
            Watch Later
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <AiOutlineLike />
            Liked videos
          </li>
        </ul>
      </section>

      {/* Explore Section*/}
      <section className="pb-4 pt-4">
        <ul>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <IoIosMusicalNote />
            Music
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <AiOutlineTrophy />
            Sports
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <SiYoutubegaming />
            Gaming
          </li>
          <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <MdMovie />
            Movies
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
