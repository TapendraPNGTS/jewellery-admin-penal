import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allMarkups: [],
};
//internally using immer lib (can create mutable state)
export const markupsSlice = createSlice({
  name: "markupsSlice",
  initialState,
  reducers: {
    AllMarkups: (state, action) => {
      state.allMarkups = action.payload;
    },
    // AllLabgrown: (state, action) => {
    //   state.AllLabgrown = action.payload;
    // },
    // AllLabgrownById: (state, action) => {
    //   state.AllLabgrownById = action.payload;
    // },
  },
});
// this is for dispatch
export const { AllMarkups } = markupsSlice.actions;
// this is for configureStore
export default markupsSlice.reducer;