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

const SideBar = () => {
  return (
    <div className="w-52 p-4">
      {/* 3 Links */}
      <section>
        <ul>
          <li>
            <AiFillHome />
            Home
          </li>
          <li>
            <MdAppShortcut />
            Shorts
          </li>
          <li>
            <MdOutlineSubscriptions />
            Subscriptions
          </li>
        </ul>
      </section>

      {/* 4 Links */}
      <section>
        <ul>
          <li>
            <MdVideoLibrary />
            Library
          </li>
          <li>
            <GoHistory />
            History
          </li>
          <li>
            <MdOutlineWatchLater />
            Watch Later
          </li>
          <li>
            <AiOutlineLike />
            Liked videos
          </li>
        </ul>
      </section>

      {/* Explore Section*/}
      <section>
        <ul>
          <li>
            <IoIosMusicalNote />
            Music
          </li>
          <li>
            <AiOutlineTrophy />
            Sports
          </li>
          <li>
            <SiYoutubegaming />
            Gaming
          </li>
          <li>
            <MdMovie />
            Movies
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
