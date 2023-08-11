import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import sideBarButtonSlice from "./sideBarButtonSlice";
import getVideoDetailsSlice from "./getVideoDetailsSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    sideBarButtons: sideBarButtonSlice,
    getVideoDetail: getVideoDetailsSlice,
  },
});

export default store;
