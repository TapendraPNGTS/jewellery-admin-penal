import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allShopTime: [],
 
};
//internally using immer lib (can create mutable state)
export const shopTimeSlice = createSlice({
  name: "shopTimeSlice",
  initialState,
  reducers: {
    AllShopTime: (state, action) => {
      state.allShopTime = action.payload;
    },
  
  },
});
// this is for dispatch
export const { AllShopTime } = shopTimeSlice.actions;
// this is for configureStore
export default shopTimeSlice.reducer;