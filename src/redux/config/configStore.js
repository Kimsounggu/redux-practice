import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../slices/countSlice";

const store = configureStore({
  reducer: {
    카운터: countReducer,
  },
});
export default store;
