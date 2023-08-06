import { createSlice } from "@reduxjs/toolkit";

const sideBarButtonSlice = createSlice({
  name: "sideBarButtons",
  initialState: {
    isSideBarButtons: true,
  },
  reducers: {
    closeSideBarButtons: (state, action) => {
      state.isSideBarButtons = action.payload;
    },
  },
});

export const { closeSideBarButtons } = sideBarButtonSlice.actions;
export default sideBarButtonSlice.reducer;
