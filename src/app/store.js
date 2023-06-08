import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./_slice/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
