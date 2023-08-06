import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import SideBarButtons from "./SideBarButtons";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <SideBarButtons />
      <MainContainer />
    </div>
  );
};

export default Body;
