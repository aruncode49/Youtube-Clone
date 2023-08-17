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
import { Link } from "react-router-dom";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen);

  return !isSideBarOpen ? null : (
    <div className="w-56 p-4 pt-0 fixed top-14 h-[100vh] z-40 bg-white">
      {/* 3 Links */}
      <section className="pb-4 border-b-[1.5px] border-gray-300">
        <ul className="flex flex-col gap-1 ">
          <Link to="/">
            <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer ">
              <AiFillHome size={22} />
              Home
            </li>
          </Link>
          <Link to={"/search/shorts"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <MdAppShortcut />
              Shorts
            </li>
          </Link>
          <Link to={"/subscription"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <MdOutlineSubscriptions />
              Subscriptions
            </li>
          </Link>
        </ul>
      </section>

      {/* 4 Links */}
      <section className="pb-4 pt-4 border-b-[1.5px] border-gray-300">
        <ul>
          <Link to={"/library"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <MdVideoLibrary />
              Library
            </li>
          </Link>
          <Link to={"/history"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <GoHistory />
              History
            </li>
          </Link>
          <Link to={"/watchLater"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <MdOutlineWatchLater />
              Watch Later
            </li>
          </Link>
          <Link to={"/likedVideos"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <AiOutlineLike />
              Liked videos
            </li>
          </Link>
        </ul>
      </section>

      {/* Explore Section*/}
      <section className="pb-4 pt-4">
        <ul>
          <Link to={"/search/music"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <IoIosMusicalNote />
              Music
            </li>
          </Link>
          <Link to={"/search/sports"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <AiOutlineTrophy />
              Sports
            </li>
          </Link>
          <Link to={"/search/gaming"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <SiYoutubegaming />
              Gaming
            </li>
          </Link>
          <Link to={"/search/movies"}>
            <li className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer">
              <MdMovie />
              Movies
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
