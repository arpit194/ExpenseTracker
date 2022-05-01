import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { dbURL } from "./variables";

const initialState = { expenses: [], totalAmount: 0 };

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addExpense(state, action) {
      const expense = { ...action.payload.expense };
      expense.id = uuidv4();
      state.expenses.push(expense);
      state.totalAmount =
        parseInt(state.totalAmount) + parseInt(expense.amount);
      fetch(dbURL + action.payload.userId + ".json", {
        method: "PUT",
        body: JSON.stringify(state),
      });
    },
    setExpenses(state, action) {
      if (action.payload) {
        state.expenses = action.payload.expenses;
        state.totalAmount = action.payload.totalAmount;
      } else {
        state.expenses = [];
        state.totalAmount = 0;
      }
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
