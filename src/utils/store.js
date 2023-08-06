import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import sideBarButtonSlice from "./sideBarButtonSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    sideBarButtons: sideBarButtonSlice,
  },
});

export default store;
