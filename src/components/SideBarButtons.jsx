import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdAppShortcut } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

const SideBarButtons = () => {
  const isSideBarButtonsOpen = useSelector(
    (store) => store.sideBarButtons.isSideBarButtons
  );

  return !isSideBarButtonsOpen ? null : (
    <div className="fixed top-16 px-1 hidden md:block bg-white">
      <Link to={"/"}>
        <div className="flex flex-col items-center justify-center gap-1 py-4 hover:bg-[#F0F0F0] hover:rounded-lg hover:cursor-pointer">
          <AiFillHome size={22} />
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center gap-1 py-4 hover:bg-[#F0F0F0] hover:rounded-lg hover:cursor-pointer">
        <MdAppShortcut size={22} />
        <p className="text-xs">Shorts</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 py-4 hover:bg-[#F0F0F0] hover:rounded-lg hover:cursor-pointer">
        <MdOutlineSubscriptions size={22} />
        <p className="text-xs">Subscriptions</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 py-4 hover:bg-[#F0F0F0] hover:rounded-lg hover:cursor-pointer">
        <MdVideoLibrary size={22} />
        <p className="text-xs">Library</p>
      </div>
    </div>
  );
};

export default SideBarButtons;
