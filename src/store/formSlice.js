import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "Car/Bike",
  date: new Date().toISOString().substring(0, 10),
  amount: 0,
  description: "",
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
      let a = new Date(action.payload);
      state.month = a.getMonth();
      state.year = a.getFullYear();
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setDesc(state, action) {
      state.description = action.payload;
    },
    resetForm(state) {
      return {
        type: "Car/Bike",
        date: new Date().toISOString().substring(0, 10),
        amount: 0,
        description: "",
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
      };
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
