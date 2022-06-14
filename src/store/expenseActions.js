import { dbURL } from "./variables";
import { expenseActions } from "./expenseSlice";
import { uiActions } from "./uiSlice";

export const fetchExpenses = (userId) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));
    const response = await fetch(dbURL + userId + ".json");

    if (!response.ok) {
      dispatch(
        uiActions.setAlert({ type: "error", message: "Cannot fetch expenses" })
      );
    }
    let expenses = await response.json();
    expenses = {
      expenses: expenses.expenses.filter((expense) => {
        return expense !== null;
      }),
      totalAmount: expenses.totalAmount,
    };
    dispatch(expenseActions.setExpenses(expenses));
    dispatch(uiActions.setIsLoading(false));
  };
};
