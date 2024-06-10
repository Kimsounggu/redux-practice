import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      const value = action.payload;
      state.count = state.count + value;
    },
    decrement: (state, action) => {
      const value = action.payload;
      state.count = state.count - value;
    },
  },
});

export const countReducer = countSlice.reducer;

export const { increment, decrement } = countSlice.actions;
