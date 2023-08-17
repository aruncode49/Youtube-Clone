import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "/youtube_logo.png";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";

const Header = () => {
  // SideBar toggle Handler function
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="z-[999] flex justify-between py-3 px-4 md:py-1 items-center bg-white fixed w-full">
      {/* Hamburger Icon */}
      <div className="flex items-center gap-7">
        <div
          onClick={toggleSideBarHandler}
          className="p-1 hover:cursor-pointer"
        >
          <RxHamburgerMenu size={20} />
        </div>
        {/* Youtube Logo */}
        <a href="/">
          <div className="hover:cursor-pointer hidden md:block">
            <img className="h-14" src={Logo} alt="Youtube-Logo" />
          </div>
        </a>
      </div>
      {/* Search Component */}
      <div className="">
        <SearchBar />
      </div>
      {/* User Icon */}
      <div className="p-1 hover:cursor-pointer">
        <img
          className="w-9 border-[1.5px] border-black rounded-full"
          src="https://avatars.githubusercontent.com/u/112400317?v=4"
          alt="UserIcon "
        />
      </div>
    </div>
  );
};

export default Header;
