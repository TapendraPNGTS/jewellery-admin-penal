import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalUser: [],
    totalOrder: [],
};
//internally using immer lib (can create mutable state)
export const dashboardSlice = createSlice({
  name: "daimondsData",
  initialState,
  reducers: {
    TotalUser: (state, action) => {
      state.totalUser = action.payload;
    },
    TotalOrder: (state, action) => {
      state.totalOrder = action.payload;
    },
  },
});
// this is for dispatch

export const { TotalUser, TotalOrder } = dashboardSlice.actions;

// this is for configureStore
export default dashboardSlice.reducer;