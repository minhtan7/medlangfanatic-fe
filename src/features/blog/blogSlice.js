import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { POST_PER_PAGE } from "../../app/config";

const initialState = {
  isLoading: false,
  error: null,
  postsById: {},
  currentPageBlogs: {},
  totalBlogs: 0,
  singleBlogPage: {}
};

const slice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    hasError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getBlogSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentPageBlogs = action.payload
    },
    getSingleBlogSuccess(state, action) {
      state.isLoading = false
      state.error = null
      state.singleBlogPage = action.payload
    }
  },
});



export const getPosts =
  ({ page = 1, limit = POST_PER_PAGE }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await apiService.get(`/posts?page=${page}&limit=${limit}`);
        console.log(response)
        dispatch(slice.actions.getBlogSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));
      }
    };

export const getSingleBlog =
  ({ slug }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await apiService.get(`/posts/${slug}`);
        dispatch(slice.actions.getSingleBlogSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));
      }
    };





export default slice.reducer;
