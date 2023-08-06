import SideBar from "./SideBar";
import SideBarButtons from "./SideBarButtons";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <SideBarButtons />
      <Outlet />
    </div>
  );
};

export default Body;
