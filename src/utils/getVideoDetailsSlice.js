import { createSlice } from "@reduxjs/toolkit";

const getVideoDetailsSlice = createSlice({
  name: "getVideoDetail",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    sendVideoDetail: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { sendVideoDetail } = getVideoDetailsSlice.actions;
export default getVideoDetailsSlice.reducer;
