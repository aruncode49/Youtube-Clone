import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { closeSideBarButtons } from "../utils/sideBarButtonSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBarButtons(true));
  }, []);

  return (
    <div className="w-full px-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
