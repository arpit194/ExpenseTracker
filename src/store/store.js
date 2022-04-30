import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expenseSlice";
import formSlice from "./formSlice";
import loginSlice from "./loginSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    expenses: expenseSlice.reducer,
    expense: formSlice.reducer,
    ui: uiSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
