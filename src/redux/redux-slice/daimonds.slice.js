import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AllNatural: [],
    AllLabgrown: [],
    AllLabgrownById: [],
    AllNaturalById: [],
    AllNaturalByIdEdit: [],
    AllLabgrownByIdEdit:[],
};
//internally using immer lib (can create mutable state)
export const daimondsSlice = createSlice({
  name: "daimondsData",
  initialState,
  reducers: {
    AllNatural: (state, action) => {
      state.AllNatural = action.payload;
    },
    NaturalById: (state, action) => {
      state.AllNaturalById = action.payload;
    },
    NaturalByIdEdit: (state, action) => {
      state.AllNaturalByIdEdit = action.payload;
    },
    AllLabgrown: (state, action) => {
      state.AllLabgrown = action.payload;
    },
    LabgrownById: (state, action) => {
      state.AllLabgrownById = action.payload;
    },
    LabgrownByIdEdit: (state, action) => {
      state.AllLabgrownByIdEdit = action.payload;
    },
  },
});
// this is for dispatch

export const { AllNatural, AllLabgrown, NaturalById, LabgrownById, LabgrownByIdEdit, NaturalByIdEdit } = daimondsSlice.actions;

// this is for configureStore
export default daimondsSlice.reducer;