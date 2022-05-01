import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  monthFilter: -1,
  yearFilter: new Date().getFullYear(),
  isLoading: false,
  displayName: "User",
  alert: {
    type: null,
    message: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setMonth(state, action) {
      state.monthFilter = action.payload;
    },
    setYear(state, action) {
      state.yearFilter = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setDisplayName(state, action) {
      state.displayName = action.payload;
    },
    setAlert(state, action) {
      state.alert.type = action.payload.type;
      state.alert.message = action.payload.message;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
