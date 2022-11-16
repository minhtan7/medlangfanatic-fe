import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

const initialState = {
  isLoading: false,
  error: null,
  currentCourse: {}
};

const slice = createSlice({
  name: "course",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getSingleCourseSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.currentCourse = action.payload
    }
  },
});



export const getSingleCourse =
  ({ courseId }) =>
    async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await apiService.get(`/courses/${courseId}`);
        dispatch(slice.actions.getSingleCourseSuccess(response.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error.message));
      }
    };






export default slice.reducer;
