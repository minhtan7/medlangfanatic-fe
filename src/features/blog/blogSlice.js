import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { POST_PER_PAGE } from "../../app/config";

const initialState = {
  isLoading: false,
  error: null,
  postsById: {},
  currentPageBlogs: [],
  totalBlogs: 0,
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
      // const { count, posts } = action.payload;
      // posts.forEach((post) => {
      //   state.postsById[post._id] = post;
      //   if (!state.currentPageBlogs.includes(post._id)) {
      //     state.currentPageBlogs.push(post._id);
      //   }
      // });
      // state.totalBlogs = count;
    },
    resetPost(state, action) {
      state.postsById = {};
      state.currentPageBlogs = [];
    },

  },
});



export const getPosts =
  ({ userId, page, limit = POST_PER_PAGE }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const params = { page, limit };
        const response = await apiService.get(`/posts/user/${userId}`, {
          params,
        });
        if (page === 1) dispatch(slice.actions.resetPost());
        dispatch(slice.actions.getPostSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));
      }
    };





export default slice.reducer;
