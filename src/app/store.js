import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";


const rootReducer = {
  blog: blogReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
