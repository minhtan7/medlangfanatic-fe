import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import courseReducer from "../features/course/courseSlice"

const rootReducer = {
  blog: blogReducer,
  course: courseReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
