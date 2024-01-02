import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allOrders: [],
  ordersById: [],
  allLeads: [],
  leadsDetailsById: [],
};
//internally using immer lib (can create mutable state)
export const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState,
  reducers: {
    AllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    OrdersById: (state, action) => {
      state.ordersById = action.payload;
    },
    AllLeads: (state, action) => {
      state.allLeads = action.payload;
    },
    LeadsDetailsById: (state, action) => {
      state.leadsDetailsById = action.payload;
    },
   
  },
});
// this is for dispatch
export const { AllOrders, OrdersById, AllLeads, LeadsDetailsById } = ordersSlice.actions;
// this is for configureStore
export default ordersSlice.reducer;