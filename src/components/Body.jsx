import { useEffect } from "react";
import SideBar from "./SideBar";
import SideBarButtons from "./SideBarButtons";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex">
      <SideBar />
      <SideBarButtons />
      <Outlet />
    </div>
  );
};

export default Body;
