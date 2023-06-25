import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    checked: false,
    patterns: [],
    difficulty: "",
    companies: [],
  },
};

export const dsaSlice = createSlice({
  name: "dsa",
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      const { filterName, value } = action.payload;
      state.filters[filterName] = value;
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    resetProgress: (state) => {
      questions.forEach((question) => {
        localStorage.removeItem(question.slug);
      });
    },
  },
});

export const { updateFilters, resetFilters, resetProgress } = dsaSlice.actions;

export default dsaSlice.reducer;
